import { Link } from "react-router-dom";
import PhotoImage from "./PhotoImage";
import { cn } from "../utils/cn";

export default function PortfolioCard({ story }) {
  return (
    <article className={cn("mb-8 break-inside-avoid", story.wide && "md:[column-span:all]")}>
      <Link to={`/portfolio/${story.slug}`} className="group block">
        <PhotoImage
          photo={story.cover}
          sizes={
            story.wide
              ? "100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          zoom
        />
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-3xl leading-none font-medium group-hover:opacity-70">
            {story.title}
          </h2>
          <p className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-muted">{story.year}</p>
        </div>
        <p className="mt-2 text-sm text-muted">
          {story.type}
          <span className="px-1.5">·</span>
          {story.location}
        </p>
      </Link>
    </article>
  );
}
