import { Link, Navigate, useParams } from "react-router-dom";
import { getTopic, lessonUrl } from "../topics";

export const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopic(slug) : undefined;

  if (!topic) return <Navigate to="/" replace />;

  const href = lessonUrl(topic);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        to="/"
        className="text-sm font-medium text-slate-500 hover:text-slate-800"
      >
        ← All topics
      </Link>

      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900">
        {topic.title}
      </h1>
      <p className="mt-3 text-lg text-slate-600">{topic.summary}</p>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            What it is
          </h2>
          <p className="mt-2 text-slate-800 leading-relaxed">{topic.what}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            When to use it
          </h2>
          <p className="mt-2 text-slate-800 leading-relaxed">{topic.when}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            What the demo shows
          </h2>
          <p className="mt-2 text-slate-800 leading-relaxed">{topic.demo}</p>
        </div>
      </section>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-12 inline-flex items-center justify-center bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Open lesson
      </a>
    </main>
  );
};
