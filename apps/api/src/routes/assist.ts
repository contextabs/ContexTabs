import type { FastifyInstance } from "fastify";
import { AssistRequestSchema, ContextPayloadSchema, FilterResponseSchema } from "@ambient/contracts";
import { extractMemory, filterContext } from "@ambient/llm";

export async function registerAssistRoutes(app: FastifyInstance) {
  app.post("/api/assist", async (request, reply) => {
    const parsed = AssistRequestSchema.safeParse(request.body);
    if (!parsed.success) return reply.code(400).send({ error: "Invalid request", details: parsed.error.flatten() });
    try {
      const { context, clarificationAnswer, skipClarification } = parsed.data;
      const filter = FilterResponseSchema.parse(await filterContext({ ...context, clarificationAnswer, skipClarification }));
      if (filter.isAmbiguous && !clarificationAnswer && !skipClarification && filter.clarifyingQuestion) {
        return { status: "clarification_required", filter };
      }
      if (!filter.suggestionUseful) return { status: "no_suggestion", filter };
      const sources = context.sources.filter((source) => filter.selectedSourceIds.includes(source.id)).map(({ id, title, url, tabId }) => ({ id, title, url, tabId }));
      return { status: "complete", filter, refinedPrompt: filter.optimizedPrompt, sources };
    } catch (error) {
      request.log.error(error);
      return reply.code(502).send({ error: "The AI service could not complete the request. Please retry." });
    }
  });

  app.post("/api/filter", async (request, reply) => {
    const parsed = ContextPayloadSchema.safeParse(request.body);
    if (!parsed.success) return reply.code(400).send({ error: "Invalid request", details: parsed.error.flatten() });
    try { return FilterResponseSchema.parse(await filterContext(parsed.data)); }
    catch (error) { request.log.error(error); return reply.code(502).send({ error: "Context filtering failed" }); }
  });

  app.post("/api/memory-suggestions", async (request, reply) => {
    const input = request.body as { query?: unknown; answer?: unknown };
    if (typeof input?.query !== "string" || typeof input?.answer !== "string" || input.query.length > 8_000 || input.answer.length > 40_000) {
      return reply.code(400).send({ error: "Invalid memory request" });
    }
    try {
      const result = await extractMemory({ query: input.query, answer: input.answer });
      return { suggestions: result.suggestions.slice(0, 2) };
    } catch (error) {
      request.log.error(error);
      return { suggestions: [] };
    }
  });
}
