/**
 * All branding and contact details live here.
 * Update this file — components read from it.
 *
 * Phone and WhatsApp stay blank until you add your own number,
 * so the site never messages a stranger.
 * WhatsApp format: digits only, country code included, e.g. "9198XXXXXXXX".
 */

const siteConfig = {
  photographerName: "Meher Sen",
  brandName: "Meher Sen",
  tagline: "Stories worth remembering.",
  location: "Bangalore, India",
  city: "Bangalore",
  region: "Karnataka",
  country: "India",
  email: "hello@example.com",
  phone: "",
  whatsapp: "",
  whatsappMessage:
    "Hi, I found your photography portfolio and would love to enquire about a photography session.",
  instagram: "",
  instagramHandle: "",
  facebook: "",
  youtube: "",
  availableWorldwide: true,
  siteUrl: "https://mehersen.example",
  inquiryEndpoint: "",
  responseTime: "within two days",
  logoImage: "",
  priceRange: "$$$",
};

export const seoKeywords = [
  `${siteConfig.city} photographer`,
  `Wedding photographer in ${siteConfig.city}`,
  `Best wedding photographer in ${siteConfig.city}`,
  `Couples photographer in ${siteConfig.city}`,
  `Pre wedding photographer in ${siteConfig.city}`,
  "Destination wedding photographer",
];

export function digitsOnly(value) {
  return String(value || "").replace(/\D/g, "");
}

export function isConfiguredPhone(value) {
  const digits = digitsOnly(value);
  if (digits.length < 10) return false;
  const national = digits.startsWith("91") ? digits.slice(2) : digits;
  return national.length >= 10 && !/^0+$/.test(national);
}

export function phoneHref(value = siteConfig.phone) {
  const digits = digitsOnly(value);
  return digits ? `tel:+${digits}` : "";
}

export function whatsappHref(value = siteConfig.whatsapp) {
  const digits = digitsOnly(value);
  if (!digits) return "";
  const text = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

export function absoluteUrl(path = "/") {
  if (!path) return siteConfig.siteUrl;
  if (path.startsWith("http")) return path;
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export default siteConfig;
