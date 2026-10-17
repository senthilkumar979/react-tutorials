import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { createTodo, fetchTodos } from "./api";

const queryClient = new QueryClient();

const TodoDemo = () => {
  const client = useQueryClient();
  const [title, setTitle] = useState("");
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      void client.invalidateQueries({ queryKey: ["todos"] });
      setTitle("");
    },
  });

  return (
    <section className="mt-8 space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 border border-slate-300 px-3 py-2"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="New todo title"
        />
        <button
          type="button"
          className="bg-slate-900 px-3 py-2 text-sm text-white disabled:opacity-50"
          disabled={!title.trim() || mutation.isPending}
          onClick={() => mutation.mutate(title.trim())}
        >
          Create
        </button>
      </div>

      {todosQuery.isLoading && <p>Loading…</p>}
      {todosQuery.isError && (
        <p className="text-red-700">{(todosQuery.error as Error).message}</p>
      )}
      {mutation.isError && (
        <p className="text-red-700">{(mutation.error as Error).message}</p>
      )}

      <ul className="space-y-2">
        {todosQuery.data?.map((todo) => (
          <li
            key={todo.id}
            className="rounded border border-slate-200 bg-white px-3 py-2 text-sm"
          >
            {todo.title}
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500">
        After create, the list query is invalidated and refetched with fetch.
      </p>
    </section>
  );
};

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <main className="mx-auto max-w-xl px-6 py-10">
      <h1 className="text-3xl font-semibold">TanStack Query</h1>
      <p className="mt-2 text-slate-600">
        useQuery for reads, useMutation + invalidateQueries for writes.
      </p>
      <TodoDemo />
    </main>
  </QueryClientProvider>
);
