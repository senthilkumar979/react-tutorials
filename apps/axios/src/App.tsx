import axios from "axios";
import { useState } from "react";
import { api, type Post } from "./api";

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState("Idle");
  const [error, setError] = useState<string | null>(null);

  async function loadPosts() {
    setStatus("Loading GET /posts…");
    setError(null);
    try {
      const { data } = await api.get<Post[]>("/posts", {
        params: { _limit: 3 },
      });
      setPosts(data);
      setStatus(`Loaded ${data.length} posts`);
    } catch (err) {
      setError(axios.isAxiosError(err) ? err.message : "Unknown error");
      setStatus("GET failed");
    }
  }

  async function createPost() {
    setStatus("Posting…");
    setError(null);
    try {
      const { data } = await api.post<Post>("/posts", {
        title: "Tutorial post",
        body: "Created from the Axios lesson",
        userId: 1,
      });
      setPosts((prev) => [data, ...prev]);
      setStatus(`Created post id ${data.id}`);
    } catch (err) {
      setError(axios.isAxiosError(err) ? err.message : "Unknown error");
      setStatus("POST failed");
    }
  }

  async function failRequest() {
    setStatus("Calling missing route…");
    setError(null);
    try {
      await api.get("/this-route-does-not-exist-404");
      setStatus("Unexpected success");
    } catch (err) {
      const message = axios.isAxiosError(err)
        ? `${err.message} (status ${err.response?.status ?? "n/a"})`
        : "Unknown error";
      setError(message);
      setStatus("Caught failed request via interceptor + catch");
    }
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <h1 className="text-3xl font-semibold">Axios</h1>
      <p className="mt-2 text-slate-600">
        Shared instance, interceptors, GET/POST, and a deliberate failure.
        Check the console for interceptor logs.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          className="bg-slate-900 px-3 py-1.5 text-sm text-white"
          onClick={loadPosts}
        >
          GET posts
        </button>
        <button
          type="button"
          className="bg-teal-800 px-3 py-1.5 text-sm text-white"
          onClick={createPost}
        >
          POST post
        </button>
        <button
          type="button"
          className="border border-red-300 px-3 py-1.5 text-sm text-red-800"
          onClick={failRequest}
        >
          Force error
        </button>
      </div>
      <p className="mt-4 text-sm text-slate-700">{status}</p>
      {error && <p className="mt-1 text-sm text-red-700">{error}</p>}
      <ul className="mt-6 space-y-3">
        {posts.map((post) => (
          <li
            key={`${post.id}-${post.title}`}
            className="rounded border border-slate-200 bg-white p-3"
          >
            <p className="font-medium">{post.title}</p>
            <p className="mt-1 text-sm text-slate-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};
