import { Link } from "react-router-dom";
import { topics } from "../topics";

export const HomePage = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
        MB React Tutorials
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
        Choose a concept
      </h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        Each lesson is a small app with only the code needed for that topic.
        Open a page for a short overview, then jump into the live demo.
      </p>

      <ul className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link
              to={`/topics/${topic.slug}`}
              className="flex flex-col gap-1 py-5 transition hover:bg-slate-50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="text-lg font-medium text-slate-900">
                {topic.title}
              </span>
              <span className="text-slate-600 sm:max-w-md sm:text-right">
                {topic.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
