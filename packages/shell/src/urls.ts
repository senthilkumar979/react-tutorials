/** Catalog origin: localhost in dev, same-origin root in production. */
export function catalogHomeUrl(): string {
  if (import.meta.env.DEV) return "http://localhost:5173/";
  return "/";
}

export function catalogTopicsUrl(): string {
  if (import.meta.env.DEV) return "http://localhost:5173/#lessons";
  return "/#lessons";
}
