const WIDTHS = [480, 768, 1200, 1800, 2400];

function dimensions(ratio) {
  const safe = ratio > 0 ? ratio : 1.5;
  if (safe >= 1) {
    return { width: 2400, height: Math.round(2400 / safe) };
  }
  return { width: Math.round(2400 * safe), height: 2400 };
}

/**
 * Build a photography asset.
 * Remote: pass an Unsplash photo id (`photo-...`).
 * Local: pass `src` (a file in /public or any URL) and optional srcSet fields.
 */
export function photo({ id, src, alt, ratio = 1.5, width, height }) {
  const size = {
    width: width || dimensions(ratio).width,
    height: height || dimensions(ratio).height,
  };

  if (src && !id) {
    return {
      alt,
      ...size,
      src,
      webpSrcSet: "",
      avifSrcSet: "",
      placeholder: "",
    };
  }

  const srcFor = (w, format) =>
    `https://images.unsplash.com/${id}?auto=format&fit=max&w=${w}&q=68&fm=${format}`;

  const setFor = (format) => WIDTHS.map((w) => `${srcFor(w, format)} ${w}w`).join(", ");

  return {
    alt,
    ...size,
    src: srcFor(1600, "webp"),
    webpSrcSet: setFor("webp"),
    avifSrcSet: setFor("avif"),
    placeholder: `https://images.unsplash.com/${id}?auto=format&fit=max&w=32&q=20&fm=webp&blur=50`,
  };
}
