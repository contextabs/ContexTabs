import { createRoot, type Root } from "react-dom/client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AssistResponseSchema, type ContextPayload, type MemoryItem, type ResearchSession } from "@ambient/contracts";
import { getSession, saveMemory, saveSession } from "../lib/local-store";
import { collectTabs, type ContextTab } from "../lib/tabs";
import { conversationStorageKey, extractConversation, mergeConversationSummary } from "../lib/conversation";

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
    { id: "active-page", kind: "page", title: document.title, url: location.href, text: ((main as HTMLElement | null)?.innerText ?? "").slice(0, 14_000), capturedAt },
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

function GroupSuggestion() {
  const [cluster, setCluster] = useState<any>();
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let alive = true;
    const load = () => void chrome.runtime.sendMessage({ type: "GET_CLUSTER_SUGGESTION" }).then((value) => { if (alive) setCluster(value); }).catch(() => undefined);
    load(); const timer = window.setInterval(load, 5_000);
    return () => { alive = false; window.clearInterval(timer); };
  }, []);
  if (!cluster || !["suggested", "tentative"].includes(cluster.status)) return null;
  const act = async (action: string) => {
    if (action === "accept") {
      await chrome.runtime.sendMessage({ type: "OPEN_AMBIENT_POPUP" }).catch(() => undefined);
      return;
    }
    setBusy(true);
    await chrome.runtime.sendMessage({ type: "CLUSTER_ACTION", id: cluster.id, action, permissionGranted: action === "accept" }).catch(() => undefined);
    setCluster(undefined); setBusy(false);
  };
  return <aside className="ambient-group"><div className="ambient-header"><div className="ambient-brand">✦ Ambient</div><button type="button" className="ambient-close" aria-label="Close related tabs suggestion" disabled={busy} onClick={() => void act("dismiss")}>×</button></div><div className="ambient-title">Related tabs found</div><div className="ambient-name">{cluster.name}</div><ul>{(cluster.members ?? []).slice(0, 3).map((member: { tabId: number; title: string }) => <li key={member.tabId}>{member.title}</li>)}</ul><div className="ambient-meta">{cluster.tabIds.length} tabs · {Math.round(cluster.confidence * 100)}% match</div><div className="ambient-actions"><button disabled={busy} onClick={() => void act("accept")}>Review group</button><button disabled={busy} onClick={() => void act("internal")}>Use for context</button><button disabled={busy} onClick={() => void act("dismiss")}>Not now</button></div><button className="ambient-never" disabled={busy} onClick={() => void act("never")}>Never suggest this category</button><style>{`.ambient-group{position:fixed;z-index:2147483646;top:18px;right:18px;width:280px;padding:14px;border:1px solid #ffffff35;border-radius:14px;background:rgba(37,31,47,.94);box-shadow:0 8px 28px #0004;color:#f8f5fc;font:12px/1.4 system-ui,sans-serif;backdrop-filter:blur(12px);pointer-events:auto}.ambient-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.ambient-brand{font-size:10px;font-weight:700;color:#c6a9ff}.ambient-close{margin-left:auto;border:1px solid #ffffff25;background:rgba(255,255,255,.08);color:#fff;border-radius:999px;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-size:14px;line-height:1}.ambient-title{font-weight:700;font-size:14px;margin:5px 0}.ambient-name{font-size:13px}.ambient-group ul{margin:6px 0;padding-left:17px;font-size:11px;color:#ddd}.ambient-group li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ambient-meta{color:#c9c1d1;margin:3px 0 10px}.ambient-actions{display:flex;gap:5px;flex-wrap:wrap}.ambient-actions button{border:1px solid #c2a9f7;border-radius:7px;background:#8061b7;color:#fff;padding:6px 8px;cursor:pointer;font:600 11px system-ui}.ambient-actions button:nth-child(n+2){background:#ffffff14;border-color:#ffffff35}.ambient-never{margin-top:8px;border:0;background:transparent;color:#cbc4d3;text-decoration:underline;font:10px system-ui;cursor:pointer;padding:2px}.ambient-group button:disabled{opacity:.5}.ambient-close:disabled{cursor:default}`}</style></aside>;
}

function mountGroupSuggestion() {
  const id = "ambient-group-suggestion-root";
  if (document.getElementById(id)) return;
  const node = document.createElement("div"); node.id = id; node.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483646";
  document.documentElement.append(node);
  const shadow = node.attachShadow({ mode: "open" });
  const mount = document.createElement("div"); mount.style.cssText = "pointer-events:none"; shadow.append(mount);
  createRoot(mount).render(<GroupSuggestion />);
}
mountGroupSuggestion();

function isAiPromptField(field: Editable) {
  const host = location.hostname;
  if (/(^|\.)chatgpt\.com$/.test(host)) return field.id === "prompt-textarea" || field.getAttribute("data-lexical-editor") !== null;
  if (/(^|\.)gemini\.google\.com$/.test(host)) return field instanceof HTMLTextAreaElement || field.isContentEditable;
  if (/(^|\.)claude\.ai$/.test(host)) return field instanceof HTMLTextAreaElement || field.isContentEditable;
  return false;
}

function getComposerRect(field: Editable) {
  const fieldRect = field.getBoundingClientRect();
  let ancestor = field.parentElement;
  for (let depth = 0; ancestor && depth < 10; depth++, ancestor = ancestor.parentElement) {
    const rect = ancestor.getBoundingClientRect();
    const hasSiblingControls = Array.from(ancestor.querySelectorAll("button,[role=button]")).some((control) =>
      !field.contains(control) && control.getClientRects().length > 0
    );
    if (hasSiblingControls && rect.width >= fieldRect.width * 0.85 && rect.height >= fieldRect.height * 0.85 && rect.width <= innerWidth * 1.05 && rect.height < 600) {
      return rect;
    }
  }
  return fieldRect;
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
  useLayoutEffect(() => { stateRef.current = state; }, [state]);
  useLayoutEffect(() => {
    if (state !== "clarification") return;
    const focusAnswer = () => clarificationInputRef.current?.focus({ preventScroll: true });
    focusAnswer();
    const focusFrame = requestAnimationFrame(focusAnswer);
    return () => cancelAnimationFrame(focusFrame);
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
    const updateLayout = () => refreshPanelLayout((value) => value + 1);
    const observer = new ResizeObserver(updateLayout);
    if (panelRef.current) observer.observe(panelRef.current);
    observer.observe(field);
    window.addEventListener("resize", updateLayout);
    window.addEventListener("scroll", updateLayout, true);
    return () => { observer.disconnect(); window.removeEventListener("resize", updateLayout); window.removeEventListener("scroll", updateLayout, true); };
  }, [field, state, result]);
  const cancel = () => { requestRef.current?.abort(); requestRef.current = null; if (timerRef.current) clearTimeout(timerRef.current); };
  const dismiss = () => { cancel(); versionRef.current++; setResult(null); setClarification(""); setState("idle"); };

  async function refine(answerToClarification?: string, skipClarification = false) {
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
      const conversation = extractConversation();
      if (conversation && await chrome.storage.local.get({ "conversation-capture-enabled": true }).then((value) => value["conversation-capture-enabled"])) {
        const summaryKey = conversationStorageKey(conversation.url);
        const saved = await chrome.runtime.sendMessage({ type: "GET_CONVERSATION_SUMMARY", key: summaryKey }).catch(() => undefined);
        const summary = mergeConversationSummary(saved, conversation);
        await chrome.runtime.sendMessage({ type: "SAVE_CONVERSATION_SUMMARY", key: summaryKey, summary }).catch(() => undefined);
        context.conversation = { ...conversation, summary };
      }
      const clusters = await chrome.runtime.sendMessage({ type: "GET_RELEVANT_CLUSTERS", query, conversationText: context.conversation?.messages.map((message) => message.text).join(" ") ?? "" }).catch(() => []);
      for (const cluster of (clusters ?? []).slice(0, 2)) context.sources.push({ id: cluster.id, kind: "cluster", title: cluster.name, text: JSON.stringify({ category: cluster.category, summary: cluster.summary, confidence: cluster.confidence, entities: cluster.tokens, representativeTabs: (cluster.members ?? []).slice(0, 4).map((member: { title: string; url: string }) => ({ title: member.title, url: member.url })) }), capturedAt: cluster.lastActiveAt });
      const session = active["active-session"] ? await getSession(active["active-session"]) : undefined;
      if (session) context.sources.push({ id: `session-${session.id}`, kind: "session", title: session.title, text: JSON.stringify(session), capturedAt: new Date().toISOString() });
      if (answerToClarification) context.sources.push({ id: "clarification", kind: "clarification", text: answerToClarification, capturedAt: new Date().toISOString() });
      const response = await fetch(`${API_URL}/api/assist`, { method: "POST", headers: { "Content-Type": "application/json" }, signal: controller.signal, body: JSON.stringify({ context, clarificationAnswer: answerToClarification, skipClarification }) });
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
    const onBlur = (event: FocusEvent) => {
      const movingIntoWidget = event.relatedTarget === host || Boolean(event.relatedTarget && host?.shadowRoot?.contains(event.relatedTarget as Node));
      if (!movingIntoWidget && !host?.shadowRoot?.activeElement && stateRef.current === "idle" && Date.now() - lastInputRef.current < 1_500) schedule(true);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!["suggestion", "clarification"].includes(stateRef.current)) return;
      if (!event.composedPath().includes(host!)) dismiss();
    };
    const restoreAnswerFocus = (event: FocusEvent) => {
      if (stateRef.current !== "clarification" || !/(^|\.)claude\.ai$/.test(location.hostname) || !event.composedPath().includes(field)) return;
      event.stopImmediatePropagation();
      const input = clarificationInputRef.current;
      input?.focus({ preventScroll: true });
      requestAnimationFrame(() => input?.focus({ preventScroll: true }));
    };
    field.addEventListener("input", onInput); field.ownerDocument.addEventListener("pointermove", onMove); field.addEventListener("blur", onBlur as EventListener);
    field.ownerDocument.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("focusin", restoreAnswerFocus as EventListener, true);
    return () => { cancel(); field.removeEventListener("input", onInput); field.ownerDocument.removeEventListener("pointermove", onMove); field.removeEventListener("blur", onBlur as EventListener); field.ownerDocument.removeEventListener("pointerdown", onPointerDown, true); window.removeEventListener("focusin", restoreAnswerFocus as EventListener, true); };
  }, [field]);

  const optimized = result?.status === "complete" ? result.refinedPrompt : "";
  const composerRect = getComposerRect(field);
  const leftSpace = composerRect.left;
  const rightSpace = innerWidth - composerRect.right;
  const launcherGap = /(^|\.)claude\.ai$/.test(location.hostname) ? 8 : 4;
  const placeRight = rightSpace >= LAUNCHER_SIZE + launcherGap && rightSpace >= leftSpace;
  const placeLeft = !placeRight && leftSpace >= LAUNCHER_SIZE + launcherGap;
  const launcherLeft = placeRight
    ? composerRect.right + launcherGap
    : placeLeft
      ? composerRect.left - LAUNCHER_SIZE - launcherGap
      : Math.max(4, Math.min(composerRect.right + launcherGap, innerWidth - LAUNCHER_SIZE - 4));
  const launcherSide = placeRight || (!placeLeft && launcherLeft >= composerRect.right) ? "right" : "left";
  const launcherTop = Math.max(8, Math.min(composerRect.bottom - LAUNCHER_SIZE - 4, innerHeight - LAUNCHER_SIZE - 8));
  return <>
    <div className={`launcher-wrap ${launcherSide}`} style={{ left: `${launcherLeft}px`, top: `${launcherTop}px` }}>
      <button className={`launcher ${state === "working" ? "working" : state === "suggestion" || state === "clarification" ? "ready" : ""}`} title={state === "working" ? "Cancel refinement" : state === "suggestion" ? "Review optimized prompt" : "Refine prompt now"} aria-label={state === "working" ? "Cancel refinement" : "Refine prompt now"} onClick={() => state === "idle" ? void refine() : dismiss()}>{state === "working" ? "…" : "✦"}</button>
      {(state === "working" || state === "suggestion" || state === "clarification") && <span className={`launcher-label ${state}`}>{state === "working" ? "Refining…" : state === "suggestion" ? "Review rewrite" : "Question"}</span>}
    </div>
    {(state === "suggestion" || state === "clarification") && <div ref={panelRef} className="panel" style={panelStyle()}>
      <button className="close" aria-label="Close suggestion" onClick={dismiss}>×</button>
      {state === "suggestion" && <><div className="optimized-title">Optimized prompt</div><button className="optimized" aria-label="Use optimized prompt" onClick={() => { acceptedPrompts.set(field, optimized.trim()); insertText(field, optimized, true); dismiss(); close(); }}>{optimized}</button></>}
      {state === "clarification" && <><div className="label">One detail will improve this</div><div className="question">{result?.status === "clarification_required" ? result.filter.clarifyingQuestion : ""}</div><div className="clarification-entry"><textarea ref={clarificationInputRef} autoFocus value={clarification} onChange={(event) => setClarification(event.target.value)} onPointerDown={(event) => { event.stopPropagation(); requestAnimationFrame(() => clarificationInputRef.current?.focus({ preventScroll: true })); }} onClick={() => window.setTimeout(() => clarificationInputRef.current?.focus({ preventScroll: true }), 0)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); if (clarification.trim()) void refine(clarification.trim()); } }} placeholder="Your answer" aria-label="Answer the clarification question" /><div className="clarification-actions"><button className="primary" disabled={!clarification.trim()} onClick={() => void refine(clarification.trim())}>Continue</button><button className="secondary" onClick={() => void refine(undefined, true)}>Skip</button></div></div></>}
    </div>}
    <style>{`*{box-sizing:border-box}.launcher-wrap{position:relative;width:34px;height:34px}.launcher{width:34px;height:34px;border:0;border-radius:50%;background:#6750a4;color:#fff;font:18px system-ui;box-shadow:0 2px 8px #0004;cursor:pointer}.launcher.working{animation:pulse 1s infinite;background:#8a72c1}.launcher.ready{background:#3b7d4b;box-shadow:0 0 0 4px #3b7d4b33}@keyframes pulse{50%{transform:scale(1.1)}}.launcher-label{position:absolute;left:40px;top:5px;white-space:nowrap;border:1px solid #ffffff40;border-radius:12px;padding:4px 9px;background:#302a38e8;color:#fff;font:600 11px/1.2 system-ui,sans-serif;box-shadow:0 2px 7px #0003;pointer-events:none}.launcher-label.working{background:#514564ed}.launcher-label.suggestion{background:#315c40ed}.panel{position:fixed;z-index:2147483647;max-width:calc(100vw - 16px);max-height:300px;overflow:auto;scrollbar-width:none;background:rgba(37,31,47,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);color:#f8f5fc;border:1px solid #ffffff30;border-radius:14px;box-shadow:0 9px 30px #0004;padding:14px;font:13px/1.45 system-ui,sans-serif}.panel::-webkit-scrollbar{display:none}.panel button{font:600 12px/1.3 system-ui,sans-serif}.close{position:absolute;right:8px;top:8px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border:1px solid #ffffff35;border-radius:50%;background:#ffffff15;color:#fff;font-size:17px!important;line-height:1;padding:0;cursor:pointer}.optimized{display:block;width:100%;margin-top:18px;text-align:left;border:1px solid #c2a9f7;border-radius:8px;background:#8061b733;padding:10px;color:#fff;white-space:pre-wrap;cursor:pointer}.optimized:hover{background:#9275ca66;border-color:#e0d1ff}.question{font-weight:600;margin:8px 0 10px;color:#fff}textarea{width:100%;min-height:56px;border:1px solid #ffffff40;border-radius:8px;padding:8px;color:#fff;background:#ffffff14;font:13px/1.4 system-ui,sans-serif}textarea::placeholder{color:#c9c1d1}.primary{margin-top:8px;border:1px solid #c2a9f7;border-radius:8px;background:#8061b7;color:#fff;padding:8px 12px;cursor:pointer}.primary:hover{background:#9275ca}.primary:disabled{opacity:.5;cursor:not-allowed}`}</style>
    <style>{`.launcher-wrap{position:fixed;width:${LAUNCHER_SIZE}px;height:${LAUNCHER_SIZE}px;pointer-events:none}.launcher{width:${LAUNCHER_SIZE}px;height:${LAUNCHER_SIZE}px;font-size:16px;pointer-events:auto}.launcher-label{top:3px;left:${LAUNCHER_SIZE + 6}px}.launcher-wrap.left .launcher-label{left:auto;right:${LAUNCHER_SIZE + 6}px}.launcher-wrap.right .launcher-label{left:${LAUNCHER_SIZE + 6}px;right:auto}.panel,.panel *{pointer-events:auto}.optimized-title{font-weight:700;color:#fff;padding:1px 34px 0 2px}.clarification-entry{display:flex;align-items:stretch;gap:8px}.clarification-entry textarea{flex:1;min-width:0;min-height:42px;resize:vertical}.clarification-actions{display:flex;flex-direction:column;gap:6px;flex:none}.clarification-actions .primary,.clarification-actions .secondary{margin-top:0}.secondary{border:1px solid #ffffff40;border-radius:8px;background:#ffffff12;color:#f8f5fc;padding:8px 12px;cursor:pointer}.secondary:hover{background:#ffffff25}`}</style>
  </>;
}

let host: HTMLDivElement | null = null;
let root: Root | null = null;
let activeField: Editable | null = null;
let hideTimer: number | undefined;
let expandedWidget = false;

// Adjust these to tune the floating launcher relative to the chat box.
const LAUNCHER_SIZE = 28; // button diameter, in pixels
const LAUNCHER_FALLBACK_INSET = 58;

function positionHost(field: Editable, expanded = false) {
  if (!host) return;
  expandedWidget = expanded;
  host.style.left = "0";
  host.style.top = "0";
  host.style.width = "100vw";
  host.style.height = "100vh";
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
    host.style.cssText = "position:fixed;z-index:2147483647;inset:0;width:100vw;height:100vh;pointer-events:none;overflow:visible";
    document.documentElement.append(host);
    const shadow = host.attachShadow({ mode: "open" });
    const mountPoint = document.createElement("div");
    mountPoint.style.cssText = "position:relative;width:100%;height:100%;pointer-events:none";
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
