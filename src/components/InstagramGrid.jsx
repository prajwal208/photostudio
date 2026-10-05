import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import photos from "../data/photos";
import PhotoImage from "./PhotoImage";

const frames = [
  photos.sunflare,
  photos.confetti,
  photos.mehndi,
  photos.fieldVeil,
  photos.portraitAmara,
  photos.goldenCouple,
  photos.blackSand,
  photos.floralArch,
  photos.desertRoad,
];

export default function InstagramGrid() {
  const href = siteConfig.instagram;

  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mb-10 flex items-end justify-between gap-6">
        <h2 className="font-serif text-[clamp(2.6rem,5vw,4.5rem)] leading-none font-medium">Follow along</h2>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="hidden border-b border-current pb-1 text-[11px] uppercase tracking-[0.24em] md:inline-flex"
          >
            Follow on Instagram
          </a>
        ) : null}
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-3 items-start gap-2 md:gap-4">
        {frames.map((frame) => {
          const image = <PhotoImage photo={frame} sizes="(min-width: 768px) 22rem, 33vw" limit="22rem" />;
          if (!href) {
            return (
              <div key={frame.alt} className="overflow-hidden">
                {image}
              </div>
            );
          }
          return (
            <a key={frame.alt} href={href} target="_blank" rel="noreferrer" aria-label="Open Instagram" className="group block overflow-hidden">
              {image}
            </a>
          );
        })}
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex border-b border-current pb-1 text-[11px] uppercase tracking-[0.24em] md:hidden"
        >
          Follow on Instagram
        </a>
      ) : (
        <p className="mt-8 text-sm text-muted">
          New work is added to the{" "}
          <Link to="/portfolio" className="border-b border-current">
            portfolio
          </Link>{" "}
          as it is finished.
        </p>
      )}
    </section>
  );
}
