import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { mobileNav } from "../data/navigation";
import useLockBody from "../hooks/useLockBody";

export default function MobileMenu({ onClose }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  useLockBody(true);

  useEffect(() => {
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-paper text-ink"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex h-full flex-col px-6 pt-24 pb-10">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-6 right-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em]"
          aria-label="Close menu"
        >
          Close
          <X size={16} strokeWidth={1.25} aria-hidden="true" />
        </button>
        <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile">
          {mobileNav.map((item, index) => (
            <motion.div
              key={item.to}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.4 }}
            >
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className="font-serif text-5xl leading-tight font-medium"
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>
        <NavLink
          to="/inquire"
          onClick={onClose}
          className="mt-auto inline-flex w-fit border-b border-ink pb-1 text-[11px] uppercase tracking-[0.28em]"
        >
          Inquire
        </NavLink>
      </div>
    </motion.div>
  );
}
