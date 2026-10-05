import { useMemo, useState } from "react";
import portfolio, { categories } from "../data/portfolio";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const stories = useMemo(() => {
    if (active === "All") return portfolio;
    return portfolio.filter((story) => story.category === active);
  }, [active]);

  return (
    <div>
      <div className="mb-12 flex gap-x-5 gap-y-3 overflow-x-auto pb-2 md:flex-wrap" role="toolbar" aria-label="Filter stories">
        {categories.map((category) => {
          const selected = category === active;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category)}
              className={`shrink-0 text-[11px] uppercase tracking-[0.22em] transition-opacity ${
                selected ? "border-b border-ink pb-1 opacity-100" : "opacity-45 hover:opacity-80"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {stories.length === 0 ? (
        <p className="max-w-md py-16 font-serif text-3xl leading-snug">
          This chapter is still being finished. If it is the kind of day you are planning, inquire and tell me.
        </p>
      ) : (
        <div className="columns-1 gap-x-6 sm:columns-2 lg:columns-3">
          {stories.map((story) => (
            <PortfolioCard key={story.slug} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}
