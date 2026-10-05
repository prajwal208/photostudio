import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import about from "../data/about";
import photos from "../data/photos";
import PhotoImage from "./PhotoImage";
import TextLink from "./TextLink";
import MotionPhoto from "./MotionPhoto";
import MotionText from "./MotionText";

export default function AboutPreview() {
  const first = siteConfig.photographerName.split(" ")[0];

  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
        <MotionPhoto className="mx-auto w-full max-w-md md:col-span-6 md:max-w-[36rem]">
          <PhotoImage photo={photos.camera} sizes="(min-width: 768px) 36rem, 92vw" limit="40rem" />
        </MotionPhoto>
        <MotionText className="md:col-span-5 md:col-start-8" delay={0.08}>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">The photographer</p>
          <h2 className="mt-4 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] font-medium">
            Hello, I'm {first}.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">{about.intro}</p>
          <TextLink to="/about" className="mt-8">
            Read the story
          </TextLink>
          <Link to="/experience" className="mt-4 block text-sm text-muted underline-offset-4 hover:underline">
            Or see how a day together unfolds
          </Link>
        </MotionText>
      </div>
    </section>
  );
}
