# TypeScript React Hono Template

An industry-standard, production-ready full-stack monorepo combining a React 19 frontend with a Hono backend. This template is designed for maximum performance, type safety, and scalability using Turborepo and Bun.

---

## Architecture

The project follows a monorepo structure managed by pnpm workspaces and orchestrated by Turborepo.

```text
.
├── apps/
│   ├── web/                # React 19 frontend (Vite + TanStack Router)
│   └── api/                # Hono backend service
├── packages/
│   ├── db/                 # Drizzle ORM schema, client, and migrations
│   ├── shared/             # Shared Zod schemas and TypeScript models
│   └── config/             # Shared TypeScript and ESLint configurations
├── pnpm-workspace.yaml     # Workspace definition
├── package.json            # Root configuration and scripts
└── turbo.json              # Build pipeline and task orchestration
```

### Core Technologies
- **Runtime**: Bun (Fast JavaScript runtime)
- **Frontend**: React 19, Vite, Tailwind CSS v4, TanStack Query & Router
- **Backend**: Hono (Ultra-fast web framework)
- **Database**: PostgreSQL with Drizzle ORM
- **Auth**: Better Auth integration
- **Monorepo**: Turborepo + pnpm

### Key Principles
- **End-to-End Type Safety**: Shared types between frontend and backend via Hono RPC.
- **Unified Validation**: Zod schemas defined in `packages/shared` for consistent validation across the stack.
- **Developer Experience**: Optimized for Windows and Unix environments with robust environment variable injection.

---

## Getting Started

### Prerequisites
- **Bun**: 1.2.x or higher
- **pnpm**: 10.x or higher (Recommended for workspace stability on Windows)
- **Node.js**: 22.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kaleidoscope
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

---

## Development

### Start Development Servers
Run the full-stack environment concurrently:
```bash
bun dev
```
- **Frontend**: http://localhost:4000
- **API**: http://localhost:4001

### Database Management
- **Push Changes**: `bun run db:push`
- **Drizzle Studio**: `bun run db:studio`

### Available Scripts
- `bun run dev`: Start all services in watch mode.
- `bun run build`: Build all applications for production.
- `pnpm run lint`: Run ESLint across the entire workspace.
- `pnpm run check`: Run TypeScript type-checking across all packages.

---

## Deployment

The template includes a multi-stage `Dockerfile` optimized for monorepos. It utilizes `turbo prune` to ensure lightweight and efficient production images.

---

## License

This project is licensed under the MIT License.
