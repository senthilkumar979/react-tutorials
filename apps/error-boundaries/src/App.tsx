import { useState } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { Bomb } from "./Bomb";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div className="rounded border border-red-200 bg-red-50 p-5">
    <h2 className="font-medium text-red-900">Something went wrong</h2>
    <p className="mt-2 text-sm text-red-800">{error.message}</p>
    <button
      type="button"
      className="mt-4 bg-red-800 px-3 py-1.5 text-sm text-white"
      onClick={resetErrorBoundary}
    >
      Reset boundary
    </button>
  </div>
);

export const App = () => {
  const [shouldExplode, setShouldExplode] = useState(false);

  return (
    <main className="mx-auto max-w-lg px-6 py-10">
      <h1 className="text-3xl font-semibold">Error Boundaries</h1>
      <p className="mt-2 text-slate-600">
        React&apos;s built-in boundary is a class component.{" "}
        <code>react-error-boundary</code> keeps this lesson in function
        components.
      </p>

      <div className="mt-8 space-y-4">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setShouldExplode(false)}
        >
          <Bomb shouldExplode={shouldExplode} />
        </ErrorBoundary>

        <button
          type="button"
          className="border border-slate-300 px-3 py-1.5 text-sm"
          onClick={() => setShouldExplode(true)}
        >
          Throw in child
        </button>
      </div>
    </main>
  );
};
