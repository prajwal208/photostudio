import siteConfig from "../config/siteConfig";
import services from "../data/services";
import Seo from "../components/Seo";
import ServiceSection from "../components/ServiceSection";
import ClosingCta from "../components/ClosingCta";
import { breadcrumbSchema } from "../utils/schema";

export default function Services() {
  return (
    <article className="px-5 pt-28 pb-10 md:px-10 md:pt-36">
      <Seo
        title="Offerings"
        description={`Wedding, pre-wedding, portrait, destination, and editorial photography with ${siteConfig.photographerName} in ${siteConfig.city}.`}
        path="/services"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Offerings", path: "/services" },
        ])}
      />
      <header className="max-w-3xl pb-8">
        <h1 className="font-serif text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.9] font-medium">Offerings</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Every collaboration is shaped around the day itself. The figures below are starting points, and they live in
          one file so they can change when the work does.
        </p>
      </header>
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} reverse={index % 2 === 1} />
      ))}
      <ClosingCta />
    </article>
  );
}
