import { useLayoutEffect, useRef } from "react";
import siteConfig from "../config/siteConfig";
import homeContent from "../data/home";
import photos from "../data/photos";
import PhotoImage from "./PhotoImage";
import TextLink from "./TextLink";
import { gsap, reducedMotion } from "../lib/motion";

export default function Hero() {
  const rootRef = useRef(null);
  const mediaRef = useRef(null);
  const zoomRef = useRef(null);
  const scrollCopyRef = useRef(null);
  const enterCopyRef = useRef(null);
  const lineRef = useRef(null);
  const { hero } = homeContent;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(zoomRef.current, { scale: 1.14 }, { scale: 1, duration: 2.6, ease: "power2.out" });

      gsap.from(enterCopyRef.current, {
        y: 32,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0.15 },
        {
          scaleY: 1,
          duration: 1.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "top center",
        },
      );

      gsap.to(mediaRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(scrollCopyRef.current, {
        y: -72,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-night text-paper">
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <div ref={zoomRef} className="absolute inset-x-0 -top-[14%] h-[128%] origin-center will-change-transform">
          <PhotoImage photo={photos.sunflare} alt={photos.sunflare.alt} fill priority sizes="100vw" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/15 to-night/25" />

      <div ref={scrollCopyRef} className="relative z-10 flex h-full flex-col justify-end px-5 pb-24 md:px-10 md:pb-16">
        <div ref={enterCopyRef}>
          <p className="text-[11px] uppercase tracking-[0.28em]">Based in {siteConfig.city}</p>
          {siteConfig.availableWorldwide ? (
            <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-paper/75">Available worldwide</p>
          ) : null}

          <h1 className="mt-8 max-w-5xl font-serif text-[clamp(3.1rem,8vw,7.2rem)] leading-[0.9] font-medium">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-paper/85">{hero.support}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <TextLink to="/portfolio">Explore the portfolio</TextLink>
            <TextLink to="/inquire">Inquire</TextLink>
          </div>
        </div>
      </div>

      <div className="absolute right-5 bottom-24 hidden flex-col items-center gap-3 md:right-10 md:bottom-8 md:flex">
        <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
        <span ref={lineRef} className="block h-16 w-px origin-top bg-paper/70" />
      </div>
    </section>
  );
}
