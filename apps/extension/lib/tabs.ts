export type ContextTab = chrome.tabs.Tab & { contextText?: string; contextGroupTitle?: string };

export async function collectTabs(query: string): Promise<ContextTab[]> {
  try { return await chrome.runtime.sendMessage({ type: "COLLECT_TAB_CONTEXT", query }); }
  catch { return []; }
}
