import test from "node:test";
import assert from "node:assert/strict";
import { inferClusterName, pickBestClusterMatch, shouldSurfaceClusterSuggestion } from "./cluster-utils.ts";

test("inferClusterName prefers meaningful topic labels over generic tokens", () => {
  const name = inferClusterName([
    { title: "OpenAI API Guide", url: "https://platform.openai.com/docs", domain: "platform.openai.com", topic: "AI coding tools" },
    { title: "Gemini model overview", url: "https://ai.google.dev/gemini", domain: "ai.google.dev", topic: "AI coding tools" }
  ]);

  assert.equal(name, "AI Coding Tools");
});

test("pickBestClusterMatch keeps a strong topic match stable across refreshes", () => {
  const best = pickBestClusterMatch(
    [
      { id: "travel-cluster", name: "Travel Booking", summary: "Hotel and flight planning", tokens: ["travel", "flight", "hotel"] },
      { id: "ai-cluster", name: "AI Coding Tools", summary: "OpenAI API Guide • Gemini model overview", tokens: ["ai", "coding", "tools", "openai", "gemini"] }
    ],
    [
      { title: "OpenAI API Guide", url: "https://platform.openai.com/docs", domain: "platform.openai.com", topic: "AI coding tools" },
      { title: "Gemini model overview", url: "https://ai.google.dev/gemini", domain: "ai.google.dev", topic: "AI coding tools" }
    ]
  );

  assert.equal(best?.cluster.id, "ai-cluster");
});

test("shouldSurfaceClusterSuggestion suppresses low-signal noise", () => {
  assert.equal(shouldSurfaceClusterSuggestion({ id: "weak", name: "Random", status: "suggested", confidence: 0.35, tabIds: [1, 2], tokens: ["page"] }), false);
  assert.equal(shouldSurfaceClusterSuggestion({ id: "strong", name: "AI Coding Tools", status: "suggested", confidence: 0.72, tabIds: [1, 2], tokens: ["ai", "coding", "tools", "openai"] }), true);
});
