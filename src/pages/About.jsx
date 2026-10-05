import siteConfig from "../config/siteConfig";
import about from "../data/about";
import photos from "../data/photos";
import Seo from "../components/Seo";
import PhotoImage from "../components/PhotoImage";
import Reveal from "../components/Reveal";
import ClosingCta from "../components/ClosingCta";
import { breadcrumbSchema } from "../utils/schema";

const sectionImages = [photos.camera, photos.mehndi, photos.fieldVeil, photos.floralArch];

export default function About() {
  const firstName = siteConfig.photographerName.split(" ")[0];

  return (
    <article>
      <Seo
        title="About"
        description={`Meet ${siteConfig.photographerName}, a documentary and editorial photographer based in ${siteConfig.location}.`}
        path="/about"
        image={photos.portraitStudio.src}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <header className="grid items-end gap-10 px-5 pt-28 pb-8 md:grid-cols-12 md:px-10 md:pt-36 md:pb-12">
        <div className="mx-auto w-full max-w-md md:col-span-6 md:mx-0 md:max-w-[34rem]">
          <PhotoImage photo={photos.portraitStudio} priority sizes="(min-width: 768px) 34rem, 92vw" limit="46rem" />
        </div>
        <div className="md:col-span-5 md:col-start-8 md:pb-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">The photographer</p>
          <h1 className="mt-4 font-serif text-[clamp(3.4rem,7vw,6.6rem)] leading-[0.9] font-medium">
            {about.heroTitle || `Hello, I'm ${firstName}.`}
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="font-serif text-3xl leading-snug md:text-4xl">{about.intro}</p>
      </section>

      {about.sections.map((section, index) => (
        <section key={section.id} className="px-5 py-8 md:px-10 md:py-12">
          <div className={`grid items-center gap-10 md:grid-cols-12 ${index % 2 ? "" : ""}`}>
            <Reveal className={`mx-auto w-full max-w-md md:max-w-[32rem] ${index % 2 ? "md:col-span-6 md:col-start-7 md:row-start-1" : "md:col-span-6"}`}>
              <PhotoImage photo={sectionImages[index % sectionImages.length]} sizes="(min-width: 768px) 32rem, 92vw" limit="42rem" />
            </Reveal>
            <Reveal
              className={index % 2 ? "md:col-span-5 md:col-start-1 md:row-start-1" : "md:col-span-5 md:col-start-8"}
              delay={0.05}
            >
              <h2 className="font-serif text-4xl leading-none font-medium md:text-5xl">{section.title}</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="px-5 py-16 md:px-10">
        <ul className="grid gap-4 border-t border-line pt-8 md:grid-cols-4">
          {about.notes.map((note) => (
            <li key={note} className="font-serif text-2xl leading-snug">
              {note}
            </li>
          ))}
        </ul>
      </section>

      <ClosingCta title="Shall we begin?" text="Tell me about the day, the people, and what you hope to remember." />
    </article>
  );
}
