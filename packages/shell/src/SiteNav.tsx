import type { ReactNode } from "react";
import { catalogHomeUrl, catalogTopicsUrl } from "./urls";

interface SiteNavProps {
  /** When true, Home uses in-app navigation via `homeHref` (catalog SPA). */
  variant?: "catalog" | "lesson";
  homeHref?: string;
  homeAs?: (props: { href: string; children: ReactNode; className?: string }) => ReactNode;
}

export const SiteNav = ({
  variant = "lesson",
  homeHref = "/",
  homeAs,
}: SiteNavProps) => {
  const home =
    variant === "catalog"
      ? homeHref
      : catalogHomeUrl();
  const topics =
    variant === "catalog" ? "/#lessons" : catalogTopicsUrl();

  const brandClass = "tu-nav__brand";
  const linkClass = "tu-nav__link";

  const Brand = homeAs ? (
    homeAs({ href: home, className: brandClass, children: "MB React Tutorials" })
  ) : (
    <a className={brandClass} href={home}>
      MB React Tutorials
    </a>
  );

  const HomeLink = homeAs ? (
    homeAs({ href: home, className: linkClass, children: "Home" })
  ) : (
    <a className={linkClass} href={home}>
      Home
    </a>
  );

  return (
    <header className="tu-nav">
      <div className="tu-nav__inner">
        {Brand}
        <nav className="tu-nav__links" aria-label="Primary">
          {HomeLink}
          <a className={`${linkClass} tu-nav__link--accent`} href={topics}>
            Lessons
          </a>
        </nav>
      </div>
    </header>
  );
};
