import Seo from "../components/Seo";
import PortfolioGrid from "../components/PortfolioGrid";
import { breadcrumbSchema } from "../utils/schema";
import siteConfig from "../config/siteConfig";

export default function Portfolio() {
  return (
    <article className="px-5 pt-28 pb-20 md:px-10 md:pt-36 md:pb-28">
      <Seo
        title="Portfolio"
        description={`Selected weddings, portraits, and stories by ${siteConfig.photographerName}, photographed in ${siteConfig.city} and abroad.`}
        path="/portfolio"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <header className="max-w-3xl pb-12 md:pb-16">
        <h1 className="font-serif text-[clamp(3.4rem,8vw,7rem)] leading-[0.9] font-medium">The portfolio</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Stories, celebrations, and moments captured as they unfolded.
        </p>
      </header>
      <PortfolioGrid />
    </article>
  );
}
