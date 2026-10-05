import { Link } from "react-router-dom";
import PhotoImage from "./PhotoImage";
import TextLink from "./TextLink";
import MotionPhoto from "./MotionPhoto";
import MotionText from "./MotionText";

export default function ServiceSection({ service, reverse = false, level = 2 }) {
  const Heading = level === 3 ? "h3" : "h2";

  return (
    <article className="grid items-center gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-8 md:py-16">
      <MotionPhoto
        className={`mx-auto w-full max-w-md md:max-w-[36rem] ${reverse ? "md:col-span-7 md:col-start-6 md:row-start-1" : "md:col-span-7"}`}
      >
        <Link to={`/inquire?service=${service.id}`} className="group block">
          <PhotoImage photo={service.image} sizes="(min-width: 768px) 36rem, 92vw" zoom limit="50rem" />
        </Link>
      </MotionPhoto>
      <MotionText
        className={reverse ? "md:col-span-5 md:col-start-1 md:row-start-1" : "md:col-span-5 md:col-start-8"}
        delay={0.06}
      >
        <Heading className="font-serif text-4xl leading-none font-medium md:text-5xl">{service.title}</Heading>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{service.description}</p>
        {service.startingPrice ? (
          <p className="mt-6 text-[11px] uppercase tracking-[0.22em]">
            {service.pricePrefix ? `${service.pricePrefix} ` : ""}
            {service.startingPrice}
          </p>
        ) : null}
        <TextLink to={`/inquire?service=${service.id}`} className="mt-8">
          Learn more
        </TextLink>
      </MotionText>
    </article>
  );
}
