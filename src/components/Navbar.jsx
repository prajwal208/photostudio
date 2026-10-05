import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import siteConfig from "../config/siteConfig";
import { mainNav } from "../data/navigation";
import useScrolled from "../hooks/useScrolled";
import MobileMenu from "./MobileMenu";
import { cn } from "../utils/cn";

function usesLightNav(pathname) {
  if (pathname === "/") return true;
  return pathname.startsWith("/portfolio/") && pathname !== "/portfolio";
}

export default function Navbar() {
  const { pathname } = useLocation();
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const light = usesLightNav(pathname) && !scrolled && !open;

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        open ? "pointer-events-none opacity-0" : scrolled ? "bg-paper/95 text-ink backdrop-blur-md" : "bg-transparent",
        !open && light ? "text-paper" : "text-ink",
      )}
    >
      <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-10">
        <Link to="/" className="font-serif text-[1.7rem] leading-none italic font-medium tracking-tight">
          {siteConfig.logoImage ? (
            <img src={siteConfig.logoImage} alt={siteConfig.brandName} className="h-8 w-auto" />
          ) : (
            siteConfig.brandName
          )}
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-[11px] uppercase tracking-[0.24em] transition-opacity",
                  isActive ? "opacity-100" : "opacity-60 hover:opacity-100",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/inquire"
            className="hidden border border-current px-4 py-2 text-[11px] uppercase tracking-[0.24em] lg:inline-flex"
          >
            Inquire
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={18} strokeWidth={1.25} aria-hidden="true" />
            <span>Menu</span>
          </button>
        </div>
      </div>
    </header>
    <div id="mobile-menu">
      <AnimatePresence>
        {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
      </AnimatePresence>
    </div>
    </>
  );
}
