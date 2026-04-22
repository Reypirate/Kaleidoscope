import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="py-20">
      <div className="mb-16 text-center">
        <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          TypeScript React Hono Template
        </div>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Modern Monorepo Template
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-slate-600">
          A scalable, industry-standard Turborepo architecture with end-to-end type safety.
        </p>
      </div>

      <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Turborepo", desc: "Workspace orchestration & caching" },
          { title: "Bun", desc: "Ultra-fast runtime & package manager" },
          { title: "Hono", desc: "Small, simple, and fast RPC backend" },
          { title: "Drizzle", desc: "TypeScript-first ORM with migrations" },
        ].map((feat) => (
          <div key={feat.title} className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-2 font-bold text-slate-900">{feat.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Getting Started</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8">
            <h3 className="text-lg font-bold mb-4">Project Structure</h3>
            <ul className="space-y-3 text-slate-600">
              <li><code className="bg-slate-100 px-1 rounded">apps/web</code> - React 19 Frontend</li>
              <li><code className="bg-slate-100 px-1 rounded">apps/api</code> - Hono Backend</li>
              <li><code className="bg-slate-100 px-1 rounded">packages/db</code> - Drizzle Schema & Client</li>
              <li><code className="bg-slate-100 px-1 rounded">packages/shared</code> - Shared Zod Schemas</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8">
            <h3 className="text-lg font-bold mb-4">Commands</h3>
            <ul className="space-y-3 text-slate-600">
              <li><code className="bg-slate-100 px-1 rounded">bun dev</code> - Start all services</li>
              <li><code className="bg-slate-100 px-1 rounded">bun db:push</code> - Update database schema</li>
              <li><code className="bg-slate-100 px-1 rounded">pnpm build</code> - Build for production</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
