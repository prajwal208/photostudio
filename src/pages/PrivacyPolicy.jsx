import siteConfig from "../config/siteConfig";
import Seo from "../components/Seo";

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:pt-40">
      <Seo
        title="Privacy policy"
        description={`How ${siteConfig.photographerName} handles inquiry details and correspondence.`}
        path="/privacy-policy"
      />
      <h1 className="font-serif text-5xl font-medium md:text-6xl">Privacy policy</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-muted">
        <p>
          This site is the studio of {siteConfig.photographerName}, based in {siteConfig.location}. When you send an
          inquiry, the details you write — name, email, phone, event plans — are used only to reply and, if we work
          together, to plan the day.
        </p>
        <p>
          Inquiries are sent to {siteConfig.email}
          {siteConfig.inquiryEndpoint ? " through the studio's form endpoint" : " by email"}. They are not sold, and
          they are not added to a marketing list. You can ask for your correspondence to be deleted by writing to the
          same address.
        </p>
        <p>
          The site does not set tracking cookies. If a private gallery or analytics tool is added later, this page
          should be updated to say so.
        </p>
        <p>Photographs on this website belong to the photographer and may not be copied or republished without permission.</p>
      </div>
    </article>
  );
}
