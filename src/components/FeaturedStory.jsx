import { Link } from "react-router-dom";
import PhotoImage from "./PhotoImage";
import TextLink from "./TextLink";
import MotionPhoto from "./MotionPhoto";
import MotionText from "./MotionText";

function Meta({ story, light = false }) {
  return (
    <div className={light ? "text-paper" : "text-ink"}>
      <p className="text-[11px] uppercase tracking-[0.28em] opacity-80">{story.type}</p>
      <h3 className="mt-4 font-serif text-[clamp(2.4rem,4vw,4.2rem)] leading-[0.95] font-medium">
        <Link to={`/portfolio/${story.slug}`} className="hover:opacity-70">
          {story.title}
        </Link>
      </h3>
      <p className="mt-4 text-sm tracking-wide">
        {story.location}
        <span className="px-2 opacity-50">/</span>
        {story.year}
      </p>
      <p className="mt-5 max-w-sm text-base leading-relaxed opacity-80">{story.description}</p>
      <TextLink to={`/portfolio/${story.slug}`} className="mt-8">
        View story
      </TextLink>
    </div>
  );
}

function Split({ story, imageFirst }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
      <MotionPhoto
        className={`mx-auto w-full max-w-md md:max-w-[36rem] ${imageFirst ? "md:col-span-7" : "md:col-span-7 md:col-start-6 md:row-start-1"}`}
      >
        <Link to={`/portfolio/${story.slug}`} className="group block">
          <PhotoImage photo={story.cover} sizes="(min-width: 768px) 36rem, 92vw" zoom limit="50rem" />
        </Link>
      </MotionPhoto>
      <MotionText
        className={imageFirst ? "md:col-span-5 md:col-start-8" : "md:col-span-5 md:col-start-1 md:row-start-1"}
        delay={0.08}
      >
        <Meta story={story} />
      </MotionText>
    </article>
  );
}

function Full({ story }) {
  return (
    <article>
      <MotionPhoto className="mx-auto w-full max-w-5xl" parallax={4}>
        <Link to={`/portfolio/${story.slug}`} className="group block">
          <PhotoImage photo={story.cover} sizes="(min-width: 768px) 64rem, 100vw" zoom limit="44rem" />
        </Link>
      </MotionPhoto>
      <MotionText>
        <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">{story.type}</p>
            <h3 className="mt-3 font-serif text-[clamp(2.4rem,4vw,4rem)] leading-none font-medium">
              <Link to={`/portfolio/${story.slug}`}>{story.title}</Link>
            </h3>
          </div>
          <div className="md:text-right">
            <p className="text-sm">
              {story.location}
              <span className="px-2 text-muted">/</span>
              {story.year}
            </p>
            <TextLink to={`/portfolio/${story.slug}`} className="mt-4">
              View story
            </TextLink>
          </div>
        </div>
      </MotionText>
    </article>
  );
}

function Overlap({ story }) {
  return (
    <article>
      <MotionPhoto className="ml-auto w-full max-w-3xl" parallax={4}>
        <Link to={`/portfolio/${story.slug}`} className="group block">
          <PhotoImage photo={story.cover} sizes="(min-width: 768px) 48rem, 100vw" zoom limit="46rem" />
        </Link>
      </MotionPhoto>
      <MotionText className="relative z-10 -mt-6 w-full bg-paper px-1 py-8 md:-mt-10 md:w-[46%] md:py-10 md:pr-10">
        <Meta story={story} />
      </MotionText>
    </article>
  );
}

export default function FeaturedStory({ story, layout = "split-left" }) {
  if (layout === "full") return <Full story={story} />;
  if (layout === "overlap") return <Overlap story={story} />;
  return <Split story={story} imageFirst={layout !== "split-right"} />;
}
