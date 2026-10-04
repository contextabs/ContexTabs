import { useCallback, useEffect, useState } from "react";
import type { ResearchSession, SemanticTabCluster } from "@ambient/contracts";
import { listSessions } from "./lib/local-store";

function Popup() {
  const [sessions, setSessions] = useState<ResearchSession[]>([]);
  const [active, setActive] = useState<string>();
  const [error, setError] = useState("");
  const [groupPermission, setGroupPermission] = useState(false);
  const [conversationCapture, setConversationCapture] = useState(true);
  const [clusters, setClusters] = useState<SemanticTabCluster[]>([]);
  const [preview, setPreview] = useState(false);
  const [busy, setBusy] = useState(false);
  const refresh = useCallback(async () => {
    const activeTabs = await chrome.tabs.query({ lastFocusedWindow: true });
    const windowId = activeTabs[0]?.windowId;
    const [items, selection, allowed, clusterResult] = await Promise.all([
      listSessions(), chrome.storage.local.get<{ "active-session"?: string; "conversation-capture-enabled"?: boolean }>(["active-session", "conversation-capture-enabled"]),
      chrome.permissions.contains({ permissions: ["tabGroups"] }),
      windowId === undefined ? Promise.resolve([]) : chrome.runtime.sendMessage({ type: "LIST_CLUSTERS", windowId })
    ]);
    setSessions(items.filter((item) => !item.clusterId || item.confirmed).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)));
    setActive(selection["active-session"]); setGroupPermission(allowed); setConversationCapture(selection["conversation-capture-enabled"] !== false); setClusters(clusterResult ?? []);
  }, []);
  useEffect(() => { void refresh().catch(() => setError("Could not load local context.")); const timer = setInterval(() => void refresh(), 1_500); return () => clearInterval(timer); }, [refresh]);

  async function action(cluster: SemanticTabCluster, name: string, extra: Record<string, unknown> = {}) {
    setBusy(true); setError("");
    try {
      let permissionGranted = false;
      if (name === "accept" && !groupPermission) {
        permissionGranted = await chrome.permissions.request({ permissions: ["tabGroups"] });
        if (!permissionGranted) { setError("Chrome tab group access was not granted; no tabs were moved."); setBusy(false); return; }
      } else permissionGranted = name === "accept";
      const result = await chrome.runtime.sendMessage({ type: "CLUSTER_ACTION", id: cluster.id, action: name, permissionGranted, ...extra });
      if (result?.error) setError(result.error);
      await refresh();
    } catch { setError("Could not update this topic. Try again."); }
    setBusy(false);
  }
  async function organize() {
    setBusy(true); setError("");
    try { const activeTabs = await chrome.tabs.query({ lastFocusedWindow: true }); const windowId = activeTabs[0]?.windowId; if (windowId === undefined) throw new Error("No browser window is available"); const result = await chrome.runtime.sendMessage({ type: "ORGANIZE_WINDOW", windowId }); setClusters(result?.clusters ?? []); setPreview(true); }
    catch { setError("Could not organize this window. Local topic detection is still available."); }
    setBusy(false);
  }
  async function activate(id: string) { await chrome.storage.local.set({ "active-session": id }); setActive(id); }
  async function removeSession(session: ResearchSession) {
    const confirmed = window.confirm(`Remove the research session “${session.title}”?`);
    if (!confirmed) return;
    await chrome.runtime.sendMessage({ type: "DELETE_SESSION", id: session.id });
    if (active === session.id) {
      await chrome.storage.local.remove("active-session");
      setActive(undefined);
    }
    await refresh();
  }
  async function renameSession(session: ResearchSession) {
    const nextTitle = window.prompt("Rename research session", session.title);
    if (!nextTitle || !nextTitle.trim()) return;
    const next = { ...session, title: nextTitle.trim(), goal: session.goal || `Research ${nextTitle.trim()}`, updatedAt: new Date().toISOString() };
    await chrome.runtime.sendMessage({ type: "SAVE_SESSION", session: next });
    await refresh();
  }
  async function toggleConversationCapture() { const next = !conversationCapture; setConversationCapture(next); await chrome.storage.local.set({ "conversation-capture-enabled": next }); }
  async function clearContextData() { await chrome.runtime.sendMessage({ type: "CLEAR_CONTEXT_DATA" }); setClusters([]); setError("Cleared local chat summaries and detected topics."); }
  async function rename(cluster: SemanticTabCluster) { const name = window.prompt("Name this topic", cluster.name); if (name?.trim()) await action(cluster, "rename", { name: name.trim() }); }
  async function enableTabGroups() {
    setBusy(true); setError("");
    try {
      const granted = await chrome.permissions.request({ permissions: ["tabGroups"] });
      setGroupPermission(granted);
      if (!granted) setError("Tab groups are still disabled. Detection and context will still work without it.");
    } catch {
      setError("Chrome tab group access could not be enabled from this popup.");
    }
    setBusy(false);
    await refresh();
  }
  async function addSessionNote(session: ResearchSession, kind: "findings" | "nextSteps") {
    const label = kind === "findings" ? "finding" : "next step";
    const value = window.prompt(`Add a ${label} for “${session.title}”`, "");
    if (!value || !value.trim()) return;
    const next = {
      ...session,
      updatedAt: new Date().toISOString(),
      findings: kind === "findings" ? [...(session.findings ?? []), value.trim()] : session.findings ?? [],
      nextSteps: kind === "nextSteps" ? [...(session.nextSteps ?? []), value.trim()] : session.nextSteps ?? []
    };
    await chrome.runtime.sendMessage({ type: "SAVE_SESSION", session: next });
    await refresh();
  }

  return <main>
    <header><div className="brand"><span aria-hidden="true">✦</span> Ambient</div><div className="tagline">Your tabs are grouped here before any Chrome changes.</div></header>
    {!groupPermission && <div className="permission-banner"><div><strong>Tab groups are optional</strong><p>Allow Chrome tab groups to turn your topics into visible browser groups.</p></div><button type="button" disabled={busy} onClick={() => void enableTabGroups()}>Enable groups</button></div>}
    <section className="organize"><div><strong>◌ Organize this window</strong><p>Preview related topics from open tabs. Nothing moves until you choose Group tabs.</p></div><button type="button" disabled={busy} onClick={() => void organize()}>{busy ? "Working…" : "Organize"}</button></section>
    <section><div className="section-title"><span className="title-icon">✦</span> Detected topics <span>{clusters.length}</span></div>
      {!clusters.length ? <p className="empty">No related tabs detected yet. Open two pages with a shared topic or choose Organize.</p> : clusters.map((cluster) => <article key={cluster.id}>
        <div className="topic-heading"><strong>{cluster.name}</strong><small>{cluster.tabIds.length} tabs · {Math.round(cluster.confidence * 100)}% match{cluster.chromeGroupId !== undefined ? " · Chrome group" : " · not grouped in Chrome"}</small></div>
        {cluster.summary && <p className="summary">{cluster.summary}</p>}
        <ul>{(cluster.members ?? []).slice(0, 4).map((member) => <li key={member.tabId} title={member.url}>{member.title || member.url}</li>)}</ul>
        <div className="actions">
          <button type="button" disabled={busy || cluster.chromeGroupId !== undefined} onClick={() => void action(cluster, "accept")}>{cluster.chromeGroupId !== undefined ? "Grouped in Chrome" : "Group tabs"}</button>
          <button type="button" disabled={busy} onClick={() => void action(cluster, "internal")}>Use for context</button>
          <button type="button" disabled={busy} onClick={() => void action(cluster, "create-session")}>Use as research session</button>
          <button type="button" disabled={busy} onClick={() => void rename(cluster)}>Rename</button>
          <button type="button" disabled={busy} onClick={() => void action(cluster, "dismiss")}>Dismiss</button>
        </div>
      </article>)}
      {preview && <p className="note">Preview is based on local metadata and cached classification. Accept each group above to apply it in Chrome.</p>}
    </section>
    <section><div className="section-title"><span className="title-icon">◎</span> Research sessions <span>{sessions.length}</span></div>
      <p className="explain">A research session is a topic you chose to keep as active context. Findings and next steps are still yours to add.</p>
      {!sessions.length ? <p className="empty">Choose “Use as research session” on a detected topic.</p> : sessions.map((session) => <article key={session.id}>
        <strong>{session.title}</strong>
        <p>{session.summary || session.goal}</p>
        <div className="session-meta">
          <span>{(session.sources ?? []).length} sources</span>
          <span>{(session.findings ?? []).length} findings</span>
          <span>{(session.nextSteps ?? []).length} next steps</span>
        </div>
        {(session.sources ?? []).slice(0, 3).length > 0 && <ul>{(session.sources ?? []).slice(0, 3).map((source) => <li key={`${session.id}-${source.url}`} title={source.url}>{source.title || source.url}</li>)}</ul>}
        {(session.findings ?? []).length > 0 && <div className="mini-list"><strong>Findings</strong><ul>{(session.findings ?? []).slice(0, 2).map((finding) => <li key={`${session.id}-finding-${finding}`}>{finding}</li>)}</ul></div>}
        {(session.nextSteps ?? []).length > 0 && <div className="mini-list"><strong>Next steps</strong><ul>{(session.nextSteps ?? []).slice(0, 2).map((step) => <li key={`${session.id}-step-${step}`}>{step}</li>)}</ul></div>}
        <div className="session-controls">
          <button type="button" className={active === session.id ? "selected" : ""} onClick={() => void activate(session.id)}>{active === session.id ? "Active context" : "Use as active context"}</button>
          <button type="button" onClick={() => void renameSession(session)}>Rename</button>
          <button type="button" onClick={() => void addSessionNote(session, "findings")}>Add finding</button>
          <button type="button" onClick={() => void addSessionNote(session, "nextSteps")}>Add next step</button>
          <button type="button" className="danger" onClick={() => void removeSession(session)}>Remove</button>
        </div>
      </article>)}
    </section>
    <section><div className="section-title">Context controls</div><label className="toggle"><input type="checkbox" checked={conversationCapture} onChange={() => void toggleConversationCapture()} /> Include recent AI chat messages and save a local summary</label><button type="button" onClick={() => void clearContextData()}>Clear local chat summaries and detected topics</button></section>
    {!groupPermission && <footer>To create visible Chrome groups, choose Group tabs and allow Chrome tab group access. Detection and context use work without that permission.</footer>}
    {error && <div className="error">{error}</div>}
    <style>{`*{box-sizing:border-box}body{margin:0;width:380px;background:#faf9fc;color:#202124;font:13px/1.45 system-ui,sans-serif}main{padding:14px;position:relative;z-index:0}.brand{display:flex;align-items:center;gap:6px;font-size:18px;font-weight:700;color:#4f378b}.brand span,.title-icon{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#efe8ff;color:#5b3db6;font-size:11px}.tagline{font-size:11px;color:#68656d}.permission-banner{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 10px;margin-top:10px;background:linear-gradient(135deg,#f3ecff,#eef5ff);border:1px solid #d8d0f5;border-radius:10px}.permission-banner p{margin:3px 0 0;font-size:10px;color:#625c68}.organize{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px;margin-top:12px;background:linear-gradient(135deg,#f0edf5,#f6f2ff);border:1px solid #e7dfff;border-radius:10px}.organize p,.explain{font-size:10px;color:#625c68;margin:3px 0 0}.section-title{display:flex;gap:6px;align-items:center;font-size:12px;font-weight:700;margin:18px 0 7px}.section-title span{font-size:10px;color:#777}.topic-heading{display:flex;justify-content:space-between;gap:8px}.topic-heading small{color:#777;text-align:right}article{background:white;border:1px solid #e4e1e9;border-radius:10px;padding:10px;margin:7px 0;box-shadow:0 1px 2px rgba(64,49,97,.04)}article p{color:#62616a;margin:4px 0 8px}.summary{font-size:11px;color:#5f5b66;margin:6px 0 0}.session-meta{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;color:#6d5ca3;font-size:10px;font-weight:600}.mini-list{margin-top:8px}.mini-list strong{display:block;font-size:10px;color:#57536f;margin-bottom:4px}.ul{margin:7px 0;padding-left:18px;color:#555;font-size:11px}ul{margin:7px 0;padding-left:18px;color:#555;font-size:11px}li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:330px}.actions,.session-controls{display:flex;gap:5px;flex-wrap:wrap}.toggle{display:block;margin:8px 0;color:#4f378b}button{border:1px solid #d6d1df;border-radius:7px;background:#fff;color:#4f378b;padding:6px 8px;cursor:pointer;font-size:10px;font-weight:600;touch-action:manipulation;min-height:28px}button:hover{filter:brightness(.99)}button:focus-visible{outline:2px solid #7a63b8;outline-offset:1px}.organize button,.permission-banner button{background:linear-gradient(135deg,#6a4ba0,#7c5ec0);color:#fff;border-color:transparent}.selected{background:#eee8f8;border-color:#b9a8d9}.danger{color:#9c2f38;background:#fff6f7;border-color:#f0d6d8}.empty,.error,.note{color:#777;font-size:11px}.error{color:#b3261e}.note{background:#f5f2f8;padding:7px;border-radius:7px}footer{border-top:1px solid #e9e6ed;margin-top:12px;padding-top:9px;color:#777;font-size:10px}button:disabled{opacity:.5;cursor:default}`}</style>
  </main>;
}

export default Popup;
