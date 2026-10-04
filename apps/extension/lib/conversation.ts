import type { ConversationSummary } from "@ambient/contracts";

type Platform = "chatgpt" | "claude" | "gemini";
const selectors: Record<Platform, { user: string[]; assistant: string[] }> = {
  chatgpt: { user: ["[data-message-author-role='user']"], assistant: ["[data-message-author-role='assistant']"] },
  claude: { user: ["[data-testid='human-turn']", ".human-turn"], assistant: ["[data-testid='assistant-turn']", ".assistant-turn"] },
  gemini: { user: ["user-query", "[data-test-id='user-query']"], assistant: ["model-response", "[data-test-id='model-response']"] }
};

function clean(element: Element) {
  const clone = element.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("button, nav, [role=button], [aria-hidden=true], svg, textarea, input").forEach((node) => node.remove());
  return (clone.innerText || clone.textContent || "").replace(/\s+/g, " ").trim().slice(0, 4_000);
}

export function extractConversation(): { platform: Platform; title?: string; url: string; extractedAt: string; messages: { role: "user" | "assistant"; text: string }[]; continuation: boolean } | undefined {
  const host = location.hostname;
  const platform: Platform | undefined = /(^|\.)chatgpt\.com$/.test(host) ? "chatgpt" : /(^|\.)claude\.ai$/.test(host) ? "claude" : /(^|\.)gemini\.google\.com$/.test(host) ? "gemini" : undefined;
  if (!platform) return undefined;
  const parts = selectors[platform];
  // Query both role selectors together to preserve the page's message order.
  const candidates = Array.from(document.querySelectorAll([...parts.user, ...parts.assistant].join(",")));
  const messages: { role: "user" | "assistant"; text: string }[] = [];
  for (const element of candidates) {
    const role = element.matches(parts.user.join(",")) ? "user" : "assistant";
    const text = clean(element);
    if (!text || (messages.at(-1)?.role === role && messages.at(-1)?.text === text)) continue;
    messages.push({ role, text });
  }
  let selected = messages.slice(-12);
  let budget = 12_000;
  selected = selected.reverse().flatMap((message) => {
    if (budget <= 0) return [];
    const text = message.text.slice(0, budget); budget -= text.length;
    return [{ ...message, text }];
  }).reverse();
  return { platform, title: document.title.slice(0, 300), url: location.href, extractedAt: new Date().toISOString(), messages: selected, continuation: selected.some((message) => message.role === "assistant") };
}

export function conversationStorageKey(url: string) {
  let hash = 2166136261;
  for (let i = 0; i < url.length; i++) hash = Math.imul(hash ^ url.charCodeAt(i), 16777619);
  return `conversation:${(hash >>> 0).toString(16)}`;
}

export function mergeConversationSummary(previous: ConversationSummary | undefined, conversation: NonNullable<ReturnType<typeof extractConversation>>): ConversationSummary {
  const userMessages = conversation.messages.filter((message) => message.role === "user").map((message) => message.text);
  const latest = userMessages.at(-1) ?? "";
  const questionLines = userMessages.filter((text) => text.includes("?")).slice(-5);
  const entityCandidates = conversation.messages.flatMap((message) => message.text.match(/\b[A-Z][\w-]{2,}(?:\s+[A-Z][\w-]{2,}){0,2}\b/g) ?? []);
  const entities = [...new Set([...(previous?.entities ?? []), ...entityCandidates])].slice(-20);
  return { id: conversation.url, platform: conversation.platform, title: conversation.title, url: conversation.url,
    goal: latest.slice(0, 1_000) || previous?.goal, decisions: previous?.decisions ?? [], constraints: previous?.constraints ?? [],
    openQuestions: [...new Set([...(previous?.openQuestions ?? []), ...questionLines])].slice(-8), entities, updatedAt: conversation.extractedAt };
}
