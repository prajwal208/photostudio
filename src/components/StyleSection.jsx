import homeContent from "../data/home";
import photos from "../data/photos";
import PhotoImage from "./PhotoImage";
import MotionPhoto from "./MotionPhoto";
import MotionText from "./MotionText";

export default function StyleSection() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <MotionText>
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted">The photographs</p>
      </MotionText>
      <div className="mt-8 border-t border-line">
        {homeContent.styles.map((style, index) => (
          <article key={style.title} className="grid items-center gap-8 border-b border-line py-10 md:grid-cols-12 md:gap-6 md:py-14">
            <MotionText className="md:col-span-4" delay={index * 0.02}>
              <h2 className="font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-none font-medium">{style.title}</h2>
            </MotionText>
            <MotionText className="md:col-span-4" delay={0.06}>
              <p className="max-w-xs text-lg leading-relaxed text-muted">{style.text}</p>
            </MotionText>
            <MotionPhoto className="mx-auto w-full max-w-[20rem] md:col-span-4 md:max-w-[24rem] md:justify-self-end">
              <PhotoImage photo={photos[style.photoKey]} sizes="(min-width: 768px) 24rem, 70vw" limit="36rem" />
            </MotionPhoto>
          </article>
        ))}
      </div>
    </section>
  );
}
