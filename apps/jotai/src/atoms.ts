import { atom } from "jotai";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const countAtom = atom(0);
export const doubleCountAtom = atom((get) => get(countAtom) * 2);
export const todosAtom = atom<Todo[]>([
  { id: 1, text: "Learn atoms", done: true },
  { id: 2, text: "Build a tiny list", done: false },
]);
