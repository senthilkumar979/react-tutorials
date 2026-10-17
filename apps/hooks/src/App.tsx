import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useToggle } from "./hooks/useToggle";

const HookPlayground = () => {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const [isOpen, toggleOpen] = useToggle(false);
  const renders = useRef(0);
  renders.current += 1;

  useEffect(() => {
    document.title = `Hooks demo · count ${count}`;
  }, [count]);

  const expensiveLabel = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 20_000; i += 1) total += count;
    return `Memoized total from count: ${total}`;
  }, [count]);

  const logCount = useCallback(() => {
    console.log("stable callback saw count", count);
  }, [count]);

  return (
    <div className="space-y-6">
      <section className="rounded border border-slate-200 bg-white p-5">
        <h2 className="font-medium">Built-in hooks</h2>
        <p className="mt-2 text-sm text-slate-600">
          Render count via useRef: {renders.current}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            className="bg-slate-900 px-3 py-1.5 text-sm text-white"
            onClick={() => setCount((value) => value + 1)}
          >
            useState +1
          </button>
          <span className="tabular-nums">{count}</span>
          <button
            type="button"
            className="border border-slate-300 px-3 py-1.5 text-sm"
            onClick={logCount}
          >
            useCallback log
          </button>
        </div>
        <p className="mt-3 text-sm text-slate-700">{expensiveLabel}</p>
        <p className="mt-1 text-xs text-slate-500">
          useEffect updates the document title when count changes.
        </p>
      </section>

      <section className="rounded border border-slate-200 bg-white p-5">
        <h2 className="font-medium">Custom hooks</h2>
        <label className="mt-3 block text-sm">
          Search (debounced)
          <input
            className="mt-1 w-full border border-slate-300 px-3 py-2"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <p className="mt-2 text-sm text-slate-600">
          Immediate: <strong>{query || "—"}</strong> · Debounced:{" "}
          <strong>{debouncedQuery || "—"}</strong>
        </p>
        <button
          type="button"
          className="mt-4 bg-teal-800 px-3 py-1.5 text-sm text-white"
          onClick={toggleOpen}
        >
          useToggle panel ({isOpen ? "open" : "closed"})
        </button>
        {isOpen && (
          <p className="mt-3 rounded bg-teal-50 p-3 text-sm text-teal-900">
            Panel visible because useToggle flipped to true.
          </p>
        )}
      </section>
    </div>
  );
};

export const App = () => (
  <main className="mx-auto max-w-xl px-6 py-10">
    <h1 className="text-3xl font-semibold">Hooks + Custom Hooks</h1>
    <p className="mt-2 text-slate-600">
      Built-ins for local logic; custom hooks to reuse patterns.
    </p>
    <div className="mt-8">
      <HookPlayground />
    </div>
  </main>
);
