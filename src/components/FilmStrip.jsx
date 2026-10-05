import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import photos from "../data/photos";
import PhotoImage from "./PhotoImage";
import { gsap, reducedMotion, ScrollTrigger } from "../lib/motion";

const frames = [
  { photo: photos.blackSand, to: "/portfolio/mara-jon-iceland", label: "Iceland" },
  { photo: photos.floralArch, to: "/portfolio/jessica-michael-goa", label: "Goa" },
  { photo: photos.goldenCouple, to: "/portfolio/anna-daniel-bali", label: "Bali" },
  { photo: photos.mandapOutdoor, to: "/portfolio/leela-arjun-jaipur", label: "Jaipur" },
  { photo: photos.sunset, to: "/portfolio/nora-elias-comporta", label: "Comporta" },
  { photo: photos.lake, to: "/portfolio/maya-rohan-tuscany", label: "Tuscany" },
];

export default function FilmStrip() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || reducedMotion()) return undefined;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 64),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=110%",
          scrub: 0.75,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const refresh = () => ScrollTrigger.refresh();
      const images = track.querySelectorAll("img");
      images.forEach((image) => image.addEventListener("load", refresh));

      return () => {
        images.forEach((image) => image.removeEventListener("load", refresh));
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center py-16 md:h-[100svh] md:py-0"
    >
      <div className="mb-8 flex items-end justify-between gap-6 px-5 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted">From the work</p>
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted md:hidden">Swipe</p>
      </div>
      <div className="max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto md:overflow-hidden">
        <div ref={trackRef} className="flex w-max items-start gap-3 px-5 md:gap-6 md:px-10">
          {frames.map((frame) => (
            <Link
              key={frame.label}
              to={frame.to}
              className="group w-[82vw] shrink-0 snap-start md:w-[38vw]"
            >
              <PhotoImage photo={frame.photo} sizes="(min-width: 768px) 38vw, 82vw" zoom />
              <span className="mt-3 block text-[11px] uppercase tracking-[0.22em] text-muted transition-opacity group-hover:opacity-60">
                {frame.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
