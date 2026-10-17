# MB React Tutorials

A pnpm + Turborepo of small Vite apps for teaching React concepts. One catalog lists every lesson; each lesson is its own focused codebase.

## Apps and local ports

| App | Port | Production path |
| --- | --- | --- |
| catalog | 5173 | `/` |
| router | 5174 | `/router/` |
| jotai | 5175 | `/jotai/` |
| context-reducer | 5176 | `/context-reducer/` |
| hooks | 5177 | `/hooks/` |
| hoc | 5178 | `/hoc/` |
| react-bootstrap | 5179 | `/react-bootstrap/` |
| radix | 5180 | `/radix/` |
| axios | 5181 | `/axios/` |
| tanstack-query | 5182 | `/tanstack-query/` |
| forms | 5183 | `/forms/` |
| suspense-lazy | 5184 | `/suspense-lazy/` |
| portals | 5185 | `/portals/` |
| error-boundaries | 5186 | `/error-boundaries/` |

Ports are for local `pnpm dev` only. Production is **one** Vercel project with path prefixes on a single domain.

Shared chrome lives in [`packages/shell`](packages/shell): design tokens (`tokens.css`) and the common **Home / Lessons** nav used by the catalog and every lesson app.

## Commands

```bash
pnpm install
pnpm dev                 # all apps
pnpm --filter router dev # one app
pnpm build               # build all + assemble dist/ for Vercel
```

## Deploy (single Vercel project)

`vercel.json` at the repo root is correct. Vercel’s import UI still **lists every `apps/*` package** because this is a monorepo — that does **not** mean you need one Vercel project per lesson. Import the repo **once** with the **repository root** as the project.

### Dashboard (recommended)

1. [New Project](https://vercel.com/new) → import this Git repo.
2. If Vercel shows many apps (`catalog`, `router`, `jotai`, …), **do not** import each one.
3. Create **one** project and set:
   - **Root Directory**: leave empty / `.` (repo root — **not** `apps/catalog`)
   - **Framework Preset**: Other
   - **Install Command**: `pnpm install` (or leave blank; `vercel.json` sets it)
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
4. Deploy. You get one URL; lessons live at `/router/`, `/jotai/`, etc.

### CLI (also one project)

From the repo root:

```bash
npx vercel@latest
```

Accept defaults so Root Directory stays the repo root. Do **not** run `vercel` inside `apps/...`.

Do not create a separate Vercel project per lesson.
