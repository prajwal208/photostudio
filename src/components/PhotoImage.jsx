import { useState } from "react";
import { cn } from "../utils/cn";

export default function PhotoImage({
  photo,
  alt,
  sizes = "100vw",
  priority = false,
  fill = false,
  zoom = false,
  position = "object-center",
  limit = "",
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!photo) return null;

  const description = alt || photo.alt || "";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-cream",
        fill ? "absolute inset-0 h-full w-full" : limit ? "mx-auto block w-fit max-w-full bg-transparent" : "block w-full",
        className,
      )}
      style={fill || limit ? undefined : { aspectRatio: `${photo.width} / ${photo.height}` }}
    >
      {photo.placeholder && !loaded && !failed && (
        <img
          src={photo.placeholder}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-2xl"
        />
      )}

      {failed ? (
        <div className="absolute inset-0 bg-cream" role="img" aria-label={description} />
      ) : (
        <picture className={cn("block", fill || !limit ? "h-full w-full" : "w-fit max-w-full")}>
          {photo.avifSrcSet ? (
            <source type="image/avif" srcSet={photo.avifSrcSet} sizes={sizes} />
          ) : null}
          {photo.webpSrcSet ? (
            <source type="image/webp" srcSet={photo.webpSrcSet} sizes={sizes} />
          ) : null}
          <img
            src={photo.src}
            srcSet={photo.webpSrcSet || undefined}
            sizes={photo.webpSrcSet ? sizes : undefined}
            alt={description}
            width={photo.width}
            height={photo.height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            style={limit ? { maxHeight: `min(${limit}, 82vh)`, width: "auto", height: "auto" } : undefined}
            className={cn(
              "transition-[opacity,transform] duration-700 ease-out",
              limit ? "block h-auto w-auto max-w-full" : "h-full w-full object-cover",
              position,
              loaded ? "opacity-100" : "opacity-0",
              zoom && "group-hover:scale-[1.035]",
            )}
          />
        </picture>
      )}
    </div>
  );
}
