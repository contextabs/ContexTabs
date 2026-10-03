import type { MemoryItem, ResearchSession } from "@ambient/contracts";

export async function saveSession(session: ResearchSession) { await chrome.runtime.sendMessage({ type: "SAVE_SESSION", session }); }
export async function listSessions(): Promise<ResearchSession[]> { return chrome.runtime.sendMessage({ type: "LIST_SESSIONS" }); }
export async function getSession(id: string): Promise<ResearchSession | undefined> { return chrome.runtime.sendMessage({ type: "GET_SESSION", id }); }

export async function saveMemory(memory: MemoryItem) {
  const values = await chrome.storage.local.get<{ "approved-memory"?: MemoryItem[] }>("approved-memory");
  const items = values["approved-memory"] ?? [];
  await chrome.storage.local.set({ "approved-memory": [memory, ...items.filter((item) => item.id !== memory.id)].slice(0, 100) });
}
