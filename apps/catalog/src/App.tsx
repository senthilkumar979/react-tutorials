import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { SiteNav } from "./components/SiteNav";
import { HomePage } from "./pages/HomePage";
import { TopicPage } from "./pages/TopicPage";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const AppLayout = () => (
  <div className="flex min-h-screen flex-col">
    <SiteNav />
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
);

export const App = () => {
  return (
    <BrowserRouter basename={basename === "/" ? undefined : basename}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/topics/:slug" element={<TopicPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
