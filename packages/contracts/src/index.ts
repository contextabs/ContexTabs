import { z } from "zod";

export const MemoryItemSchema = z.object({
  id: z.string(), kind: z.enum(["preference", "fact"]), text: z.string().max(500),
  confidence: z.number().min(0).max(1), createdAt: z.string(), lastUsedAt: z.string().optional(),
  sourceRequestId: z.string(), status: z.enum(["proposed", "approved", "dismissed"])
});
export type MemoryItem = z.infer<typeof MemoryItemSchema>;

export const ConversationMessageSchema = z.object({ role: z.enum(["user", "assistant"]), text: z.string().max(4_000), capturedAt: z.string().optional() });
export const ConversationSummarySchema = z.object({
  id: z.string(), platform: z.enum(["chatgpt", "claude", "gemini"]), title: z.string().max(300).optional(), url: z.string().url(),
  goal: z.string().max(1_000).optional(), decisions: z.array(z.string().max(300)).max(8), constraints: z.array(z.string().max(300)).max(8),
  openQuestions: z.array(z.string().max(300)).max(8), entities: z.array(z.string().max(120)).max(20), updatedAt: z.string()
});
export type ConversationSummary = z.infer<typeof ConversationSummarySchema>;

export const SemanticTabClusterSchema = z.object({
  id: z.string(), windowId: z.number(), name: z.string().max(120), category: z.string().max(60), tabIds: z.array(z.number()).max(100),
  members: z.array(z.object({ tabId: z.number(), title: z.string().max(300), url: z.string().url() })).max(100).optional(),
  confidence: z.number().min(0).max(1), tokens: z.array(z.string().max(80)).max(40), summary: z.string().max(1_000),
  lastActiveAt: z.string(), status: z.enum(["tentative", "suggested", "confirmed"]), dismissedUntil: z.string().optional(), chromeGroupId: z.number().optional()
});
export type SemanticTabCluster = z.infer<typeof SemanticTabClusterSchema>;

export const TabClassificationRequestSchema = z.object({
  tabs: z.array(z.object({ tabId: z.number(), title: z.string().max(300), url: z.string().url(), domain: z.string().max(200) })).max(20),
  clusters: z.array(z.object({ id: z.string(), name: z.string().max(120), category: z.string().max(60), summary: z.string().max(500) })).max(20)
});
export const TabClassificationResponseSchema = z.object({ assignments: z.array(z.object({ tabId: z.number(), clusterId: z.string().nullable(), topic: z.string().max(120), category: z.string().max(60), confidence: z.number().min(0).max(1) })).max(20) });
export const OrganizeWindowResponseSchema = z.object({ windowId: z.number(), clusters: z.array(SemanticTabClusterSchema).max(100) });
export type TabClassificationRequest = z.infer<typeof TabClassificationRequestSchema>;
export type TabClassificationResponse = z.infer<typeof TabClassificationResponseSchema>;
export type OrganizeWindowResponse = z.infer<typeof OrganizeWindowResponseSchema>;

export const ContextSourceSchema = z.object({
  id: z.string(), kind: z.enum(["selection", "field", "page", "tab", "memory", "clarification", "session", "cluster"]),
  title: z.string().optional(), url: z.string().url().optional(), text: z.string().max(40_000).optional(),
  tabGroupId: z.number().optional(), tabGroupTitle: z.string().max(200).optional(), tabId: z.number().optional(), capturedAt: z.string()
});

export const ContextPayloadSchema = z.object({
  requestId: z.string().min(1).max(100), capturedAt: z.string(), query: z.string().min(1).max(8_000),
  fieldText: z.string().max(8_000).optional(), selection: z.string().max(8_000).optional(),
  sources: z.array(ContextSourceSchema).max(25), preferences: z.array(MemoryItemSchema).max(20),
  conversation: z.object({ platform: z.enum(["chatgpt", "claude", "gemini"]), title: z.string().max(300).optional(), url: z.string().url(), extractedAt: z.string(), messages: z.array(ConversationMessageSchema).max(12), summary: ConversationSummarySchema.optional(), continuation: z.boolean().optional() }).optional()
});
export type ContextPayload = z.infer<typeof ContextPayloadSchema>;

export const FilterResponseSchema = z.object({
  requestId: z.string(), intent: z.string(), optimizedPrompt: z.string(), selectedSourceIds: z.array(z.string()),
  filteredContext: z.string(), conflicts: z.array(z.object({ description: z.string(), sourceIds: z.array(z.string()) })),
  isAmbiguous: z.boolean(), clarifyingQuestion: z.string().nullable(), missingInformation: z.array(z.string()),
  suggestionUseful: z.boolean()
});
export type FilterResponse = z.infer<typeof FilterResponseSchema>;

export const ExecutionRequestSchema = z.object({
  requestId: z.string(), optimizedPrompt: z.string().min(1).max(8_000), filteredContext: z.string().max(40_000),
  sources: z.array(z.object({ id: z.string(), title: z.string().optional(), url: z.string().url().optional() })),
  preferences: z.array(MemoryItemSchema), clarificationAnswer: z.string().max(4_000).optional(),
  correctionFeedback: z.string().max(4_000).optional()
});
export type ExecutionRequest = z.infer<typeof ExecutionRequestSchema>;

export const VerificationResultSchema = z.object({
  requestId: z.string(), passed: z.boolean(), score: z.number().min(0).max(1),
  issues: z.array(z.object({ kind: z.enum(["intent_gap", "unsupported_claim", "format", "incomplete"]), description: z.string() })),
  correctionPrompt: z.string().optional()
});
export type VerificationResult = z.infer<typeof VerificationResultSchema>;

export const AssistRequestSchema = z.object({ context: ContextPayloadSchema, clarificationAnswer: z.string().max(4_000).optional(), skipClarification: z.boolean().optional() });
export const AssistResponseSchema = z.discriminatedUnion("status", [
  z.object({ status: z.literal("clarification_required"), filter: FilterResponseSchema }),
  z.object({ status: z.literal("no_suggestion"), filter: FilterResponseSchema }),
  z.object({
    status: z.literal("complete"), filter: FilterResponseSchema, refinedPrompt: z.string(),
    sources: z.array(z.object({ id: z.string(), title: z.string().optional(), url: z.string().url().optional(), tabId: z.number().optional() })),
    memorySuggestions: z.array(z.string()).max(2).optional()
  })
]);
export type AssistResponse = z.infer<typeof AssistResponseSchema>;

export const ResearchSessionSchema = z.object({
  id: z.string(), title: z.string(), goal: z.string(), createdAt: z.string(), updatedAt: z.string(), clusterId: z.string().optional(), summary: z.string().max(1_000).optional(), entities: z.array(z.string()).optional(), constraints: z.array(z.string()).optional(), confirmed: z.boolean().optional(),
  sources: z.array(z.object({ title: z.string().optional(), url: z.string().url(), tabId: z.number().optional(), finding: z.string().optional() })),
  findings: z.array(z.string()), contradictions: z.array(z.string()), unknowns: z.array(z.string()), nextSteps: z.array(z.string())
});
export type ResearchSession = z.infer<typeof ResearchSessionSchema>;
