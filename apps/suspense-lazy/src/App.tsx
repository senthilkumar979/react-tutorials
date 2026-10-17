import { lazy, Suspense, useState } from "react";

const StatsPanel = lazy(() =>
  import("./panels/StatsPanel").then((module) => ({
    default: module.StatsPanel,
  })),
);

const DelayedPanel = lazy(() =>
  Promise.all([
    import("./panels/DelayedPanel"),
    new Promise((resolve) => {
      window.setTimeout(resolve, 1500);
    }),
  ]).then(([module]) => ({ default: module.DelayedPanel })),
);

const Fallback = () => (
  <div className="animate-pulse rounded border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-600">
    Loading panel…
  </div>
);

export const App = () => {
  const [panel, setPanel] = useState<"stats" | "delayed" | null>(null);

  return (
    <main className="mx-auto max-w-lg px-6 py-10">
      <h1 className="text-3xl font-semibold">Suspense + Lazy</h1>
      <p className="mt-2 text-slate-600">
        Lazy loads a chunk; Suspense shows a fallback while it loads.
      </p>
      <div className="mt-6 flex gap-2">
        <button
          type="button"
          className="bg-slate-900 px-3 py-1.5 text-sm text-white"
          onClick={() => setPanel("stats")}
        >
          Load stats
        </button>
        <button
          type="button"
          className="bg-amber-800 px-3 py-1.5 text-sm text-white"
          onClick={() => setPanel("delayed")}
        >
          Load delayed
        </button>
      </div>
      <div className="mt-6">
        <Suspense fallback={<Fallback />}>
          {panel === "stats" && <StatsPanel />}
          {panel === "delayed" && <DelayedPanel />}
        </Suspense>
      </div>
    </main>
  );
};
