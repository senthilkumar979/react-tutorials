import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TopicPage } from "./pages/TopicPage";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const App = () => {
  return (
    <BrowserRouter basename={basename === "/" ? undefined : basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics/:slug" element={<TopicPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
