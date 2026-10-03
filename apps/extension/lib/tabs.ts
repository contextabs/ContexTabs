export async function collectTabs(): Promise<chrome.tabs.Tab[]> {
  try { return await chrome.runtime.sendMessage({ type: "LIST_TABS" }); }
  catch { return []; }
}
