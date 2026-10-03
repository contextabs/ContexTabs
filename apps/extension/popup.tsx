import { useEffect, useState } from "react";
import type { ResearchSession } from "@ambient/contracts";
import { listSessions } from "./lib/local-store";

function Popup() {
  const [sessions, setSessions] = useState<ResearchSession[]>([]);
  const [active, setActive] = useState<string>();
  const [error, setError] = useState("");

  useEffect(() => {
    void Promise.all([
      listSessions(), chrome.storage.local.get<{ "active-session"?: string }>("active-session")
    ]).then(([items, selection]) => { setSessions(items.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))); setActive(selection["active-session"]); })
      .catch(() => setError("Could not read saved sessions."));
  }, []);

  async function activate(id: string) {
    await chrome.storage.local.set({ "active-session": id });
    setActive(id);
  }

  async function groupSession(session: ResearchSession) {
    const allowed = await chrome.permissions.request({ permissions: ["tabGroups"] });
    if (!allowed) return;
    const tabIds = session.sources.flatMap((source) => source.tabId === undefined ? [] : [source.tabId]);
    if (!tabIds.length) { setError("This session has no open source tabs to group."); return; }
    const result = await chrome.runtime.sendMessage({ type: "GROUP_TABS", tabIds, title: session.title });
    if (result?.error) setError(result.error);
  }

  return <main>
    <header><div className="brand">✦ Ambient</div><div className="tagline">Context for the field you’re working in</div><div className="access">Runs on sites you allow. Page and field text leave your browser only when you submit a request.</div></header>
    <section><div className="section-title">Research sessions</div>
      {sessions.length === 0 && <p className="empty">Saved sessions will appear here.</p>}
      {sessions.map((session) => <article key={session.id}>
        <strong>{session.title}</strong><p>{session.goal}</p>
        <div className="actions"><button className={active === session.id ? "selected" : ""} onClick={() => activate(session.id)}>{active === session.id ? "Active context" : "Use this session"}</button>
          {session.sources.some((source) => source.tabId !== undefined) && <button onClick={() => groupSession(session)}>Group tabs</button>}</div>
      </article>)}
    </section>
    {error && <div className="error">{error}</div>}
    <footer>Field text and page context are sent only when you submit a request.</footer>
    <style>{`
      *{box-sizing:border-box}body{margin:0;width:340px;background:#faf9fc;color:#202124;font:13px/1.45 system-ui,sans-serif}main{padding:16px}.brand{font-size:18px;font-weight:700;color:#4f378b}.tagline{font-size:11px;color:#68656d;margin-top:2px}.access{margin-top:9px;padding:8px;border-radius:8px;background:#f0edf5;color:#5c5665;font-size:10px}.section-title{font-size:12px;font-weight:700;margin:20px 0 8px}article{background:white;border:1px solid #e4e1e9;border-radius:10px;padding:10px;margin:8px 0}article p{color:#62616a;max-height:38px;overflow:hidden;margin:4px 0 8px}.actions{display:flex;gap:6px;flex-wrap:wrap}button{border:1px solid #d6d1df;border-radius:8px;background:#fff;color:#4f378b;padding:6px 9px;cursor:pointer;font-weight:600}.selected{background:#eee8f8;border-color:#b9a8d9}.empty,.error{color:#777}.error{color:#b3261e}footer{border-top:1px solid #e9e6ed;margin-top:14px;padding-top:10px;color:#777;font-size:10px}
    `}</style>
  </main>;
}

export default Popup;
