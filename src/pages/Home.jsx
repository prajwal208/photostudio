import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import siteConfig from "../config/siteConfig";
import homeContent from "../data/home";
import photos from "../data/photos";
import { getFeaturedStories } from "../data/portfolio";
import services from "../data/services";
import faqs from "../data/faqs";
import testimonials from "../data/testimonials";
import publications from "../data/publications";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import PhotoImage from "../components/PhotoImage";
import FeaturedStory from "../components/FeaturedStory";
import StyleSection from "../components/StyleSection";
import AboutPreview from "../components/AboutPreview";
import ExperienceSection from "../components/ExperienceSection";
import ServiceSection from "../components/ServiceSection";
import InstagramGrid from "../components/InstagramGrid";
import FaqList from "../components/FaqList";
import Publications from "../components/Publications";
import TextLink from "../components/TextLink";
import FilmStrip from "../components/FilmStrip";
import MotionPhoto from "../components/MotionPhoto";
import MotionText from "../components/MotionText";
import ClosingCta from "../components/ClosingCta";
import { businessGraph } from "../utils/schema";

const TestimonialSlider = lazy(() => import("../components/TestimonialSlider"));

export default function Home() {
  const stories = getFeaturedStories();
  const description = `${siteConfig.photographerName} is a wedding and portrait photographer in ${siteConfig.city}. Documentary, editorial photographs for couples, destinations, and the deeply felt moments.`;

  return (
    <>
      <Seo
        description={description}
        path="/"
        image={photos.sunflare.src}
        jsonLd={businessGraph(photos.sunflare.src)}
      />
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={photos.sunflare.src}
          imageSrcSet={photos.sunflare.webpSrcSet}
          imageSizes="100vw"
          fetchPriority="high"
        />
      </Helmet>

      <Hero />

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <MotionPhoto className="mx-auto w-full max-w-md md:col-span-6 md:mx-0 md:max-w-[34rem]">
            <Link to="/portfolio/jessica-michael-goa" className="group block">
              <PhotoBlock />
            </Link>
            <Link
              to="/portfolio/jessica-michael-goa"
              className="mt-4 inline-block text-[11px] uppercase tracking-[0.22em] text-muted hover:opacity-60"
            >
              Jessica & Michael · Goa
            </Link>
          </MotionPhoto>
          <MotionText className="md:col-span-5 md:col-start-8" delay={0.08}>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">A note</p>
            <h2 className="mt-5 font-serif text-[clamp(3rem,6.4vw,5.8rem)] leading-[0.92] font-medium">
              {homeContent.intro.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">{homeContent.intro.body}</p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <TextLink to="/portfolio">View the stories</TextLink>
              <TextLink to="/inquire">Inquire</TextLink>
            </div>
          </MotionText>
        </div>
      </section>

      <FilmStrip />

      <section className="px-5 py-8 md:px-10 md:py-16">
        <MotionText className="mb-16 md:mb-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">The portfolio</p>
              <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-none font-medium">Selected stories</h2>
            </div>
            <TextLink to="/portfolio" className="hidden md:inline-flex">
              All stories
            </TextLink>
          </div>
        </MotionText>
        <div className="flex flex-col gap-24 md:gap-36">
          {stories.map((story, index) => (
            <FeaturedStory
              key={story.slug}
              story={story}
              layout={homeContent.featuredLayouts[index] || "split-left"}
            />
          ))}
        </div>
        <div className="mt-16 md:hidden">
          <TextLink to="/portfolio">All stories</TextLink>
        </div>
      </section>

      <StyleSection />
      <AboutPreview />
      <ExperienceSection />

      <section className="px-5 py-8 md:px-10 md:py-12">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-none font-medium">Offerings</h2>
          <Link to="/services" className="hidden text-[11px] uppercase tracking-[0.24em] md:inline">
            All offerings
          </Link>
        </div>
        {services.slice(0, 3).map((service, index) => (
          <ServiceSection key={service.id} service={service} reverse={index % 2 === 1} level={3} />
        ))}
        <div className="mt-8">
          <TextLink to="/services">View all offerings</TextLink>
        </div>
      </section>

      <Publications items={publications} />

      {testimonials.length > 0 ? (
        <Suspense fallback={null}>
          <TestimonialSlider items={testimonials} />
        </Suspense>
      ) : null}

      <InstagramGrid />

      <section className="px-5 py-16 md:px-10 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-none font-medium">Questions</h2>
          <TextLink to="/faq" className="hidden md:inline-flex">
            All questions
          </TextLink>
        </div>
        <FaqList items={faqs.slice(0, 5)} />
        <div className="mt-8 md:hidden">
          <TextLink to="/faq">All questions</TextLink>
        </div>
      </section>

      <ClosingCta title="If the photographs feel like yours" text="Tell me about the day. I read every note myself." />
    </>
  );
}

function PhotoBlock() {
  return <PhotoImage photo={photos.confetti} sizes="(min-width: 768px) 34rem, 92vw" limit="50rem" zoom />;
}
