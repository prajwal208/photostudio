import siteConfig, { absoluteUrl, isConfiguredPhone } from "../config/siteConfig";

export function businessGraph(image) {
  const telephone = isConfiguredPhone(siteConfig.phone) ? siteConfig.phone : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.photographerName,
        jobTitle: "Photographer",
        url: siteConfig.siteUrl,
        email: siteConfig.email,
        telephone,
        image,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.country,
        },
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        name: siteConfig.brandName,
        url: siteConfig.siteUrl,
        image,
        email: siteConfig.email,
        telephone,
        priceRange: siteConfig.priceRange,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.country,
        },
        areaServed: siteConfig.availableWorldwide ? "Worldwide" : siteConfig.city,
        description: `${siteConfig.photographerName} photographs weddings, couples, portraits, and destinations from ${siteConfig.location}.`,
      },
    ],
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function imageObjectSchema(image, caption) {
  if (!image?.src) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: image.src,
    description: image.alt,
    caption,
    width: image.width,
    height: image.height,
  };
}
