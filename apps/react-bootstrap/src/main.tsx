import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { LessonShell } from "@tutorials/shell";
import "@tutorials/shell/shell.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LessonShell title="React Bootstrap">
      <App />
    </LessonShell>
  </StrictMode>,
);
