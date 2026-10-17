export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const BASE = "https://jsonplaceholder.typicode.com";

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(`${BASE}/todos?_limit=5`);
  if (!response.ok) throw new Error("Failed to load todos");
  return response.json() as Promise<Todo[]>;
}

export async function createTodo(title: string): Promise<Todo> {
  const response = await fetch(`${BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false, userId: 1 }),
  });
  if (!response.ok) throw new Error("Failed to create todo");
  return response.json() as Promise<Todo>;
}
