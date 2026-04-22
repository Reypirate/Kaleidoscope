import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { env } from "./env";
import { db } from "./db";
import { schema } from "@repo/db";

const app = new Hono();

app.use("*", logger());
app.use("*", cors());

// Runtime.js endpoint
app.get("/api/runtime.js", (c) => {
  const clientEnv = Object.fromEntries(
    Object.entries(process.env).filter(([key]) => key.startsWith("VITE_"))
  );
  return c.text(
    `window.__env = ${JSON.stringify(clientEnv, null, 2)}`,
    200,
    { "Content-Type": "application/javascript" }
  );
});

// Health check
app.get("/api/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API Routes
const apiRoutes = app
  .basePath("/api")
  .get("/info", (c) => c.json({ message: "TypeScript React Hono Template" }));

export type ApiRoutes = typeof apiRoutes;

const port = parseInt(env.PORT);
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
