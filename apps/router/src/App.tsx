import { useState } from "react";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
} from "react-router-dom";
import { DemoRoutes } from "./DemoRoutes";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

type RouterKind = "browser" | "hash" | "memory";

const meta: Record<
  RouterKind,
  { label: string; title: string; blurb: string }
> = {
  browser: {
    label: "BrowserRouter",
    title: "Browser history",
    blurb:
      "Uses the HTML5 history API. The address bar shows real paths (e.g. /about). Needs server fallbacks for deep links.",
  },
  hash: {
    label: "HashRouter",
    title: "Hash history",
    blurb:
      "Keeps the route after # (e.g. #/about). Works on static hosts without rewrite rules. Watch the URL hash as you navigate.",
  },
  memory: {
    label: "MemoryRouter",
    title: "In-memory history",
    blurb:
      "History lives in memory — the browser URL does not change. Useful for tests, embeds, and non-URL UIs. The box below shows the internal location.",
  },
};

export const App = () => {
  const [kind, setKind] = useState<RouterKind>("browser");
  const info = meta[kind];

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-slate-900">React Router</h1>
      <p className="mt-2 text-slate-600">
        Same route tree under three routers. Switch modes and compare how the
        URL behaves.
      </p>

      <div
        className="mt-6 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Router type"
      >
        {(Object.keys(meta) as RouterKind[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={kind === key}
            className={
              kind === key
                ? "bg-slate-900 px-3 py-1.5 text-sm text-white"
                : "border border-slate-300 px-3 py-1.5 text-sm text-slate-700"
            }
            onClick={() => setKind(key)}
          >
            {meta[key].label}
          </button>
        ))}
      </div>

      <section className="mt-6 rounded border border-slate-200 bg-slate-50 p-4">
        <h2 className="font-medium text-slate-900">{info.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {info.blurb}
        </p>
      </section>

      <div className="mt-6" key={kind}>
        {kind === "browser" && (
          <BrowserRouter basename={basename === "/" ? undefined : basename}>
            <DemoRoutes />
          </BrowserRouter>
        )}
        {kind === "hash" && (
          <HashRouter>
            <DemoRoutes />
          </HashRouter>
        )}
        {kind === "memory" && (
          <MemoryRouter initialEntries={["/"]}>
            <DemoRoutes showUrlHint />
          </MemoryRouter>
        )}
      </div>
    </main>
  );
};
