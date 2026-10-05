import siteConfig from "../config/siteConfig";

function labeled(payload) {
  const labels = {
    name: "Name",
    partnerName: "Partner",
    email: "Email",
    phone: "Phone",
    eventType: "Event type",
    eventDate: "Event date",
    location: "Location",
    guestCount: "Estimated guest count",
    coverage: "Photography coverage",
    referral: "How they heard about us",
    message: "Plans",
  };

  return Object.entries(labels)
    .filter(([key]) => payload[key])
    .map(([key, label]) => `${label}: ${payload[key]}`)
    .join("\n");
}

export async function submitInquiry(payload) {
  const endpoint = siteConfig.inquiryEndpoint?.trim();

  if (!endpoint) {
    const subject = `Photography inquiry from ${payload.name}`;
    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(labeled(payload))}`;
    window.location.href = href;
    return { ok: true, via: "mailto" };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error("The inquiry could not be sent.");
  }

  return { ok: true, via: "api" };
}
