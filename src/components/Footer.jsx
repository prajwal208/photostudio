import { Link } from "react-router-dom";
import siteConfig, { isConfiguredPhone, phoneHref } from "../config/siteConfig";
import { footerNav, legalNav } from "../data/navigation";

function SocialLinks() {
  const links = [
    siteConfig.instagram ? { label: "Instagram", href: siteConfig.instagram } : null,
    siteConfig.facebook ? { label: "Facebook", href: siteConfig.facebook } : null,
    siteConfig.youtube ? { label: "YouTube", href: siteConfig.youtube } : null,
  ].filter(Boolean);

  if (links.length === 0) return null;

  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.22em] text-sand">Social</p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-sand">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const phoneReady = isConfiguredPhone(siteConfig.phone);

  return (
    <footer className="bg-night px-5 pt-20 pb-24 text-paper md:px-10 md:pt-28 md:pb-10">
      <p className="max-w-5xl font-serif text-[clamp(3.4rem,10vw,8rem)] leading-[0.88] font-medium">
        Let's make
        <br />
        something
        <br />
        beautiful.
      </p>
      <Link
        to="/inquire"
        className="mt-10 inline-flex border-b border-paper pb-1 text-[11px] uppercase tracking-[0.28em]"
      >
        Inquire
      </Link>

      <div className="mt-20 grid gap-12 border-t border-white/15 pt-10 text-[11px] uppercase tracking-[0.2em] md:grid-cols-4">
        <div>
          <p className="text-sand">Navigate</p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-sand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SocialLinks />
        <div>
          <p className="text-sand">Studio</p>
          <p className="mt-4 normal-case tracking-normal text-sm leading-relaxed">
            Based in {siteConfig.city}
            {siteConfig.availableWorldwide ? (
              <>
                <br />
                Available worldwide
              </>
            ) : null}
          </p>
          <a href={`mailto:${siteConfig.email}`} className="mt-4 inline-block normal-case tracking-normal text-sm">
            {siteConfig.email}
          </a>
          {phoneReady ? (
            <a href={phoneHref()} className="mt-2 block normal-case tracking-normal text-sm">
              {siteConfig.phone}
            </a>
          ) : null}
        </div>
        <div>
          <p className="font-serif text-3xl tracking-normal normal-case italic">{siteConfig.brandName}</p>
          <p className="mt-3 normal-case tracking-normal text-sm text-sand">{siteConfig.tagline}</p>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 text-[11px] uppercase tracking-[0.18em] text-sand md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.photographerName}
        </p>
        <ul className="flex gap-5">
          {legalNav.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-paper">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
