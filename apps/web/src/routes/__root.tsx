import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen w-full bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold tracking-tight text-primary">
              Template
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors [&.active]:text-primary">
                Home
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
              TypeScript React Hono
            </span>
          </div>
        </nav>
      </header>
      <main className="flex-1 w-full">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
});
