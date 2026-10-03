import { z } from "zod";

export const MemoryItemSchema = z.object({
  id: z.string(), kind: z.enum(["preference", "fact"]), text: z.string().max(500),
  confidence: z.number().min(0).max(1), createdAt: z.string(), lastUsedAt: z.string().optional(),
  sourceRequestId: z.string(), status: z.enum(["proposed", "approved", "dismissed"])
});
export type MemoryItem = z.infer<typeof MemoryItemSchema>;

export const ContextSourceSchema = z.object({
  id: z.string(), kind: z.enum(["selection", "field", "page", "tab", "memory", "clarification", "session"]),
  title: z.string().optional(), url: z.string().url().optional(), text: z.string().max(40_000).optional(),
  tabGroupId: z.number().optional(), tabId: z.number().optional(), capturedAt: z.string()
});

export const ContextPayloadSchema = z.object({
  requestId: z.string().min(1).max(100), capturedAt: z.string(), query: z.string().min(1).max(8_000),
  fieldText: z.string().max(8_000).optional(), selection: z.string().max(8_000).optional(),
  sources: z.array(ContextSourceSchema).max(25), preferences: z.array(MemoryItemSchema).max(20)
});
export type ContextPayload = z.infer<typeof ContextPayloadSchema>;

export const FilterResponseSchema = z.object({
  requestId: z.string(), intent: z.string(), optimizedPrompt: z.string(), selectedSourceIds: z.array(z.string()),
  filteredContext: z.string(), conflicts: z.array(z.object({ description: z.string(), sourceIds: z.array(z.string()) })),
  isAmbiguous: z.boolean(), clarifyingQuestion: z.string().nullable(), missingInformation: z.array(z.string())
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

export const AssistRequestSchema = z.object({ context: ContextPayloadSchema, clarificationAnswer: z.string().max(4_000).optional() });
export const AssistResponseSchema = z.discriminatedUnion("status", [
  z.object({ status: z.literal("clarification_required"), filter: FilterResponseSchema }),
  z.object({
    status: z.literal("complete"), filter: FilterResponseSchema, answer: z.string(),
    sources: z.array(z.object({ id: z.string(), title: z.string().optional(), url: z.string().url().optional(), tabId: z.number().optional() })),
    verification: VerificationResultSchema, memorySuggestions: z.array(z.string()).max(2).optional()
  })
]);
export type AssistResponse = z.infer<typeof AssistResponseSchema>;

export const ResearchSessionSchema = z.object({
  id: z.string(), title: z.string(), goal: z.string(), createdAt: z.string(), updatedAt: z.string(),
  sources: z.array(z.object({ title: z.string().optional(), url: z.string().url(), tabId: z.number().optional(), finding: z.string().optional() })),
  findings: z.array(z.string()), contradictions: z.array(z.string()), unknowns: z.array(z.string()), nextSteps: z.array(z.string())
});
export type ResearchSession = z.infer<typeof ResearchSessionSchema>;
