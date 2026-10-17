import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "font-semibold text-teal-800"
    : "text-slate-600 hover:text-slate-900";

interface DemoRoutesProps {
  showUrlHint?: boolean;
}

const Layout = ({ showUrlHint }: DemoRoutesProps) => {
  const location = useLocation();

  return (
    <div className="rounded border border-slate-200 bg-white p-4">
      <nav className="flex flex-wrap gap-3 border-b border-slate-100 pb-3 text-sm">
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
      {showUrlHint && (
        <p className="mt-3 rounded bg-slate-50 px-2 py-1.5 font-mono text-xs text-slate-600">
          location: {location.pathname}
          {location.search}
        </p>
      )}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

const Home = () => (
  <section>
    <h3 className="font-medium">Home</h3>
    <p className="mt-1 text-sm text-slate-600">Nested routes and params demo.</p>
  </section>
);

const About = () => (
  <section>
    <h3 className="font-medium">About</h3>
    <p className="mt-1 text-sm text-slate-600">A static route.</p>
  </section>
);

const UsersLayout = () => (
  <section>
    <h3 className="font-medium">Users</h3>
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-teal-800">
      <li>
        <Link to="1">Ada Lovelace</Link>
      </li>
      <li>
        <Link to="2">Grace Hopper</Link>
      </li>
    </ul>
    <div className="mt-3 rounded border border-slate-100 bg-slate-50 p-3 text-sm">
      <Outlet />
    </div>
  </section>
);

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <p>
      <code className="rounded bg-white px-1">:id</code> = <strong>{id}</strong>
    </p>
  );
};

const UsersIndex = () => (
  <p className="text-slate-600">Pick a user for the nested detail route.</p>
);

const SearchPage = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";

  return (
    <section>
      <h3 className="font-medium">Search</h3>
      <input
        className="mt-2 w-full border border-slate-300 px-2 py-1.5 text-sm"
        value={q}
        onChange={(event) => setParams({ q: event.target.value })}
        placeholder="Type a query"
      />
      <p className="mt-2 text-sm text-slate-600">
        <code>?q=</code> <strong>{q || "(empty)"}</strong>
      </p>
    </section>
  );
};

export const DemoRoutes = ({ showUrlHint = false }: DemoRoutesProps) => (
  <Routes>
    <Route element={<Layout showUrlHint={showUrlHint} />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="users" element={<UsersLayout />}>
        <Route index element={<UsersIndex />} />
        <Route path=":id" element={<UserDetail />} />
      </Route>
      <Route path="search" element={<SearchPage />} />
    </Route>
  </Routes>
);
