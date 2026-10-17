import { Navigate, useParams } from "react-router-dom";
import { accentVar, getTopic, lessonUrl } from "../topics";

const sections = [
  { key: "what" as const, label: "What it is" },
  { key: "when" as const, label: "When to use it" },
  { key: "demo" as const, label: "What the demo shows" },
];

export const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopic(slug) : undefined;

  if (!topic) return <Navigate to="/" replace />;

  const href = lessonUrl(topic);
  const accent = accentVar[topic.accent];

  return (
    <main className="animate-content mx-auto max-w-2xl px-6 pb-24 pt-12 sm:pt-16">
      <div
        className="mb-8 h-1.5 w-16 rounded-sm"
        style={{ backgroundColor: accent }}
        aria-hidden
      />

      <p
        className="text-xs font-semibold tracking-[0.18em] uppercase"
        style={{ color: accent }}
      >
        Concept
      </p>

      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
        {topic.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
        {topic.summary}
      </p>

      <div className="mt-14 space-y-12 border-t border-[var(--line)] pt-12">
        {sections.map((section) => (
          <section key={section.key}>
            <h2
              className="text-xs font-semibold tracking-[0.16em] uppercase"
              style={{ color: accent }}
            >
              {section.label}
            </h2>
            <p className="mt-3 text-base leading-[1.75] text-[var(--ink-soft)] sm:text-lg">
              {topic[section.key]}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-[var(--line)] pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          Opens the focused demo for this concept.
        </p>
        <a
          href={href}
          className="cta-lesson inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          Open lesson
          <span aria-hidden className="ml-2">
            →
          </span>
        </a>
      </div>
    </main>
  );
};
