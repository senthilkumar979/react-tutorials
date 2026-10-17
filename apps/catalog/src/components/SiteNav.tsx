import { Link, NavLink } from "react-router-dom";

export const SiteNav = () => {
  return (
    <header className="animate-nav border-b border-[var(--line)] bg-[var(--paper-elevated)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-[var(--ink)] transition hover:text-[var(--accent)]"
        >
          MB React Tutorials
        </Link>
        <nav aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                "text-sm font-medium transition",
                isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)] hover:text-[var(--ink)]",
              ].join(" ")
            }
          >
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
