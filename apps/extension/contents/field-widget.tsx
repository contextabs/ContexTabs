import { createRoot, type Root } from "react-dom/client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AssistResponseSchema, type ContextPayload, type MemoryItem, type ResearchSession } from "@ambient/contracts";
import { getSession, saveMemory, saveSession } from "../lib/local-store";
import { collectTabs, type ContextTab } from "../lib/tabs";

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

function makePayload(field: Editable, query: string, tabs: ContextTab[], memory: MemoryItem[]): ContextPayload {
  const capturedAt = new Date().toISOString();
  const main = document.querySelector("main, article, [role=main]") ?? document.body;
  const selection = field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement
    ? field.value.slice(field.selectionStart ?? 0, field.selectionEnd ?? 0).trim() || undefined
    : window.getSelection()?.toString().trim() || undefined;
  const sources: ContextPayload["sources"] = [
    // prioritize the user's input field so it's seen first by the LLM
    { id: "field", kind: "field", text: readField(field).slice(0, 8_000), capturedAt },
    { id: "active-page", kind: "page", title: document.title, url: location.href, text: (main?.innerText ?? "").slice(0, 14_000), capturedAt },
    ...tabs.filter((tab) => tab.url && tab.title && /^https?:\/\//.test(tab.url)).slice(0, 8).map((tab, index) => ({
      id: `tab-${tab.id ?? index}`, kind: "tab" as const, title: tab.title, url: tab.url, tabId: tab.id,
      text: tab.contextText?.slice(0, 3_500),
      tabGroupId: typeof tab.groupId === "number" && tab.groupId >= 0 ? tab.groupId : undefined,
      tabGroupTitle: tab.contextGroupTitle, capturedAt
    }))
  ];
  if (selection) sources.unshift({ id: "selection", kind: "selection", text: selection.slice(0, 8_000), capturedAt });
  return {
    requestId: crypto.randomUUID(), capturedAt, query, fieldText: readField(field).slice(0, 8_000), selection,
    sources, preferences: memory.filter((item) => item.status === "approved").slice(0, 10)
  };
}

function isAiPromptField(field: Editable) {
  const host = location.hostname;
  if (/(^|\.)chatgpt\.com$/.test(host)) return field.id === "prompt-textarea" || field.getAttribute("data-lexical-editor") !== null;
  if (/(^|\.)gemini\.google\.com$/.test(host)) return field instanceof HTMLTextAreaElement || field.isContentEditable;
  if (/(^|\.)claude\.ai$/.test(host)) return field instanceof HTMLTextAreaElement || field.isContentEditable;
  return false;
}

const acceptedPrompts = new WeakMap<Editable, string>();

function Widget({ field, close }: { field: Editable; close: () => void }) {
  const [state, setState] = useState<"idle" | "working" | "suggestion" | "clarification">("idle");
  const [result, setResult] = useState<AssistResult | null>(null);
  const [clarification, setClarification] = useState("");
  const [, refreshPanelLayout] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const clarificationInputRef = useRef<HTMLTextAreaElement>(null);
  const requestRef = useRef<AbortController | null>(null);
  const versionRef = useRef(0);
  const timerRef = useRef<number | undefined>();
  const lastInputRef = useRef(0);
  const autoStartedTextRef = useRef("");
  const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; }, [state]);
  useEffect(() => {
    if (state === "clarification") clarificationInputRef.current?.focus();
  }, [state, result]);

  const panelStyle = () => {
    const rect = field.getBoundingClientRect();
    const panelWidth = Math.min(rect.width, innerWidth - 16);
    const left = Math.max(8, Math.min(rect.left, innerWidth - panelWidth - 8));
    const panelHeight = panelRef.current?.getBoundingClientRect().height ?? 0;
    const gap = 16;
    const maxHeight = Math.max(0, rect.top - gap - 12);
    const height = Math.min(panelHeight, maxHeight);
    const top = Math.max(8, rect.top - height - gap);
    return { left: `${left}px`, top: `${top}px`, width: `${panelWidth}px`, maxHeight: `${maxHeight}px` };
  };

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    const updateLayout = () => refreshPanelLayout((value) => value + 1);
    const observer = new ResizeObserver(updateLayout);
    observer.observe(panelRef.current);
    window.addEventListener("resize", updateLayout);
    return () => { observer.disconnect(); window.removeEventListener("resize", updateLayout); };
  }, [state, result]);
  const cancel = () => { requestRef.current?.abort(); requestRef.current = null; if (timerRef.current) clearTimeout(timerRef.current); };
  const dismiss = () => { cancel(); versionRef.current++; setResult(null); setClarification(""); setState("idle"); };

  async function refine(answerToClarification?: string) {
    const query = readField(field).trim();
    if (!query) return;
    autoStartedTextRef.current = query;
    cancel();
    const version = ++versionRef.current;
    const controller = new AbortController(); requestRef.current = controller;
    setResult(null); setState("working");
    try {
      const tabsPromise = collectTabs(query);
      const storedPromise = chrome.storage.local.get<{ "approved-memory"?: MemoryItem[] }>("approved-memory");
      const activePromise = chrome.storage.local.get<{ "active-session"?: string }>("active-session");
      let tabs: ContextTab[] = [];
      try {
        tabs = await Promise.race([
          tabsPromise,
          new Promise<ContextTab[]>((res) => setTimeout(() => res([]), 400))
        ]);
      } catch {
        tabs = [];
      }
      const [stored, active] = await Promise.all([storedPromise, activePromise]);
      if (version !== versionRef.current) return;
      const context = makePayload(field, query, tabs, stored["approved-memory"] ?? []);
      const session = active["active-session"] ? await getSession(active["active-session"]) : undefined;
      if (session) context.sources.push({ id: `session-${session.id}`, kind: "session", title: session.title, text: JSON.stringify(session), capturedAt: new Date().toISOString() });
      if (answerToClarification) context.sources.push({ id: "clarification", kind: "clarification", text: answerToClarification, capturedAt: new Date().toISOString() });
      const response = await fetch(`${API_URL}/api/assist`, { method: "POST", headers: { "Content-Type": "application/json" }, signal: controller.signal, body: JSON.stringify({ context, clarificationAnswer: answerToClarification }) });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      const parsed = AssistResponseSchema.parse(await response.json());
      if (version !== versionRef.current || readField(field).trim() !== query) return;
      setResult(parsed);
      setState(parsed.status === "complete" ? "suggestion" : parsed.status === "clarification_required" ? "clarification" : "idle");
    } catch (error) { if ((error as Error).name !== "AbortError" && version === versionRef.current) setState("idle"); }
  }

  function schedule(immediate = false) {
    const query = readField(field).trim();
    if (!isAiPromptField(field) || !query || autoStartedTextRef.current === query) return;
    cancel();
    const start = () => {
      if (autoStartedTextRef.current === query) return;
      autoStartedTextRef.current = query;
      void refine();
    };
    if (immediate) start(); else timerRef.current = window.setTimeout(start, 500);
  }

  useEffect(() => {
    const onInput = () => {
      const current = readField(field).trim();
      const accepted = acceptedPrompts.get(field);
      if (accepted === current) return;
      if (accepted !== undefined) acceptedPrompts.delete(field);
      autoStartedTextRef.current = "";
      versionRef.current++; lastInputRef.current = Date.now(); setState("idle");
      schedule(/[.!?]$/.test(current));
    };
    const onMove = () => { if (Date.now() - lastInputRef.current < 750) schedule(true); };
    const onBlur = () => { if (stateRef.current === "idle" && Date.now() - lastInputRef.current < 1_500) schedule(true); };
    const onPointerDown = (event: PointerEvent) => {
      if (!["suggestion", "clarification"].includes(stateRef.current)) return;
      if (!event.composedPath().includes(host!)) dismiss();
    };
    field.addEventListener("input", onInput); field.ownerDocument.addEventListener("pointermove", onMove); field.addEventListener("blur", onBlur);
    field.ownerDocument.addEventListener("pointerdown", onPointerDown, true);
    return () => { cancel(); field.removeEventListener("input", onInput); field.ownerDocument.removeEventListener("pointermove", onMove); field.removeEventListener("blur", onBlur); field.ownerDocument.removeEventListener("pointerdown", onPointerDown, true); };
  }, [field]);

  const optimized = result?.status === "complete" ? result.refinedPrompt : "";
  return <>
    <div className="launcher-wrap">
      <button className={`launcher ${state === "working" ? "working" : state === "suggestion" || state === "clarification" ? "ready" : ""}`} title={state === "working" ? "Cancel refinement" : state === "suggestion" ? "Review optimized prompt" : "Refine prompt now"} aria-label={state === "working" ? "Cancel refinement" : "Refine prompt now"} onClick={() => state === "idle" ? void refine() : dismiss()}>{state === "working" ? "…" : "✦"}</button>
      {(state === "working" || state === "suggestion" || state === "clarification") && <span className={`launcher-label ${state}`}>{state === "working" ? "Refining…" : state === "suggestion" ? "Review rewrite" : "Question"}</span>}
    </div>
    {(state === "suggestion" || state === "clarification") && <div ref={panelRef} className="panel" style={panelStyle()}>
      <button className="close" aria-label="Close suggestion" onClick={dismiss}>×</button>
      {state === "suggestion" && <><div className="optimized-title">Optimized prompt</div><button className="optimized" aria-label="Use optimized prompt" onClick={() => { acceptedPrompts.set(field, optimized.trim()); insertText(field, optimized, true); close(); }}>{optimized}</button></>}
      {state === "clarification" && <><div className="label">One detail will improve this</div><div className="question">{result?.status === "clarification_required" ? result.filter.clarifyingQuestion : ""}</div><div className="clarification-entry"><textarea ref={clarificationInputRef} autoFocus value={clarification} onChange={(event) => setClarification(event.target.value)} onPointerDown={(event) => { event.stopPropagation(); clarificationInputRef.current?.focus(); }} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); if (clarification.trim()) void refine(clarification.trim()); } }} placeholder="Your answer" aria-label="Answer the clarification question" /><button className="primary" disabled={!clarification.trim()} onClick={() => void refine(clarification.trim())}>Continue</button></div></>}
    </div>}
    <style>{`*{box-sizing:border-box}.launcher-wrap{position:relative;width:34px;height:34px}.launcher{width:34px;height:34px;border:0;border-radius:50%;background:#6750a4;color:#fff;font:18px system-ui;box-shadow:0 2px 8px #0004;cursor:pointer}.launcher.working{animation:pulse 1s infinite;background:#8a72c1}.launcher.ready{background:#3b7d4b;box-shadow:0 0 0 4px #3b7d4b33}@keyframes pulse{50%{transform:scale(1.1)}}.launcher-label{position:absolute;left:40px;top:5px;white-space:nowrap;border:1px solid #ffffff40;border-radius:12px;padding:4px 9px;background:#302a38e8;color:#fff;font:600 11px/1.2 system-ui,sans-serif;box-shadow:0 2px 7px #0003;pointer-events:none}.launcher-label.working{background:#514564ed}.launcher-label.suggestion{background:#315c40ed}.panel{position:fixed;z-index:2147483647;max-width:calc(100vw - 16px);max-height:300px;overflow:auto;scrollbar-width:none;background:rgba(37,31,47,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);color:#f8f5fc;border:1px solid #ffffff30;border-radius:14px;box-shadow:0 9px 30px #0004;padding:14px;font:13px/1.45 system-ui,sans-serif}.panel::-webkit-scrollbar{display:none}.panel button{font:600 12px/1.3 system-ui,sans-serif}.close{position:absolute;right:8px;top:8px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border:1px solid #ffffff35;border-radius:50%;background:#ffffff15;color:#fff;font-size:17px!important;line-height:1;padding:0;cursor:pointer}.optimized{display:block;width:100%;margin-top:18px;text-align:left;border:1px solid #c2a9f7;border-radius:8px;background:#8061b733;padding:10px;color:#fff;white-space:pre-wrap;cursor:pointer}.optimized:hover{background:#9275ca66;border-color:#e0d1ff}.question{font-weight:600;margin:8px 0 10px;color:#fff}textarea{width:100%;min-height:56px;border:1px solid #ffffff40;border-radius:8px;padding:8px;color:#fff;background:#ffffff14;font:13px/1.4 system-ui,sans-serif}textarea::placeholder{color:#c9c1d1}.primary{margin-top:8px;border:1px solid #c2a9f7;border-radius:8px;background:#8061b7;color:#fff;padding:8px 12px;cursor:pointer}.primary:hover{background:#9275ca}.primary:disabled{opacity:.5;cursor:not-allowed}`}</style>
    <style>{`.launcher-wrap{width:${LAUNCHER_SIZE}px;height:${LAUNCHER_SIZE}px}.launcher{width:${LAUNCHER_SIZE}px;height:${LAUNCHER_SIZE}px;font-size:16px}.launcher-label{left:${LAUNCHER_SIZE + 6}px;top:3px}.panel,.panel *{pointer-events:auto}.optimized-title{font-weight:700;color:#fff;padding:1px 34px 0 2px}.clarification-entry{display:flex;align-items:stretch;gap:8px}.clarification-entry textarea{flex:1;min-width:0;min-height:42px;resize:vertical}.clarification-entry .primary{flex:none;align-self:stretch;margin-top:0}`}</style>
  </>;
}

let host: HTMLDivElement | null = null;
let root: Root | null = null;
let activeField: Editable | null = null;
let hideTimer: number | undefined;
let expandedWidget = false;

// Adjust these to tune the floating launcher relative to the chat box.
const LAUNCHER_SIZE = 28; // button diameter, in pixels
const LAUNCHER_TOP_INSET = -2; // vertical offset from the textbox top; lower this to move up
const LAUNCHER_RIGHT_INSET = 58; // distance from the textbox's right edge; raise to move left

function positionHost(field: Editable, expanded = false) {
  if (!host) return;
  const rect = field.getBoundingClientRect();
  expandedWidget = expanded;
  const width = expanded ? 350 : LAUNCHER_SIZE;
  host.style.width = `${width}px`;
  host.style.height = expanded ? "auto" : "40px";
  // Keep the launcher inside the field near its upper edge, clear of controls
  // grouped on its right side.
  host.style.left = `${Math.max(8, Math.min(rect.right - LAUNCHER_RIGHT_INSET, window.innerWidth - width - 8))}px`;
  host.style.top = `${Math.max(8, Math.min(rect.top + LAUNCHER_TOP_INSET, window.innerHeight - (expanded ? 490 : 48)))}px`;
}

function mountWidget(field: Editable) {
  if (!isAiPromptField(field)) {
    activeField = null;
    if (host) host.style.display = "none";
    return;
  }
  activeField = field;
  expandedWidget = false;
  if (!host) {
    host = document.createElement("div");
    host.style.cssText = "position:fixed;z-index:2147483647;width:40px;height:40px;pointer-events:auto;overflow:visible";
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
  return <Widget field={field} close={() => { if (activeField) mountWidget(activeField); }} />;
}

document.addEventListener("focusin", (event) => {
  if (host && event.composedPath().includes(host)) {
    if (hideTimer) window.clearTimeout(hideTimer);
    return;
  }
  if (!isEditable(event.target)) return;
  if (!isAiPromptField(event.target)) {
    if (host) host.style.display = "none";
    return;
  }
  if (hideTimer) window.clearTimeout(hideTimer);
  mountWidget(event.target);
}, true);

document.addEventListener("focusout", (event) => {
  if (host && event.composedPath().includes(host)) return;
  if (!isEditable(event.target)) return;
  hideTimer = window.setTimeout(() => {
    if (!host?.shadowRoot?.activeElement && !host?.matches(":hover")) if (host) host.style.display = "none";
  }, 1200);
}, true);

window.addEventListener("scroll", () => { if (activeField && host?.style.display !== "none") positionHost(activeField, expandedWidget); }, true);
window.addEventListener("resize", () => { if (activeField && host?.style.display !== "none") positionHost(activeField, expandedWidget); });

if (isEditable(document.activeElement) && isAiPromptField(document.activeElement)) mountWidget(document.activeElement);
