import siteConfig from "../config/siteConfig";
import photos from "../data/photos";
import Seo from "../components/Seo";
import ExperienceSection from "../components/ExperienceSection";
import PhotoImage from "../components/PhotoImage";
import ClosingCta from "../components/ClosingCta";
import { breadcrumbSchema } from "../utils/schema";

export default function Experience() {
  return (
    <article className="pt-24 md:pt-28">
      <Seo
        title="The experience"
        description={`How ${siteConfig.photographerName} works with couples and clients, from the first conversation to the finished gallery.`}
        path="/experience"
        image={photos.shadowHands.src}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" },
        ])}
      />
      <ExperienceSection detailed />
      <div className="mx-auto grid max-w-5xl gap-4 px-5 md:grid-cols-2 md:gap-6 md:px-10">
        <PhotoImage photo={photos.shadowHands} sizes="(min-width: 768px) 36rem, 100vw" limit="32rem" />
        <PhotoImage photo={photos.chandelier} sizes="(min-width: 768px) 36rem, 100vw" limit="32rem" />
      </div>
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-serif text-4xl font-medium md:text-5xl">Along the way</h2>
        <ul className="mt-8 space-y-3 text-lg text-muted">
          <li>A consultation before any date is held</li>
          <li>Location planning and a timeline with air in it</li>
          <li>Light direction, and posing only when you want it</li>
          <li>Wedding-day coverage that follows the room</li>
          <li>An edit, an online gallery, and print or album options</li>
        </ul>
      </section>
      <ClosingCta title="If this feels like your kind of day" text="Write to me. I would like to hear how you imagine it." />
    </article>
  );
}
