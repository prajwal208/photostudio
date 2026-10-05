import { Helmet } from "react-helmet-async";
import siteConfig, { absoluteUrl, seoKeywords } from "../config/siteConfig";

export default function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  jsonLd,
}) {
  const pageTitle = title
    ? `${title} — ${siteConfig.photographerName}`
    : `${siteConfig.photographerName} — Wedding & Portrait Photographer in ${siteConfig.city}`;
  const pageDescription =
    description ||
    `${siteConfig.photographerName} photographs weddings, couples, portraits, and destinations. Based in ${siteConfig.location}, available worldwide.`;
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : "";
  const schemas = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seoKeywords.join(", ")} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.brandName} />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      {schemas.map((schema) => (
        <script key={schema["@type"] || schema["@graph"]?.[0]?.["@type"]} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
