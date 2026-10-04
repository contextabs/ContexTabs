export {};

import { openDB } from "idb";
import { ResearchSessionSchema } from "@ambient/contracts";

const dbPromise = openDB("ambient-context", 1, {
  upgrade(db) { if (!db.objectStoreNames.contains("sessions")) db.createObjectStore("sessions", { keyPath: "id" }); }
});

chrome.runtime.onInstalled.addListener(async () => {
  const existing = await chrome.storage.local.get("onboarding-seen");
  if (!existing["onboarding-seen"]) await chrome.storage.local.set({ "onboarding-seen": true });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  void (async () => {
    switch (message?.type) {
      case "LIST_TABS":
        return await chrome.tabs.query({ currentWindow: true });
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
                return elems.map((e) => e.innerText ?? "").join(" ").replace(/\n{3,}/g, " ").slice(0, 2000);
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
                return (root?.innerText ?? "").replace(/\n{3,}/g, "\n\n").slice(0, 3_500);
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
