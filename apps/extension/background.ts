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

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  void (async () => {
    switch (message?.type) {
      case "LIST_TABS":
        return await chrome.tabs.query({ currentWindow: true });
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
