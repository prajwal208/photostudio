import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

export default function TextLink({ to, href, children, className = "", external = false }) {
  const classes = cn(
    "inline-flex items-center gap-3 border-b border-current pb-1 text-[11px] uppercase tracking-[0.28em] transition-opacity duration-300 hover:opacity-60",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
