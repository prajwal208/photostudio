import siteConfig, { isConfiguredPhone, phoneHref, whatsappHref } from "../config/siteConfig";
import Seo from "../components/Seo";
import InquiryForm from "../components/InquiryForm";
import { breadcrumbSchema } from "../utils/schema";

function ContactLink({ href, label, value, external = false }) {
  if (!href || !value) return null;
  return (
    <a
      href={href}
      className="block border-b border-line py-4"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span className="text-[11px] uppercase tracking-[0.22em] text-muted">{label}</span>
      <span className="mt-1 block text-lg">{value}</span>
    </a>
  );
}

export default function Inquire() {
  const phoneReady = isConfiguredPhone(siteConfig.phone);
  const whatsappReady = isConfiguredPhone(siteConfig.whatsapp);

  return (
    <article className="px-5 pt-28 pb-20 md:px-10 md:pt-36">
      <Seo
        title="Inquire"
        description={`Tell ${siteConfig.photographerName} about your wedding, portrait, or event. Based in ${siteConfig.location}.`}
        path="/inquire"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Inquire", path: "/inquire" },
        ])}
      />
      <div className="grid gap-16 md:grid-cols-12">
        <header className="md:col-span-5">
          <h1 className="font-serif text-[clamp(3.2rem,6vw,5.6rem)] leading-[0.9] font-medium">
            Let's create something meaningful.
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">I'd love to hear about your story.</p>
          <div className="mt-12">
            <ContactLink href={`mailto:${siteConfig.email}`} label="Email me" value={siteConfig.email} />
            <ContactLink href={phoneReady ? phoneHref() : ""} label="Call" value={phoneReady ? siteConfig.phone : ""} />
            <ContactLink
              href={whatsappReady ? whatsappHref() : ""}
              label="WhatsApp"
              value={whatsappReady ? "Send a message" : ""}
              external
            />
            <ContactLink
              href={siteConfig.instagram}
              label="Instagram"
              value={siteConfig.instagramHandle || (siteConfig.instagram ? "Instagram" : "")}
              external
            />
          </div>
        </header>
        <div className="md:col-span-6 md:col-start-7">
          <InquiryForm />
        </div>
      </div>
    </article>
  );
}
