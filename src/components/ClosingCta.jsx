import { Link } from "react-router-dom";
import TextLink from "./TextLink";
import MotionText from "./MotionText";

export default function ClosingCta({
  title = "Love what you see?",
  text = "Let's create something meaningful together.",
}) {
  return (
    <section className="px-5 py-24 md:px-10 md:py-36">
      <MotionText>
      <h2 className="max-w-4xl font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.9] font-medium">{title}</h2>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{text}</p>
      <TextLink to="/inquire" className="mt-8">
        Inquire
      </TextLink>
      <p className="mt-6 text-sm text-muted">
        Or begin with the{" "}
        <Link to="/portfolio" className="border-b border-current">
          portfolio
        </Link>
        .
      </p>
      </MotionText>
    </section>
  );
}
