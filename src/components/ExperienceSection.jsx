import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import experienceSteps from "../data/experience";
import TextLink from "./TextLink";
import { gsap, reducedMotion } from "../lib/motion";

export default function ExperienceSection({ detailed = false }) {
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || reducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(list.querySelectorAll("li"), {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: list,
          start: "top 85%",
        },
      });
    }, list);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted">The experience</p>
        <h2 className="mt-4 font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.92] font-medium">
          Your story,
          <br />
          intentionally documented.
        </h2>
      </div>

      <ol ref={listRef} className="mt-14 border-t border-line">
        {experienceSteps.map((step) => (
          <li key={step.number} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:py-10">
            <p className="text-[11px] tracking-[0.22em] text-muted md:col-span-2">{step.number}</p>
            <h3 className="font-serif text-3xl font-medium md:col-span-4 md:text-4xl">{step.title}</h3>
            <div className="md:col-span-6">
              <p className="text-base leading-relaxed text-muted">{detailed ? step.body : step.summary}</p>
            </div>
          </li>
        ))}
      </ol>

      {detailed ? (
        <div className="mt-12">
          <TextLink to="/inquire">Begin with an inquiry</TextLink>
        </div>
      ) : (
        <div className="mt-10">
          <Link to="/experience" className="text-[11px] uppercase tracking-[0.28em] border-b border-current pb-1">
            The full experience
          </Link>
        </div>
      )}
    </section>
  );
}
