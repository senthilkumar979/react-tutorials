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

## Commands

```bash
pnpm install
pnpm dev                 # all apps
pnpm --filter router dev # one app
pnpm build               # build all + assemble dist/ for Vercel
```

## Deploy (single Vercel project)

Connect this repo. Vercel uses `vercel.json`:

- Install: `pnpm install`
- Build: `pnpm build`
- Output: `dist`

Do not create a separate Vercel project per lesson.
