import { useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion } from "../lib/motion";

export default function MotionText({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 28,
        duration: 1.05,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
