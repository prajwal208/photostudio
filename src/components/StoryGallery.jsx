import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import PhotoImage from "./PhotoImage";

function Frame({ children, className = "" }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function buildRows(images) {
  const rows = [];
  let index = 0;
  const pattern = ["full", "split", "feature", "trio", "screen", "split"];
  let step = 0;

  while (index < images.length) {
    const kind = pattern[step % pattern.length];
    step += 1;
    const remaining = images.length - index;

    if ((kind === "trio" || kind === "feature") && remaining >= 3) {
      rows.push({ kind, images: images.slice(index, index + 3) });
      index += 3;
      continue;
    }

    if (kind === "split" && remaining >= 2) {
      rows.push({ kind: "split", images: images.slice(index, index + 2) });
      index += 2;
      continue;
    }

    rows.push({
      kind: kind === "screen" ? "screen" : "full",
      images: [images[index]],
    });
    index += 1;
  }

  return rows;
}

export default function StoryGallery({ images = [] }) {
  const rows = buildRows(images);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 md:gap-6 md:px-10">
      {rows.map((row, rowIndex) => {
        if (row.kind === "screen") {
          return (
            <Frame key={rowIndex}>
              <div className="relative h-[68svh] min-h-[420px] bg-night">
                <PhotoImage photo={row.images[0]} fill sizes="100vw" />
              </div>
            </Frame>
          );
        }

        if (row.kind === "split") {
          return (
            <div key={rowIndex} className="grid items-start gap-4 md:grid-cols-2 md:gap-6">
              {row.images.map((image) => (
                <Frame key={image.src}>
                  <PhotoImage photo={image} sizes="(min-width: 768px) 40rem, 100vw" limit="36rem" />
                </Frame>
              ))}
            </div>
          );
        }

        if (row.kind === "trio") {
          return (
            <div key={rowIndex} className="grid items-start gap-4 md:grid-cols-3 md:gap-6">
              {row.images.map((image) => (
                <Frame key={image.src}>
                  <PhotoImage photo={image} sizes="(min-width: 768px) 28rem, 100vw" limit="28rem" />
                </Frame>
              ))}
            </div>
          );
        }

        if (row.kind === "feature") {
          return (
            <div key={rowIndex} className="grid items-start gap-4 md:grid-cols-12 md:gap-6">
              <Frame className="md:col-span-7">
                <PhotoImage photo={row.images[0]} sizes="(min-width: 768px) 46rem, 100vw" limit="40rem" />
              </Frame>
              <div className="grid gap-4 md:col-span-5 md:gap-6">
                {row.images.slice(1).map((image) => (
                  <Frame key={image.src}>
                    <PhotoImage photo={image} sizes="(min-width: 768px) 28rem, 100vw" limit="26rem" />
                  </Frame>
                ))}
              </div>
            </div>
          );
        }

        const portrait = row.images[0].height > row.images[0].width;
        return (
          <Frame key={rowIndex} className={portrait ? "mx-auto w-full max-w-lg" : "mx-auto w-full max-w-6xl"}>
            <PhotoImage
              photo={row.images[0]}
              sizes={portrait ? "(min-width: 768px) 32rem, 92vw" : "(min-width: 768px) 72rem, 100vw"}
              limit={portrait ? "42rem" : "40rem"}
            />
          </Frame>
        );
      })}
    </div>
  );
}

export function StoryLink({ story }) {
  if (!story) return null;
  return (
    <Link to={`/portfolio/${story.slug}`} className="group block border-t border-line py-10">
      <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Next story</p>
      <p className="mt-3 font-serif text-4xl font-medium group-hover:opacity-70 md:text-5xl">{story.title}</p>
      <p className="mt-2 text-sm text-muted">
        {story.location}
        <span className="px-2">/</span>
        {story.year}
      </p>
    </Link>
  );
}
