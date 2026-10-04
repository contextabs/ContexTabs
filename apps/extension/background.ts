export {};

import { openDB } from "idb";
import { OrganizeWindowResponseSchema, ResearchSessionSchema, SemanticTabClusterSchema, type SemanticTabCluster } from "@ambient/contracts";

const dbPromise = openDB("ambient-context", 1, {
  upgrade(db) { if (!db.objectStoreNames.contains("sessions")) db.createObjectStore("sessions", { keyPath: "id" }); }
});

type TabMeta = { tabId: number; windowId: number; url: string; title: string; domain: string; groupId?: number; createdAt: number; updatedAt: number; lastActiveAt: number };
const STOP = new Set(["the", "and", "for", "with", "from", "this", "that", "best", "review", "guide", "how", "what", "new", "your", "official", "www", "com"]);
const tokens = (value: string) => [...new Set((value.toLowerCase().match(/[a-z0-9]{3,}/g) ?? []).filter((word) => !STOP.has(word)))];
const classificationKey = (tab: Pick<TabMeta, "url" | "title">) => {
  try { const url = new URL(tab.url); url.hash = ""; url.search = ""; return `${url.toString().replace(/\/$/, "")}|${tab.title.toLowerCase().replace(/\s+/g, " ").trim()}`; }
  catch { return `${tab.url}|${tab.title.toLowerCase().replace(/\s+/g, " ").trim()}`; }
};
function tabCategory(domain: string, title: string) {
  const text = `${domain} ${title}`.toLowerCase();
  if (/hotel|booking|expedia|airbnb|flight|airline|travel/.test(text)) return "travel";
  if (/amazon|bestbuy|walmart|shop|price|headphone|airpods|product/.test(text)) return "shopping";
  if (/arxiv|scholar|paper|journal|doi|distributed systems|lecture|course/.test(text)) return "study";
  if (/gmail|outlook|mail|calendar/.test(text)) return "work";
  return "research";
}
async function getClusters(): Promise<SemanticTabCluster[]> {
  const { "semantic-clusters": items = [] } = await chrome.storage.local.get<{ "semantic-clusters"?: SemanticTabCluster[] }>("semantic-clusters");
  return items.map((item) => SemanticTabClusterSchema.parse(item));
}
async function saveClusters(items: SemanticTabCluster[]) { await chrome.storage.local.set({ "semantic-clusters": items }); }
let clusterTimer: ReturnType<typeof setTimeout> | undefined;
let classificationTimer: ReturnType<typeof setTimeout> | undefined;
const API_URL = process.env.PLASMO_PUBLIC_API_URL ?? "http://127.0.0.1:8787";
function scheduleClustering() { if (clusterTimer) clearTimeout(clusterTimer); clusterTimer = setTimeout(() => void rebuildClusters(), 700); }
async function rebuildClusters(windowId?: number) {
  const tabs = await chrome.tabs.query(windowId === undefined ? {} : { windowId });
  const now = Date.now();
  const { "tab-metadata": priorMetadata = [] } = await chrome.storage.local.get<{ "tab-metadata"?: TabMeta[] }>("tab-metadata");
  const metadata: TabMeta[] = tabs.filter((tab) => tab.id !== undefined && tab.windowId !== undefined && tab.url && /^https?:\/\//.test(tab.url)).map((tab) => {
    const domain = (() => { try { return new URL(tab.url!).hostname.replace(/^www\./, ""); } catch { return ""; } })();
    const previous = priorMetadata.find((item) => item.tabId === tab.id && item.url === tab.url);
    return { tabId: tab.id!, windowId: tab.windowId!, url: tab.url!, title: tab.title ?? domain, domain, groupId: tab.groupId >= 0 ? tab.groupId : undefined, createdAt: previous?.createdAt ?? now, updatedAt: now, lastActiveAt: tab.active ? now : previous?.lastActiveAt ?? tab.lastAccessed ?? now };
  });
  await chrome.storage.local.set({ "tab-metadata": metadata.slice(-500) });
  const { "tab-classification-cache": classificationCache = {} } = await chrome.storage.local.get<{ "tab-classification-cache"?: Record<string, { topic: string; category: string; confidence: number }> }>("tab-classification-cache");
  const old = await getClusters();
  const clusters: SemanticTabCluster[] = old.filter((cluster) => windowId !== undefined && cluster.windowId !== windowId);
  const byWindow = new Map<number, TabMeta[]>();
  for (const tab of metadata) { const list = byWindow.get(tab.windowId) ?? []; list.push(tab); byWindow.set(tab.windowId, list); }
  for (const [currentWindowId, windowTabs] of byWindow) {
    const usedClusterIds = new Set<string>();
    const topicGroups: TabMeta[][] = [];
    for (const tab of windowTabs) {
      const cached = classificationCache[classificationKey(tab)];
      const tabTokens = new Set(tokens(`${tab.title} ${tab.domain} ${cached?.topic ?? ""}`));
      const candidates = topicGroups.map((group) => {
        const otherTokens = new Set(group.flatMap((member) => tokens(`${member.title} ${member.domain} ${classificationCache[classificationKey(member)]?.topic ?? ""}`)));
        const overlap = [...tabTokens].filter((word) => otherTokens.has(word));
        const sameChromeGroup = tab.groupId !== undefined && group.some((member) => member.groupId === tab.groupId);
        const cachedTopic = cached?.topic.trim().toLowerCase();
        const sameCachedTopic = Boolean(cachedTopic && group.some((member) => classificationCache[classificationKey(member)]?.topic.trim().toLowerCase() === cachedTopic));
        const categoryMatch = group.some((member) => (classificationCache[classificationKey(member)]?.category ?? tabCategory(member.domain, member.title)) === (cached?.category ?? tabCategory(tab.domain, tab.title)));
        return { group, score: (sameChromeGroup ? 8 : 0) + (sameCachedTopic ? 5 : 0) + overlap.reduce((sum, word) => sum + (word.length >= 5 ? 2 : 1), 0) + (categoryMatch ? 0.5 : 0) };
      }).sort((a, b) => b.score - a.score);
      const best = candidates[0];
      if (best && best.score >= 2) best.group.push(tab); else topicGroups.push([tab]);
    }
    for (const members of topicGroups) {
    if (members.length < 2) continue;
    const words = members.flatMap((tab) => tokens(`${tab.title} ${tab.domain} ${classificationCache[classificationKey(tab)]?.topic ?? ""}`));
    const counts = new Map<string, number>(); words.forEach((word) => counts.set(word, (counts.get(word) ?? 0) + 1));
    const common = [...counts].filter(([, count]) => count >= Math.max(2, Math.ceil(members.length * 0.4))).sort((a, b) => b[1] - a[1]).map(([word]) => word).slice(0, 8);
    const category = classificationCache[`${members[0].url}|${members[0].title}`]?.category ?? tabCategory(members[0].domain, members.map((tab) => tab.title).join(" "));
    const cachedName = members.map((tab) => classificationCache[classificationKey(tab)]?.topic).find(Boolean);
    const name = cachedName || common.slice(0, 3).map((word) => word[0].toUpperCase() + word.slice(1)).join(" ") || `${category[0].toUpperCase()}${category.slice(1)} research`;
    const prior = old.filter((cluster) => cluster.windowId === currentWindowId && !usedClusterIds.has(cluster.id)).map((cluster) => ({ cluster, overlap: cluster.tabIds.filter((id) => members.some((tab) => tab.tabId === id)).length })).sort((a, b) => b.overlap - a.overlap)[0];
    const id = prior && prior.overlap ? prior.cluster.id : `cluster-${currentWindowId}-${crypto.randomUUID()}`;
    usedClusterIds.add(id);
    const confidence = Math.min(0.98, 0.45 + members.length * 0.08 + (members.every((tab) => tab.groupId !== undefined) ? 0.15 : 0) + Math.min(common.length, 4) * 0.04);
    const status = prior?.cluster.status === "confirmed" ? "confirmed" : members.length >= 2 ? "suggested" : "tentative";
    const updated: SemanticTabCluster = { id, windowId: currentWindowId, name: prior?.cluster.name ?? name, category, tabIds: members.map((tab) => tab.tabId), members: members.map((tab) => ({ tabId: tab.tabId, title: tab.title.slice(0, 300), url: tab.url })), confidence, tokens: common, summary: `${members.length} related tabs: ${members.map((tab) => tab.title).slice(0, 4).join(" · ")}`.slice(0, 1_000), lastActiveAt: new Date(Math.max(...members.map((tab) => tab.lastActiveAt))).toISOString(), status, dismissedUntil: prior?.cluster.dismissedUntil, chromeGroupId: members.every((tab) => tab.groupId === members[0].groupId) ? members[0].groupId : undefined };
    clusters.push(updated);
    if (members.length >= 2 && status !== "confirmed" && (!prior?.cluster.dismissedUntil || Date.parse(prior.cluster.dismissedUntil) < now)) {
      const [suppress, disabled] = await Promise.all([chrome.storage.local.get<{ "suggested-cluster"?: string }>("suggested-cluster"), chrome.storage.local.get<{ "disabled-suggestion-category"?: string }>("disabled-suggestion-category")]);
      if (!suppress["suggested-cluster"] && disabled["disabled-suggestion-category"] !== category) await chrome.storage.local.set({ "suggested-cluster": id });
    }
    }
  }
  await saveClusters(clusters.slice(-100));
  const uncertain = metadata.filter((tab) => tab.title && !clusters.some((cluster) => cluster.windowId === tab.windowId && cluster.tabIds.includes(tab.tabId)));
  if (uncertain.length >= 3) scheduleClassification(uncertain.slice(0, 20), clusters.filter((cluster) => windowId === undefined || cluster.windowId === windowId));
}
function scheduleClassification(tabs: TabMeta[], clusters: SemanticTabCluster[]) {
  if (classificationTimer) clearTimeout(classificationTimer);
  classificationTimer = setTimeout(() => void classifyMetadataBatch(tabs, clusters), 8_000);
}
async function classifyMetadataBatch(tabs: TabMeta[], clusters: SemanticTabCluster[]) {
  const { "tab-classification-cache": cache = {} } = await chrome.storage.local.get<{ "tab-classification-cache"?: Record<string, { topic: string; category: string; confidence: number }> }>("tab-classification-cache");
  const uncached = tabs.filter((tab) => !cache[classificationKey(tab)]);
  if (!uncached.length) return;
  try {
    const response = await fetch(`${API_URL}/api/classify-tabs`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tabs: uncached.map(({ tabId, title, url, domain }) => ({ tabId, title: title.slice(0, 300), url, domain })), clusters: clusters.slice(0, 20).map(({ id, name, category, summary }) => ({ id, name, category, summary: summary.slice(0, 500) })) }) });
    if (!response.ok) return;
    const result = await response.json();
    for (const assignment of result.assignments ?? []) { const tab = uncached.find((item) => item.tabId === assignment.tabId); if (tab) cache[classificationKey(tab)] = { topic: assignment.topic, category: assignment.category, confidence: assignment.confidence }; }
    await chrome.storage.local.set({ "tab-classification-cache": cache });
    await rebuildClusters();
  } catch { /* classification is optional; local clusters remain available */ }
}

chrome.tabs.onCreated.addListener((tab) => { if (tab.id !== undefined && tab.windowId !== undefined) { void chrome.storage.local.get<{ "tab-metadata"?: TabMeta[] }>("tab-metadata").then(({ "tab-metadata": items = [] }) => chrome.storage.local.set({ "tab-metadata": [...items.filter((item) => item.tabId !== tab.id), { tabId: tab.id!, windowId: tab.windowId!, url: tab.url ?? "", title: tab.title ?? "", domain: "", createdAt: Date.now(), updatedAt: Date.now(), lastActiveAt: Date.now() }].slice(-500) })); scheduleClustering(); } });
chrome.tabs.onUpdated.addListener((tabId, change, tab) => { if (change.status === "complete" || change.title || change.url) { void chrome.storage.local.get<{ "tab-metadata"?: TabMeta[] }>("tab-metadata").then(({ "tab-metadata": items = [] }) => { const domain = (() => { try { return new URL(tab.url ?? "").hostname.replace(/^www\./, ""); } catch { return ""; } })(); const item = items.find((entry) => entry.tabId === tabId); const next = { tabId, windowId: tab.windowId ?? item?.windowId ?? -1, url: tab.url ?? item?.url ?? "", title: tab.title ?? item?.title ?? "", domain, groupId: tab.groupId >= 0 ? tab.groupId : undefined, createdAt: item?.createdAt ?? Date.now(), updatedAt: Date.now(), lastActiveAt: item?.lastActiveAt ?? Date.now() }; return chrome.storage.local.set({ "tab-metadata": [...items.filter((entry) => entry.tabId !== tabId), next].slice(-500) }); }); scheduleClustering(); } });
chrome.tabs.onActivated.addListener(async ({ tabId }) => { await chrome.storage.local.set({ "last-active-tab-id": tabId }); const { "tab-metadata": items = [] } = await chrome.storage.local.get<{ "tab-metadata"?: TabMeta[] }>("tab-metadata"); await chrome.storage.local.set({ "tab-metadata": items.map((item) => item.tabId === tabId ? { ...item, lastActiveAt: Date.now() } : item) }); scheduleClustering(); });
chrome.tabs.onRemoved.addListener(async (tabId) => { const clusters = await getClusters(); await saveClusters(clusters.map((cluster) => ({ ...cluster, tabIds: cluster.tabIds.filter((id) => id !== tabId) })).filter((cluster) => cluster.tabIds.length >= 2)); const { "tab-metadata": items = [] } = await chrome.storage.local.get<{ "tab-metadata"?: TabMeta[] }>("tab-metadata"); await chrome.storage.local.set({ "tab-metadata": items.filter((item) => item.tabId !== tabId) }); scheduleClustering(); });
chrome.windows.onRemoved.addListener(async (windowId) => {
  const clusters = await getClusters(); await saveClusters(clusters.filter((cluster) => cluster.windowId !== windowId));
  const { "tab-metadata": items = [] } = await chrome.storage.local.get<{ "tab-metadata"?: TabMeta[] }>("tab-metadata");
  await chrome.storage.local.set({ "tab-metadata": items.filter((item) => item.windowId !== windowId) });
});
chrome.tabGroups?.onUpdated.addListener(scheduleClustering);
chrome.tabGroups?.onCreated.addListener(scheduleClustering);
chrome.tabGroups?.onRemoved.addListener(scheduleClustering);
chrome.runtime.onStartup.addListener(scheduleClustering);
chrome.runtime.onInstalled.addListener(scheduleClustering);
void rebuildClusters();

chrome.runtime.onInstalled.addListener(async () => {
  const existing = await chrome.storage.local.get("onboarding-seen");
  if (!existing["onboarding-seen"]) await chrome.storage.local.set({ "onboarding-seen": true });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  void (async () => {
    switch (message?.type) {
      case "LIST_TABS":
        return await chrome.tabs.query({ currentWindow: true });
      case "OPEN_AMBIENT_POPUP":
        if (chrome.action?.openPopup) return await chrome.action.openPopup();
        return false;
      case "GET_CLUSTER_SUGGESTION": {
        const { "suggested-cluster": id } = await chrome.storage.local.get<{ "suggested-cluster"?: string }>("suggested-cluster");
        const cluster = id ? (await getClusters()).find((item) => item.id === id) : undefined;
        return cluster && (!cluster.dismissedUntil || Date.parse(cluster.dismissedUntil) < Date.now()) ? cluster : undefined;
      }
      case "LIST_CLUSTERS": {
        const windowId = Number(message.windowId);
        return (await getClusters()).filter((cluster) => cluster.windowId === windowId);
      }
      case "ORGANIZE_WINDOW": {
        const windowId = Number(message.windowId);
        await rebuildClusters(windowId);
        let clusters = (await getClusters()).filter((cluster) => cluster.windowId === windowId);
        const tabs = await chrome.tabs.query({ windowId });
        const known = new Set(clusters.flatMap((cluster) => cluster.tabIds));
        const uncached = tabs.filter((tab) => tab.id !== undefined && tab.url && /^https?:\/\//.test(tab.url) && !known.has(tab.id));
        if (uncached.length >= 1) {
          const metadata = uncached.map((tab) => { const url = tab.url!; const domain = new URL(url).hostname; return { tabId: tab.id!, title: tab.title ?? domain, url, domain }; });
          await classifyMetadataBatch(metadata as TabMeta[], clusters);
          await rebuildClusters(windowId);
          clusters = (await getClusters()).filter((cluster) => cluster.windowId === windowId);
        }
        const response = OrganizeWindowResponseSchema.parse({ windowId, clusters });
        await chrome.storage.local.set({ "organize-preview": response });
        return response;
      }
      case "GET_RELEVANT_CLUSTERS": {
        const query = tokens(String(message.query ?? "")).concat(tokens(String(message.conversationText ?? "")));
        return (await getClusters()).map((cluster) => ({ cluster, score: cluster.tokens.reduce((sum, word) => sum + (query.includes(word) ? 2 : 0), 0) + cluster.confidence + (cluster.status === "confirmed" ? 3 : 0) })).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).slice(0, 2).map((item) => item.cluster);
      }
      case "CLUSTER_ACTION": {
        const clusters = await getClusters();
        const cluster = clusters.find((item) => item.id === String(message.id));
        if (!cluster) throw new Error("Cluster no longer exists");
        if (message.action === "accept") {
          if (!message.permissionGranted || !(await chrome.permissions.contains({ permissions: ["tabGroups"] }))) throw new Error("Tab group permission was not granted");
          await chrome.storage.local.set({ "tab-group-permission": true });
          const openTabs = await chrome.tabs.query({ windowId: cluster.windowId });
          const ids = cluster.tabIds.filter((id) => openTabs.some((tab) => tab.id === id));
          if (ids.length < 2) throw new Error("Not enough open tabs remain to group");
          const existingGroupId = cluster.chromeGroupId === undefined ? undefined : (await chrome.tabGroups.query({})).some((group) => group.id === cluster.chromeGroupId) ? cluster.chromeGroupId : undefined;
          const groupId = await chrome.tabs.group({ tabIds: ids, ...(existingGroupId === undefined ? {} : { groupId: existingGroupId }) });
          await chrome.tabGroups.update(groupId, { title: cluster.name.slice(0, 80), color: cluster.category === "travel" ? "blue" : cluster.category === "shopping" ? "orange" : "purple" });
          cluster.status = "confirmed"; cluster.chromeGroupId = groupId;
        } else if (message.action === "internal") cluster.status = "confirmed";
        else if (message.action === "dismiss") cluster.dismissedUntil = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
        else if (message.action === "never") { await chrome.storage.local.set({ "disabled-suggestion-category": cluster.category }); cluster.dismissedUntil = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(); }
        else if (message.action === "rename") cluster.name = String(message.name ?? cluster.name).slice(0, 80);
        else if (message.action === "create-session") {
          const openTabs = await chrome.tabs.query({ windowId: cluster.windowId });
          const db = await dbPromise; const now = new Date().toISOString();
          const session = ResearchSessionSchema.parse({ id: `research-${cluster.id}`, title: cluster.name, goal: `Research ${cluster.name}`, createdAt: now, updatedAt: now, clusterId: cluster.id, summary: cluster.summary, entities: cluster.tokens, constraints: [], confirmed: true, sources: openTabs.filter((tab) => cluster.tabIds.includes(tab.id!)).map((tab) => ({ title: tab.title, url: tab.url!, tabId: tab.id })), findings: [], contradictions: [], unknowns: [], nextSteps: [] });
          await db.put("sessions", session);
        }
        await saveClusters(clusters); await chrome.storage.local.remove("suggested-cluster"); scheduleClustering(); return true;
      }
      case "GET_CONVERSATION_SUMMARY":
        return (await chrome.storage.local.get<Record<string, unknown>>(String(message.key)))[String(message.key)];
      case "SAVE_CONVERSATION_SUMMARY":
        await chrome.storage.local.set({ [String(message.key)]: message.summary }); return true;
      case "CLEAR_CONTEXT_DATA":
        if (clusterTimer) clearTimeout(clusterTimer);
        if (classificationTimer) clearTimeout(classificationTimer);
        await chrome.storage.local.remove(["semantic-clusters", "suggested-cluster", "tab-metadata", "tab-classification-cache", "organize-preview"]);
        for (const key of await chrome.storage.local.get(null).then((data) => Object.keys(data).filter((item) => item.startsWith("conversation:")))) await chrome.storage.local.remove(key);
        return true;
      case "COLLECT_TAB_CONTEXT": {
        const tabs = await chrome.tabs.query(sender.tab?.windowId === undefined ? { currentWindow: true } : { windowId: sender.tab.windowId });
        const activeTab = tabs.find((tab) => tab.id === sender.tab?.id) ?? tabs.find((tab) => tab.active);
        let groups = new Map<number, string>();
        try {
          const browserGroups = await chrome.tabGroups.query({});
          groups = new Map(browserGroups.map((group) => [group.id, group.title || "Unnamed group"]));
        } catch { /* tabGroups permission is optional */ }

        const words = String(message.query ?? "").toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
        const candidates = tabs.filter((tab) => tab.id !== activeTab?.id && tab.id !== undefined &&
          tab.url && /^https?:\/\//.test(tab.url) && !/^(chrome|edge|about|devtools):/.test(tab.url));
        candidates.sort((a, b) => {
          const score = (tab: chrome.tabs.Tab) => {
            const haystack = `${tab.title ?? ""} ${tab.url ?? ""} ${groups.get(tab.groupId) ?? ""}`.toLowerCase();
            const lexical = words.reduce((sum, word) => sum + (haystack.includes(word) ? 2 : 0), 0);
            const sameGroup = activeTab?.groupId !== undefined && activeTab.groupId >= 0 && tab.groupId === activeTab.groupId ? 5 : 0;
            return lexical + sameGroup;
          };
          return score(b) - score(a) || (b.lastAccessed ?? 0) - (a.lastAccessed ?? 0);
        });

        // gather headings from the active page to improve shortlisting relevance
        let activeHeadingsText = "";
        try {
          if (activeTab?.id !== undefined) {
            const extractedActive = await chrome.scripting.executeScript({
              target: { tabId: activeTab.id },
              func: () => {
                const elems = Array.from(document.querySelectorAll("h1,h2,h3"));
                return elems.map((e) => (e as HTMLElement).innerText ?? "").join(" ").replace(/\n{3,}/g, " ").slice(0, 2000);
              }
            });
            activeHeadingsText = String(extractedActive[0]?.result ?? "").toLowerCase();
          }
        } catch { /* ignore failures reading active page headings */ }

        const headingWords = activeHeadingsText.match(/[a-z0-9]{3,}/g) ?? [];

        // compute a relevance score and require at least one signal (prompt words, active headings, or same group)
        const scoreFor = (tab: chrome.tabs.Tab) => {
          const haystack = `${tab.title ?? ""} ${tab.url ?? ""} ${groups.get(tab.groupId) ?? ""}`.toLowerCase();
          const lexical = words.reduce((sum, word) => sum + (haystack.includes(word) ? 2 : 0), 0);
          const headingsMatch = headingWords.reduce((sum, w) => sum + (haystack.includes(w) ? 1 : 0), 0);
          const sameGroup = activeTab?.groupId !== undefined && activeTab.groupId >= 0 && tab.groupId === activeTab.groupId ? 5 : 0;
          return lexical + headingsMatch + sameGroup;
        };

        const shortlisted = candidates
          .filter((tab) => scoreFor(tab) > 0) // drop tabs with no relevance signal
          .sort((a, b) => scoreFor(b) - scoreFor(a) || (b.lastAccessed ?? 0) - (a.lastAccessed ?? 0))
          .slice(0, 2); // cap to at most two tabs for low-latency scraping

        const results = await Promise.all(shortlisted.map(async (tab) => {
          let text = "";
          try {
            const extracted = await chrome.scripting.executeScript({
              target: { tabId: tab.id! },
              func: () => {
                const root = document.querySelector("main, article, [role=main]") ?? document.body;
                return ((root as HTMLElement | null)?.innerText ?? "").replace(/\n{3,}/g, "\n\n").slice(0, 3_500);
              }
            });
            text = String(extracted[0]?.result ?? "");
          } catch { /* restricted pages, discarded tabs, and protected frames are skipped */ }
          return { ...tab, contextText: text, contextGroupTitle: tab.groupId >= 0 ? groups.get(tab.groupId) : undefined };
        }));
        return results;
      }
      case "LIST_SESSIONS":
        return await (await dbPromise).getAll("sessions");
      case "GET_SESSION":
        return await (await dbPromise).get("sessions", String(message.id));
      case "SAVE_SESSION": {
        const session = ResearchSessionSchema.parse(message.session);
        await (await dbPromise).put("sessions", session);
        return true;
      }
      case "GROUP_TABS": {
        const tabIds = Array.isArray(message.tabIds) ? message.tabIds.filter((id: unknown) => Number.isInteger(id)) : [];
        if (!tabIds.length) throw new Error("No tab IDs were supplied");
        const groupId = await chrome.tabs.group({ tabIds });
        await chrome.tabGroups.update(groupId, { title: String(message.title ?? "Research session").slice(0, 80), color: "purple" });
        return groupId;
      }
      default:
        return undefined;
    }
  })().then(sendResponse).catch((error) => sendResponse({ error: error instanceof Error ? error.message : "Extension request failed" }));
  return true;
});
