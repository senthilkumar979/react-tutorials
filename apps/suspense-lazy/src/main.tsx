import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LessonShell } from "@tutorials/shell";
import "@tutorials/shell/shell.css";
import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LessonShell title="Suspense + Lazy">
      <App />
    </LessonShell>
  </StrictMode>,
);
