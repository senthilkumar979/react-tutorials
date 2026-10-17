export type TopicAccent =
  | "teal"
  | "forest"
  | "slate"
  | "amber"
  | "rose"
  | "indigo"
  | "cyan"
  | "olive";

export interface Topic {
  slug: string;
  title: string;
  summary: string;
  what: string;
  when: string;
  demo: string;
  accent: TopicAccent;
  devPort: number;
  prodPath: string;
}

export const accentVar: Record<TopicAccent, string> = {
  teal: "var(--tu-accent)",
  forest: "var(--tu-accent-forest)",
  slate: "var(--tu-accent-slate)",
  amber: "var(--tu-accent-amber)",
  rose: "var(--tu-accent-rose)",
  indigo: "var(--tu-accent-indigo)",
  cyan: "var(--tu-accent-cyan)",
  olive: "var(--tu-accent-olive)",
};

export const topics: Topic[] = [
  {
    slug: "router",
    title: "React Router",
    summary: "Browser, Hash, and Memory routers with the same route tree.",
    what: "React Router maps locations to React components. BrowserRouter uses the history API, HashRouter keeps the path after #, and MemoryRouter keeps history in memory without touching the address bar.",
    when: "Use BrowserRouter for normal SPAs, HashRouter on static hosts without rewrites, and MemoryRouter for tests, embeds, or UIs that should not change the URL.",
    demo: "Switch between BrowserRouter, HashRouter, and MemoryRouter. Shared demos cover nested routes, dynamic params, search params, and NavLinks.",
    accent: "teal",
    devPort: 5174,
    prodPath: "/router/",
  },
  {
    slug: "jotai",
    title: "Jotai",
    summary: "Atomic state with atoms and derived values.",
    what: "Jotai stores state in small atoms. Components subscribe only to the atoms they use. Derived atoms compute values from other atoms.",
    when: "Prefer Jotai when you want shared state without a heavy store, or when different parts of the tree need different slices of state.",
    demo: "A counter atom, a doubled derived atom, and a tiny todo list — no other state libraries.",
    accent: "forest",
    devPort: 5175,
    prodPath: "/jotai/",
  },
  {
    slug: "context-reducer",
    title: "Context + useReducer",
    summary: "Share update logic across the tree with a reducer.",
    what: "useReducer keeps complex update logic in one place. React Context delivers that state and dispatch to descendants without prop drilling.",
    when: "Good for medium-sized shared UI state (cart, wizard, theme) when you do not need a separate library yet.",
    demo: "A mini shopping cart: add, remove, and clear items through a Context provider backed by useReducer.",
    accent: "slate",
    devPort: 5176,
    prodPath: "/context-reducer/",
  },
  {
    slug: "hooks",
    title: "Hooks + Custom Hooks",
    summary: "Built-in hooks and extracting reusable hook logic.",
    what: "Hooks let function components hold state and side effects. Custom hooks package that logic so multiple components can reuse it.",
    when: "Use built-in hooks for local component needs. Extract a custom hook when the same stateful pattern appears more than once.",
    demo: "useState, useEffect, useRef, useMemo, and useCallback on one widget, plus useToggle and useDebounce.",
    accent: "cyan",
    devPort: 5177,
    prodPath: "/hooks/",
  },
  {
    slug: "hoc",
    title: "Higher-Order Components",
    summary: "Wrap a component to inject behavior or props.",
    what: "An HOC is a function that takes a component and returns a new component with extra props or behavior. Common before hooks; still useful for cross-cutting UI concerns.",
    when: "Prefer hooks for most new code. Reach for an HOC when you need to wrap many presentational components the same way (loading, auth gate, analytics).",
    demo: "withLoading wraps a presentational UserCard so the loading UI stays outside the card itself.",
    accent: "olive",
    devPort: 5178,
    prodPath: "/hoc/",
  },
  {
    slug: "react-bootstrap",
    title: "React Bootstrap",
    summary: "Bootstrap components as React components.",
    what: "React Bootstrap reimplements Bootstrap’s UI as React components with accessible markup and controlled props — no jQuery.",
    when: "Use it when you want Bootstrap’s look and responsive grid with a React-first API, or you are teaching the Bootstrap component set.",
    demo: "A gallery of common components: layout, buttons, forms, overlays, navigation, feedback, and data display.",
    accent: "indigo",
    devPort: 5179,
    prodPath: "/react-bootstrap/",
  },
  {
    slug: "radix",
    title: "Radix UI",
    summary: "Unstyled accessible primitives you style yourself.",
    what: "Radix provides headless primitives (dialog, menu, tabs, …) with keyboard support and ARIA. You own the look with CSS or Tailwind.",
    when: "Choose Radix when you need accessible interactions but want full control over design — design systems and custom product UI.",
    demo: "Dialog, dropdown, tabs, tooltip, popover, accordion, select, checkbox, and switch — each in a small Tailwind-styled example.",
    accent: "rose",
    devPort: 5180,
    prodPath: "/radix/",
  },
  {
    slug: "axios",
    title: "Axios",
    summary: "HTTP client with instances and interceptors.",
    what: "Axios is a promise-based HTTP client. You configure a shared instance (base URL, headers) and interceptors for auth or error handling.",
    when: "Use Axios when you want a consistent API client with interceptors, cancel tokens, and clearer error objects than raw fetch.",
    demo: "One Axios instance, request/response interceptors, GET and POST against JSONPlaceholder, and a failed request.",
    accent: "amber",
    devPort: 5181,
    prodPath: "/axios/",
  },
  {
    slug: "tanstack-query",
    title: "TanStack Query",
    summary: "Server state: caching, mutations, and invalidation.",
    what: "TanStack Query (React Query) manages async server data: caching, background refetch, loading/error states, and mutations that invalidate queries.",
    when: "Use it for remote data that must stay in sync with a backend. Keep local UI state in React/Jotai; let Query own lists and details from the API.",
    demo: "useQuery + useMutation with fetch in queryFn, then invalidate the list after a successful create.",
    accent: "teal",
    devPort: 5182,
    prodPath: "/tanstack-query/",
  },
  {
    slug: "forms",
    title: "React Hook Form + Zod",
    summary: "Performant forms with schema validation.",
    what: "React Hook Form minimizes re-renders with uncontrolled inputs. Zod defines a schema; @hookform/resolvers wires that schema into the form.",
    when: "Use this pair for signup, settings, and any form where validation rules should be type-safe and reusable.",
    demo: "One signup form: name, email, password — validated by a Zod schema through the Zod resolver.",
    accent: "forest",
    devPort: 5183,
    prodPath: "/forms/",
  },
  {
    slug: "suspense-lazy",
    title: "Suspense + Lazy Loading",
    summary: "Code-split routes or panels and show a fallback.",
    what: "React.lazy loads a component’s code only when needed. Suspense shows a fallback while that chunk (or another async child) is pending.",
    when: "Use lazy loading for large screens or rarely used panels so the first paint stays small. Pair with Suspense for a clear loading UI.",
    demo: "Lazy-loaded panels behind Suspense. A delayed module makes the fallback visible on purpose.",
    accent: "cyan",
    devPort: 5184,
    prodPath: "/suspense-lazy/",
  },
  {
    slug: "portals",
    title: "Portals",
    summary: "Render children into a different DOM node.",
    what: "createPortal lets a component render into document.body (or any node) while keeping React ownership. Events still bubble through the React tree.",
    when: "Use portals for modals, tooltips, and toasts that must escape parent overflow, stacking context, or z-index limits.",
    demo: "A modal rendered into document.body so it sits above a clipped parent container.",
    accent: "slate",
    devPort: 5185,
    prodPath: "/portals/",
  },
  {
    slug: "error-boundaries",
    title: "Error Boundaries",
    summary: "Catch render errors and show a fallback UI.",
    what: "Error boundaries catch JavaScript errors in the child tree during render and show a fallback instead of a blank screen. React’s built-in API is a class; react-error-boundary wraps that for function components.",
    when: "Place boundaries around independent widgets so one failure does not take down the whole page. Reset or offer a retry after the user fixes input.",
    demo: "A boundary around a panel with a button that throws, plus a reset action to recover.",
    accent: "rose",
    devPort: 5186,
    prodPath: "/error-boundaries/",
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function lessonUrl(topic: Topic): string {
  if (import.meta.env.DEV) return `http://localhost:${topic.devPort}`;
  return topic.prodPath;
}
