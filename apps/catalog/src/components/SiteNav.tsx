import { Link } from "react-router-dom";
import { SiteNav as ShellNav } from "@tutorials/shell";

export const SiteNav = () => {
  return (
    <ShellNav
      variant="catalog"
      homeHref="/"
      homeAs={({ href, children, className }) => (
        <Link to={href} className={className}>
          {children}
        </Link>
      )}
    />
  );
};
