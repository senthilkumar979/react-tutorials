import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { topics } from "../topics";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export const HomePage = () => {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <main>
      <section className="relative overflow-hidden border-b border-[var(--tu-line)] bg-[var(--tu-navy)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 85% 20%, rgba(14,124,134,0.45), transparent 60%), linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.04) 41%, transparent 41%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
          <motion.p
            className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.05 }}
          >
            MB React Tutorials
          </motion.p>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.14 }}
          >
            Corporate-ready React lessons for training teams and self-paced
            learners. One focused app per concept — clear, reusable, production
            deployable.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.22 }}
          >
            <a
              href="#lessons"
              className="inline-flex items-center bg-[var(--tu-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--tu-accent-hover)]"
            >
              Browse lessons
            </a>
            <span className="text-sm text-white/55">
              {topics.length} concepts · same-tab demos · one Vercel deploy
            </span>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[var(--tu-line)] bg-[var(--tu-paper-elevated)]/70">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10 sm:grid-cols-3 sm:gap-6 sm:py-12">
          {[
            {
              title: "Focused codebases",
              body: "Each lesson is a small Vite app with only the dependencies that concept needs.",
            },
            {
              title: "Built for trainers",
              body: "Open a topic page for the why, then jump into a live demo learners can clone and reuse.",
            },
            {
              title: "Ship once",
              body: "One monorepo, one production URL — catalog plus every lesson under path prefixes.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ ...transition, delay: i * 0.06 }}
            >
              <h2 className="font-display text-lg font-semibold tracking-tight text-[var(--tu-navy)]">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--tu-muted)]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="lessons" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--tu-accent)] uppercase">
            Curriculum
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--tu-navy)] sm:text-4xl">
            Choose a concept
          </h2>
          <p className="mt-3 text-[var(--tu-muted)]">
            Read a short briefing, then open the lesson in the same tab.
          </p>
        </div>

        <motion.ul
          className="mt-12 border-t border-[var(--tu-line)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.045 },
            },
          }}
        >
          {topics.map((topic, index) => (
            <motion.li
              key={topic.slug}
              variants={fadeUp}
              transition={transition}
              className="border-b border-[var(--tu-line)]"
            >
              <Link
                to={`/topics/${topic.slug}`}
                className="group flex items-start gap-4 py-6 transition sm:items-center sm:gap-8 sm:py-7"
              >
                <span className="w-9 shrink-0 pt-1 font-mono text-xs tabular-nums text-[var(--tu-muted-soft)] sm:pt-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-display text-xl font-semibold tracking-tight text-[var(--tu-navy)] transition group-hover:text-[var(--tu-accent)] sm:text-2xl">
                      {topic.title}
                    </span>
                    <span className="text-sm font-medium text-[var(--tu-accent)] opacity-0 transition group-hover:opacity-100">
                      View topic →
                    </span>
                  </span>
                  <span className="mt-1.5 block max-w-2xl text-sm leading-relaxed text-[var(--tu-muted)] sm:text-base">
                    {topic.summary}
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-10 text-sm text-[var(--tu-muted-soft)]">
          {topics.length} lessons · reusable for workshops and self-study
        </p>
      </section>
    </main>
  );
};
