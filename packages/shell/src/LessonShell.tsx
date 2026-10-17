import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";

interface LessonShellProps {
  children: ReactNode;
  title?: string;
}

export const LessonShell = ({ children, title }: LessonShellProps) => {
  return (
    <div className="tu-lesson-frame">
      <SiteNav variant="lesson" />
      {title ? (
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "1rem 1.5rem 0",
            fontFamily: "var(--tu-font-body)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--tu-accent)",
            }}
          >
            Lesson · {title}
          </p>
        </div>
      ) : null}
      {children}
    </div>
  );
};
