import { Link, useParams } from "react-router-dom";
import portfolio, { getAdjacentStory, getStory } from "../data/portfolio";
import siteConfig from "../config/siteConfig";
import Seo from "../components/Seo";
import PhotoImage from "../components/PhotoImage";
import StoryGallery, { StoryLink } from "../components/StoryGallery";
import ClosingCta from "../components/ClosingCta";
import { breadcrumbSchema, imageObjectSchema } from "../utils/schema";

export default function PortfolioStory() {
  const { slug } = useParams();
  const story = getStory(slug);

  if (!story) {
    return (
      <article className="px-5 pt-36 pb-24 md:px-10">
        <Seo title="Story not found" path={`/portfolio/${slug || ""}`} description="This story is not in the portfolio." />
        <h1 className="font-serif text-5xl font-medium">This story has moved.</h1>
        <Link to="/portfolio" className="mt-8 inline-flex border-b border-current pb-1 text-[11px] uppercase tracking-[0.24em]">
          Back to the portfolio
        </Link>
      </article>
    );
  }

  const sequence = story.images.filter((image) => image.src !== story.cover.src);
  const closing = sequence.length ? sequence[sequence.length - 1] : null;
  const gallery = sequence.length > 1 ? sequence.slice(0, -1) : [];
  const next = getAdjacentStory(story.slug);
  const description = `${story.title}, ${story.type.toLowerCase()} in ${story.location}. ${story.description}`;

  return (
    <article>
      <Seo
        title={`${story.title} — ${story.location}`}
        description={description}
        path={`/portfolio/${story.slug}`}
        image={story.cover.src}
        type="article"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: story.title, path: `/portfolio/${story.slug}` },
          ]),
          imageObjectSchema(story.cover, `${story.title}, ${story.location}`),
        ]}
      />

      <header className="relative h-[100svh] min-h-[560px] bg-night text-paper">
        <PhotoImage photo={story.cover} fill priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-night/20" />
        <div className="absolute right-5 bottom-8 left-5 md:right-10 md:bottom-10 md:left-10">
          <p className="text-[11px] uppercase tracking-[0.28em]">
            {story.type}
            <span className="px-2 opacity-60">/</span>
            {story.location}
            <span className="px-2 opacity-60">/</span>
            {story.year}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
          <Link to="/portfolio" className="hover:text-ink">
            Portfolio
          </Link>
        </p>
        <h1 className="mt-6 font-serif text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.9] font-medium">{story.title}</h1>
        <p className="mt-6 text-sm tracking-[0.16em] uppercase">
          {story.location}
          <span className="px-2 text-muted">/</span>
          {story.date}
        </p>
        <p className="mt-10 font-serif text-2xl leading-snug italic md:text-3xl">{story.description}</p>
        <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">{story.story}</p>
      </div>

      {gallery.length > 0 ? <StoryGallery images={gallery} /> : null}

      <section className="px-5 py-16 md:px-10 md:py-24">
        <dl className="grid gap-10 border-t border-line pt-10 md:grid-cols-3">
          {story.details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-muted">{detail.label}</dt>
              <dd className="mt-3 font-serif text-3xl font-medium">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {closing ? (
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <PhotoImage photo={closing} sizes="(min-width: 768px) 72rem, 100vw" limit="42rem" />
        </div>
      ) : null}

      <div className="px-5 md:px-10">
        <StoryLink story={next?.slug === story.slug ? null : next} />
      </div>

      <ClosingCta />
      <p className="sr-only">
        Photographed by {siteConfig.photographerName}. {portfolio.length} stories in the portfolio.
      </p>
    </article>
  );
}
