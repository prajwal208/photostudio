import { useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function TestimonialSlider({ items = [] }) {
  const reduce = useReducedMotion();
  if (!items.length) return null;

  return (
    <section className="px-5 py-20 md:px-10 md:py-32" aria-label="Love letters">
      <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Love letters</p>
      <Swiper
        modules={[A11y, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop={items.length > 1}
        autoplay={
          reduce || items.length < 2
            ? false
            : { delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }
        }
        a11y={{
          prevSlideMessage: "Previous letter",
          nextSlideMessage: "Next letter",
        }}
        className="mt-8"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <figure className="max-w-4xl">
              <blockquote className="font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.15] font-medium">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm tracking-wide text-muted">
                {item.name}
                {item.location ? ` — ${item.location}` : ""}
                {item.session ? ` · ${item.session}` : ""}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
