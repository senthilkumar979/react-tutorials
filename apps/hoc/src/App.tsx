import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import { withLoading } from "./withLoading";

const UserCardWithLoading = withLoading(UserCard);

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <main className="mx-auto max-w-lg px-6 py-10">
      <h1 className="text-3xl font-semibold">Higher-Order Components</h1>
      <p className="mt-2 text-slate-600">
        <code>withLoading</code> wraps a presentational card and injects loading
        UI without changing the card itself.
      </p>

      <div className="mt-8 space-y-4">
        <UserCardWithLoading
          isLoading={isLoading}
          name="Ada Lovelace"
          role="Mathematician"
        />
        <button
          type="button"
          className="border border-slate-300 px-3 py-1.5 text-sm"
          onClick={() => {
            setIsLoading(true);
            window.setTimeout(() => setIsLoading(false), 800);
          }}
        >
          Reload with loading
        </button>
      </div>
    </main>
  );
};
