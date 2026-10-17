import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();

  if (!topic) return <Navigate to="/" replace />;

  const href = lessonUrl(topic);
  const accent = accentVar[topic.accent];
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-12 sm:pt-16">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div
          className="mb-8 h-1 w-14"
          style={{ backgroundColor: accent }}
          aria-hidden
        />

        <p
          className="text-xs font-semibold tracking-[0.16em] uppercase"
          style={{ color: accent }}
        >
          Concept briefing
        </p>

        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--tu-navy)] sm:text-5xl">
          {topic.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--tu-muted)] sm:text-xl">
          {topic.summary}
        </p>
      </motion.div>

      <motion.div
        className="mt-14 space-y-12 border-t border-[var(--tu-line)] pt-12"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.08 }}
      >
        {sections.map((section) => (
          <section key={section.key}>
            <h2
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: accent }}
            >
              {section.label}
            </h2>
            <p className="mt-3 text-base leading-[1.75] text-[var(--tu-ink)] sm:text-lg">
              {topic[section.key]}
            </p>
          </section>
        ))}
      </motion.div>

      <motion.div
        className="mt-14 flex flex-col gap-4 border-t border-[var(--tu-line)] pt-10 sm:flex-row sm:items-center sm:justify-between"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.14 }}
      >
        <p className="text-sm text-[var(--tu-muted)]">
          Continues in the same tab into the focused demo.
        </p>
        <a
          href={href}
          className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
          style={{ backgroundColor: accent }}
        >
          Open lesson
          <span aria-hidden className="ml-2">
            →
          </span>
        </a>
      </motion.div>
    </main>
  );
};
