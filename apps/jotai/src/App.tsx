import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { countAtom, doubleCountAtom, todosAtom } from "./atoms";

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  const doubled = useAtomValue(doubleCountAtom);

  return (
    <section className="rounded border border-slate-200 bg-white p-5">
      <h2 className="font-medium">Counter atom</h2>
      <p className="mt-2 text-3xl font-semibold tabular-nums">{count}</p>
      <p className="text-sm text-slate-600">
        Derived <code>doubleCountAtom</code>: {doubled}
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="bg-slate-900 px-3 py-1.5 text-sm text-white"
          onClick={() => setCount((value) => value + 1)}
        >
          Increment
        </button>
        <button
          type="button"
          className="border border-slate-300 px-3 py-1.5 text-sm"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

const TodoList = () => {
  const todos = useAtomValue(todosAtom);
  const setTodos = useSetAtom(todosAtom);
  const [text, setText] = useState("");

  function addTodo() {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setText("");
  }

  return (
    <section className="rounded border border-slate-200 bg-white p-5">
      <h2 className="font-medium">Todos atom</h2>
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 border border-slate-300 px-3 py-1.5"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="New todo"
        />
        <button
          type="button"
          className="bg-emerald-700 px-3 py-1.5 text-sm text-white"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() =>
                setTodos((prev) =>
                  prev.map((item) =>
                    item.id === todo.id ? { ...item, done: !item.done } : item,
                  ),
                )
              }
            />
            <span className={todo.done ? "text-slate-400 line-through" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const App = () => (
  <main className="mx-auto max-w-xl space-y-6 px-6 py-10">
    <h1 className="text-3xl font-semibold">Jotai</h1>
    <p className="text-slate-600">
      Atoms hold state. Components subscribe only to what they read.
    </p>
    <Counter />
    <TodoList />
  </main>
);
