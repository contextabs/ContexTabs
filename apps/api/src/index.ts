import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import { registerAssistRoutes } from "./routes/assist.js";

if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is required");

const app = Fastify({ logger: true, bodyLimit: 256 * 1024 });
await app.register(cors, { origin: true });
await app.register(rateLimit, { max: 30, timeWindow: "1 minute" });
app.get("/health", async () => ({ ok: true }));
await registerAssistRoutes(app);

await app.listen({ port: Number(process.env.PORT ?? 8787), host: process.env.HOST ?? "127.0.0.1" });
