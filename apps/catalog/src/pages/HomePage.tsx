import { Link } from "react-router-dom";
import { topics } from "../topics";

export const HomePage = () => {
  return (
    <main className="animate-content mx-auto max-w-5xl px-6 pb-20 pt-14 sm:pt-20">
      <section className="max-w-3xl">
        <p className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
          MB React Tutorials
        </p>
        <h1 className="mt-5 text-lg font-medium text-[var(--ink-soft)] sm:text-xl">
          Learn one concept at a time
        </h1>
        <p className="mt-3 max-w-xl text-[var(--muted)] leading-relaxed">
          Each lesson is a small, focused app — open a topic for the why, then
          step into the live demo.
        </p>
      </section>

      <ul className="mt-14 border-t border-[var(--line)]">
        {topics.map((topic, index) => (
          <li key={topic.slug}>
            <Link
              to={`/topics/${topic.slug}`}
              className="topic-row group flex items-baseline gap-4 py-6 sm:gap-8 sm:py-7"
            >
              <span className="w-8 shrink-0 font-mono text-sm tabular-nums text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <span className="font-display text-xl font-semibold tracking-tight text-[var(--ink)] transition group-hover:text-[var(--accent)] sm:text-2xl">
                    {topic.title}
                  </span>
                  <span
                    aria-hidden
                    className="topic-arrow hidden text-[var(--accent)] sm:inline"
                  >
                    →
                  </span>
                </span>
                <span className="mt-1.5 block max-w-2xl text-[var(--muted)] leading-relaxed">
                  {topic.summary}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-[var(--muted)]">
        {topics.length} focused lessons
      </p>
    </main>
  );
};
