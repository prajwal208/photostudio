import siteConfig from "../config/siteConfig";
import faqs from "../data/faqs";
import Seo from "../components/Seo";
import FaqList from "../components/FaqList";
import ClosingCta from "../components/ClosingCta";
import { breadcrumbSchema } from "../utils/schema";

export default function FAQ() {
  return (
    <article className="px-5 pt-28 pb-8 md:px-10 md:pt-36">
      <Seo
        title="Questions"
        description={`Practical questions about booking ${siteConfig.photographerName} for a wedding, portrait, or destination.`}
        path="/faq"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Questions", path: "/faq" },
        ])}
      />
      <header className="max-w-3xl pb-12">
        <h1 className="font-serif text-[clamp(3.2rem,7vw,6rem)] leading-[0.9] font-medium">Questions</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          A few things people ask before they write. If yours is not here, the inquiry page is the right door.
        </p>
      </header>
      <FaqList items={faqs} />
      <ClosingCta />
    </article>
  );
}
