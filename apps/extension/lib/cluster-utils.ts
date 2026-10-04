export type ClusterMeta = {
  title?: string;
  url?: string;
  domain?: string;
  topic?: string;
  summary?: string;
};

const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "this",
  "that",
  "into",
  "your",
  "about",
  "docs",
  "guide",
  "overview",
  "using",
  "how",
  "what",
  "when",
  "where",
  "page",
  "site",
  "official",
  "best",
  "new",
  "review",
  "search",
  "view",
  "docs",
  "learn",
  "guide",
  "project",
  "work",
  "team",
  "research",
  "topic",
  "ideas",
  "notes"
]);

function toTitleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function tokenize(value: string) {
  return (value.toLowerCase().match(/[a-z0-9]+/g) ?? [])
    .map((part) => part.replace(/^(www|docs|app|dev|io|com|org|net)$/, ""))
    .filter((part) => part.length >= 3 && !STOP_WORDS.has(part));
}

function cleanHost(domain?: string) {
  if (!domain) return "";
  try {
    const host = new URL(`https://${domain}`).hostname.replace(/^www\./, "").replace(/\.[a-z]{2,}$/i, "");
    return host.replace(/[-_]/g, " ");
  } catch {
    return domain.replace(/^www\./, "").replace(/\.[a-z]{2,}$/i, "");
  }
}

export function pickBestClusterMatch(
  existingClusters: Array<{ id: string; name: string; summary?: string; tokens?: string[]; members?: ClusterMeta[]; status?: string; dismissedUntil?: string }>,
  members: ClusterMeta[]
) {
  const memberText = members.map((member) => `${member.title ?? ""} ${member.url ?? ""} ${member.domain ?? ""} ${member.topic ?? ""}`).join(" ");
  const memberTokens = new Set(tokenize(memberText));

  const scored = existingClusters
    .map((cluster) => {
      const clusterText = [cluster.name, cluster.summary ?? "", ...(cluster.tokens ?? [])].join(" ");
      const clusterTokens = new Set(tokenize(clusterText));
      const shared = [...memberTokens].filter((token) => clusterTokens.has(token));
      const nameShared = [...new Set(tokenize(cluster.name))].filter((token) => memberTokens.has(token));
      const summaryShared = [...new Set(tokenize(cluster.summary ?? ""))].filter((token) => memberTokens.has(token));
      const score = shared.length * 6 + nameShared.length * 4 + summaryShared.length * 3;
      return { cluster, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)[0];

  return scored;
}

export function shouldSurfaceClusterSuggestion(cluster: { confidence?: number; tabIds?: number[]; tokens?: string[]; status?: string; name?: string }) {
  if (!cluster || cluster.status === "confirmed" || cluster.status === "dismissed") return false;
  const confidence = typeof cluster.confidence === "number" ? cluster.confidence : 0;
  const tabs = Array.isArray(cluster.tabIds) ? cluster.tabIds.length : 0;
  const tokenCount = Array.isArray(cluster.tokens) ? cluster.tokens.length : 0;
  const nameTokens = typeof cluster.name === "string" ? tokenize(cluster.name).length : 0;
  if (tabs < 2) return false;
  if (confidence < 0.58) return false;
  if (tokenCount < 2 && nameTokens < 2) return false;
  return true;
}

export function inferClusterName(items: ClusterMeta[], fallback = "Research") {
  const topicLabel = items
    .map((item) => item.topic)
    .filter((topic): topic is string => typeof topic === "string" && topic.trim().length > 0)
    .find((topic) => tokenize(topic).length >= 2);

  if (topicLabel) return toTitleCase(topicLabel.trim());

  const scores = new Map<string, number>();

  for (const item of items) {
    if (item.topic) {
      for (const token of tokenize(item.topic)) {
        scores.set(token, (scores.get(token) ?? 0) + 4);
      }
    }

    const titleText = item.title ?? "";
    const titleTokens = tokenize(titleText)
      .filter((token) => !/^(api|guide|docs|overview|model|analysis|research|project)$/i.test(token));
    for (const token of titleTokens) scores.set(token, (scores.get(token) ?? 0) + 3);

    const hostSource = cleanHost(item.domain ?? "") || (item.url ?? "");
    const hostTokens = tokenize(hostSource);
    for (const token of hostTokens) scores.set(token, (scores.get(token) ?? 0) + 2);
  }

  const topTokens = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([token]) => token)
    .filter((token, index, list) => list.indexOf(token) === index)
    .slice(0, 3);

  if (topTokens.length > 0) {
    const phrase = topTokens
      .map((token) => token.replace(/\b[a-z]/g, (match) => match.toUpperCase()))
      .join(" ");
    return phrase.length > 40 ? phrase.slice(0, 40).trim() : phrase;
  }

  return fallback;
}

export function buildClusterSummary(items: ClusterMeta[], name: string) {
  const leadingTitles = items
    .map((item) => (item.title ?? cleanHost(item.domain)) || "Tab")
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter((part) => part.length > 0);

  if (!leadingTitles.length) return `${name} cluster`; 
  return `${name}: ${leadingTitles.join(" • ")}`.slice(0, 500);
}
