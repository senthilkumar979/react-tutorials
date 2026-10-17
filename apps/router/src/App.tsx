import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "font-semibold text-teal-800" : "text-slate-600 hover:text-slate-900";

const Layout = () => (
  <div className="mx-auto max-w-3xl px-6 py-10">
    <header className="border-b border-slate-200 pb-4">
      <h1 className="text-2xl font-semibold text-slate-900">React Router</h1>
      <nav className="mt-4 flex flex-wrap gap-4 text-sm">
        <NavLink to="/" end className={navClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/users" className={navClass}>
          Users
        </NavLink>
        <NavLink to="/search?q=react" className={navClass}>
          Search
        </NavLink>
      </nav>
    </header>
    <div className="mt-8">
      <Outlet />
    </div>
  </div>
);

const Home = () => (
  <section>
    <h2 className="text-xl font-medium">Home</h2>
    <p className="mt-2 text-slate-600">
      This lesson shows nested routes, dynamic params, and search params.
    </p>
  </section>
);

const About = () => (
  <section>
    <h2 className="text-xl font-medium">About</h2>
    <p className="mt-2 text-slate-600">A static route with no params.</p>
  </section>
);

const UsersLayout = () => (
  <section>
    <h2 className="text-xl font-medium">Users</h2>
    <ul className="mt-3 list-disc space-y-1 pl-5 text-teal-800">
      <li>
        <Link to="1">Ada Lovelace</Link>
      </li>
      <li>
        <Link to="2">Grace Hopper</Link>
      </li>
    </ul>
    <div className="mt-6 rounded border border-slate-200 bg-white p-4">
      <Outlet />
    </div>
  </section>
);

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <p>
      Dynamic segment <code className="rounded bg-slate-100 px-1">:id</code> ={" "}
      <strong>{id}</strong>
    </p>
  );
};

const UsersIndex = () => (
  <p className="text-slate-600">Pick a user to see the nested detail route.</p>
);

const SearchPage = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";

  return (
    <section>
      <h2 className="text-xl font-medium">Search</h2>
      <input
        className="mt-3 w-full max-w-sm border border-slate-300 px-3 py-2"
        value={q}
        onChange={(event) => setParams({ q: event.target.value })}
        placeholder="Type a query"
      />
      <p className="mt-3 text-slate-600">
        Current <code>?q=</code> value: <strong>{q || "(empty)"}</strong>
      </p>
    </section>
  );
};

export const App = () => (
  <BrowserRouter basename={basename === "/" ? undefined : basename}>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<UsersLayout />}>
          <Route index element={<UsersIndex />} />
          <Route path=":id" element={<UserDetail />} />
        </Route>
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
