import { useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion } from "../lib/motion";

export default function MotionPhoto({ children, className = "", parallax = 5 }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner || reducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(wrap, {
        opacity: 0,
        y: 36,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top 88%",
        },
      });

      gsap.fromTo(
        inner,
        { yPercent: parallax },
        {
          yPercent: -parallax,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, wrap);

    return () => ctx.revert();
  }, [parallax]);

  return (
    <div ref={wrapRef} className={className}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
