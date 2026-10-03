import { createRoot, type Root } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import { AssistResponseSchema, type ContextPayload, type MemoryItem, type ResearchSession } from "@ambient/contracts";
import { getSession, saveMemory, saveSession } from "../lib/local-store";
import { collectTabs } from "../lib/tabs";

export const config = { matches: ["http://*/*", "https://*/*"], all_frames: false };

type Editable = HTMLInputElement | HTMLTextAreaElement | HTMLElement;
type AssistResult = ReturnType<typeof AssistResponseSchema.parse>;
const API_URL = process.env.PLASMO_PUBLIC_API_URL ?? "http://127.0.0.1:8787";

function isEditable(target: EventTarget | null): target is Editable {
  if (!(target instanceof HTMLElement)) return false;
  if (target instanceof HTMLInputElement) return !target.disabled && !target.readOnly && ["text", "search", "email", "url"].includes(target.type);
  if (target instanceof HTMLTextAreaElement) return !target.disabled && !target.readOnly;
  return target.isContentEditable;
}

function readField(field: Editable) {
  return field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement ? field.value : field.innerText;
}

function insertText(field: Editable, value: string, replaceAll = false) {
  if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
    const start = replaceAll ? 0 : field.selectionStart ?? field.value.length;
    const end = replaceAll ? field.value.length : field.selectionEnd ?? start;
    field.setRangeText(value, start, end, "end");
    field.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: value }));
    field.focus();
    return;
  }
  field.focus();
  if (replaceAll) field.textContent = value;
  else {
    const selection = window.getSelection();
    if (selection?.rangeCount) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(value));
      range.collapse(false);
    } else field.append(document.createTextNode(value));
  }
  field.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: value }));
}

function makePayload(field: Editable, query: string, tabs: chrome.tabs.Tab[], memory: MemoryItem[]): ContextPayload {
  const capturedAt = new Date().toISOString();
  const main = document.querySelector("main, article, [role=main]") ?? document.body;
  const selection = field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement
    ? field.value.slice(field.selectionStart ?? 0, field.selectionEnd ?? 0).trim() || undefined
    : window.getSelection()?.toString().trim() || undefined;
  const sources: ContextPayload["sources"] = [
    { id: "field", kind: "field", text: readField(field).slice(0, 8_000), capturedAt },
    { id: "active-page", kind: "page", title: document.title, url: location.href, text: (main?.innerText ?? "").slice(0, 14_000), capturedAt },
    ...tabs.filter((tab) => tab.url && tab.title && /^https?:\/\//.test(tab.url)).slice(0, 12).map((tab, index) => ({
      id: `tab-${tab.id ?? index}`, kind: "tab" as const, title: tab.title, url: tab.url, tabId: tab.id,
      tabGroupId: typeof tab.groupId === "number" && tab.groupId >= 0 ? tab.groupId : undefined, capturedAt
    }))
  ];
  if (selection) sources.unshift({ id: "selection", kind: "selection", text: selection.slice(0, 8_000), capturedAt });
  return {
    requestId: crypto.randomUUID(), capturedAt, query, fieldText: readField(field).slice(0, 8_000), selection,
    sources, preferences: memory.filter((item) => item.status === "approved").slice(0, 10)
  };
}

function Widget({ field, close }: { field: Editable; close: () => void }) {
  const [query, setQuery] = useState(readField(field));
  const [answer, setAnswer] = useState("");
  const [clarification, setClarification] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AssistResult | null>(null);
  const [memorySuggestions, setMemorySuggestions] = useState<string[]>([]);
  const [sessionSaved, setSessionSaved] = useState(false);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { composerRef.current?.focus(); }, []);

  async function submit(answerToClarification?: string) {
    if (!query.trim()) { setError("Add a prompt or select text first."); return; }
    setPending(true); setError("");
    try {
      const [tabs, stored, active] = await Promise.all([
        collectTabs(), chrome.storage.local.get<{ "approved-memory"?: MemoryItem[] }>("approved-memory"),
        chrome.storage.local.get<{ "active-session"?: string }>("active-session")
      ]);
      const context = makePayload(field, query.trim(), tabs, stored["approved-memory"] ?? []);
      const session = active["active-session"] ? await getSession(active["active-session"]) : undefined;
      if (session) context.sources.push({
        id: `session-${session.id}`, kind: "session", title: session.title,
        text: JSON.stringify({ goal: session.goal, findings: session.findings, contradictions: session.contradictions, unknowns: session.unknowns, nextSteps: session.nextSteps, sources: session.sources }),
        capturedAt: new Date().toISOString()
      });
      if (answerToClarification) context.sources.push({ id: "clarification", kind: "clarification", text: answerToClarification, capturedAt: new Date().toISOString() });
      const response = await fetch(`${API_URL}/api/assist`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context, clarificationAnswer: answerToClarification })
      });
      if (!response.ok) throw new Error((await response.json().catch(() => null))?.error ?? `Request failed (${response.status})`);
      const parsed = AssistResponseSchema.parse(await response.json());
      setResult(parsed);
      if (parsed.status === "complete") {
        setAnswer(parsed.answer);
        void fetch(`${API_URL}/api/memory-suggestions`, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: context.query, answer: parsed.answer })
        }).then((memoryResponse) => memoryResponse.ok ? memoryResponse.json() : { suggestions: [] })
          .then((memoryResult: { suggestions?: string[] }) => setMemorySuggestions((memoryResult.suggestions ?? []).slice(0, 2)))
          .catch(() => undefined);
      }
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Could not reach the assistant."); }
    finally { setPending(false); }
  }

  async function saveResearchSession() {
    if (!result || result.status !== "complete") return;
    const now = new Date().toISOString();
    const filter = result.filter;
    const session: ResearchSession = {
      id: crypto.randomUUID(), title: filter.intent.slice(0, 80) || "Research session", goal: filter.intent,
      createdAt: now, updatedAt: now,
      sources: result.sources.filter((source) => source.url).map((source) => ({ title: source.title, url: source.url!, tabId: source.tabId })),
      findings: [answer.slice(0, 2_000)], contradictions: filter.conflicts.map((item) => item.description),
      unknowns: filter.missingInformation, nextSteps: []
    };
    await saveSession(session);
    setSessionSaved(true);
  }

  async function approveMemory(text: string) {
    const item: MemoryItem = { id: crypto.randomUUID(), kind: "preference", text, confidence: 0.8, createdAt: new Date().toISOString(), sourceRequestId: result?.filter.requestId ?? "unknown", status: "approved" };
    await saveMemory(item);
    setMemorySuggestions((items) => items.filter((entry) => entry !== text));
  }


  const clarificationQuestion = result?.status === "clarification_required" ? result.filter.clarifyingQuestion : null;
  return <div className="card">
    <div className="header"><strong>Ambient</strong><button aria-label="Close" onClick={close}>×</button></div>
    {clarificationQuestion ? <>
      <div className="question">{clarificationQuestion}</div>
      <textarea value={clarification} onChange={(event) => setClarification(event.target.value)} placeholder="Your answer" />
      <button className="primary" disabled={pending || !clarification.trim()} onClick={() => submit(clarification.trim())}>{pending ? "Working…" : "Continue"}</button>
    </> : !answer ? <>
      <textarea ref={composerRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What would you like help with?" />
      <div className="hint">Uses this page and related open tabs when you submit.</div>
      <button className="primary" disabled={pending} onClick={() => submit()}>{pending ? "Finding context…" : "Improve"}</button>
    </> : <>
      <div className="answer">{answer}</div>
      {result?.status === "complete" && result.sources.length > 0 && <div className="sources"><strong>Sources</strong>{result.sources.map((source) => source.url && <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.title || source.url}</a>)}</div>}
      <div className="actions">
        <button onClick={() => { insertText(field, answer); close(); }}>Insert</button>
        <button onClick={() => { insertText(field, answer, true); close(); }}>Replace field</button>
        <button onClick={saveResearchSession} disabled={sessionSaved}>{sessionSaved ? "Session saved" : "Save session"}</button>
      </div>
      {memorySuggestions.map((suggestion) => <button className="memory" key={suggestion} onClick={() => approveMemory(suggestion)}>Remember: {suggestion} ＋</button>)}
    </>}
    {error && <div className="error" role="alert">{error}</div>}
    <style>{`
      *{box-sizing:border-box}.card{width:340px;max-height:470px;overflow:auto;background:#fff;color:#202124;border:1px solid #dadce0;border-radius:14px;box-shadow:0 8px 28px #0003;padding:14px;font:13px/1.45 system-ui,-apple-system,Segoe UI,sans-serif}
      .header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;color:#202124}.header strong{font-size:14px}.header button{border:0;background:transparent;font-size:20px;cursor:pointer;color:#5f6368}
      textarea{width:100%;min-height:90px;resize:vertical;border:1px solid #dadce0;border-radius:9px;padding:10px;font:13px/1.45 system-ui,sans-serif;color:#202124;background:#fff;outline-color:#6750a4}
      button{cursor:pointer}.primary{width:100%;margin-top:10px;border:0;border-radius:9px;background:#6750a4;color:white;padding:9px 12px;font-weight:600}.primary:disabled{opacity:.6;cursor:wait}
      .hint{color:#6b7280;font-size:11px;margin-top:6px}.question{font-weight:600;margin:8px 0}.answer{white-space:pre-wrap;overflow-wrap:anywhere;max-height:230px;overflow:auto}.sources{display:grid;gap:4px;margin-top:12px;font-size:11px}.sources a{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#4f378b}.actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.actions button,.memory{border:1px solid #ddd;border-radius:8px;background:#f8f7fb;padding:7px 9px;color:#333}.memory{margin-top:8px;font-size:11px}.error{color:#b3261e;margin-top:8px;font-size:12px}
    `}</style>
  </div>;
}

let host: HTMLDivElement | null = null;
let root: Root | null = null;
let activeField: Editable | null = null;
let hideTimer: number | undefined;
let expandedWidget = false;

function positionHost(field: Editable, expanded = false) {
  if (!host) return;
  const rect = field.getBoundingClientRect();
  expandedWidget = expanded;
  const width = expanded ? 350 : 40;
  host.style.width = `${width}px`;
  host.style.height = expanded ? "auto" : "40px";
  host.style.left = `${Math.max(8, Math.min(rect.right - 34, window.innerWidth - width - 8))}px`;
  host.style.top = `${Math.max(8, Math.min(rect.top + 6, window.innerHeight - (expanded ? 490 : 48)))}px`;
}

function mountWidget(field: Editable) {
  activeField = field;
  expandedWidget = false;
  if (!host) {
    host = document.createElement("div");
    host.style.cssText = "position:fixed;z-index:2147483647;width:40px;height:40px;pointer-events:none;overflow:visible";
    document.documentElement.append(host);
    const shadow = host.attachShadow({ mode: "open" });
    const mountPoint = document.createElement("div");
    mountPoint.style.pointerEvents = "auto";
    shadow.append(mountPoint);
    root = createRoot(mountPoint);
  }
  positionHost(field);
  root?.render(<Launcher field={field} />);
  host.style.display = "block";
}

function Launcher({ field }: { field: Editable }) {
  const [open, setOpen] = useState(false);
  return <>
    {open ? <Widget field={field} close={() => { setOpen(false); if (activeField) mountWidget(activeField); }} /> : <button className="launcher" aria-label="Open Ambient assistant" onClick={() => { setOpen(true); positionHost(field, true); }}>✦</button>}
    <style>{`.launcher{width:34px;height:34px;border:0;border-radius:50%;background:#6750a4;color:#fff;font:18px system-ui;box-shadow:0 2px 8px #0004;cursor:pointer}.launcher:hover{transform:scale(1.05)}`}</style>
  </>;
}

document.addEventListener("focusin", (event) => {
  if (!isEditable(event.target)) return;
  if (hideTimer) window.clearTimeout(hideTimer);
  mountWidget(event.target);
}, true);

document.addEventListener("focusout", (event) => {
  if (!isEditable(event.target)) return;
  hideTimer = window.setTimeout(() => {
    if (!host?.shadowRoot?.activeElement && !host?.matches(":hover")) if (host) host.style.display = "none";
  }, 1200);
}, true);

window.addEventListener("scroll", () => { if (activeField && host?.style.display !== "none") positionHost(activeField, expandedWidget); }, true);
window.addEventListener("resize", () => { if (activeField && host?.style.display !== "none") positionHost(activeField, expandedWidget); });

if (isEditable(document.activeElement)) mountWidget(document.activeElement);
