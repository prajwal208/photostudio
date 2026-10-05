import { Link, useLocation } from "react-router-dom";

export default function MobileInquireBar() {
  const { pathname } = useLocation();
  if (pathname === "/inquire" || pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 backdrop-blur-md md:hidden">
      <Link
        to="/inquire"
        className="flex h-14 items-center justify-between px-5 text-[11px] uppercase tracking-[0.24em]"
      >
        <span>Inquire</span>
        <span className="text-muted">Let's work together</span>
      </Link>
    </div>
  );
}
