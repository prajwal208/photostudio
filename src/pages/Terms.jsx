import siteConfig from "../config/siteConfig";
import Seo from "../components/Seo";

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:pt-40">
      <Seo
        title="Terms"
        description={`Terms for viewing the portfolio and inquiring with ${siteConfig.photographerName}.`}
        path="/terms"
      />
      <h1 className="font-serif text-5xl font-medium md:text-6xl">Terms</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-muted">
        <p>
          The photographs, words, and design of this website are the work of {siteConfig.brandName}. You are welcome to
          look, share a link, and inquire. You are not welcome to download the images for your own commercial use, or
          to present them as someone else's.
        </p>
        <p>
          An inquiry is not a booking. Dates are held only after a conversation and a written agreement. Starting
          prices on the offerings page are guides, not a quote. Travel, print, and additional hours are discussed
          before anything is confirmed.
        </p>
        <p>
          The studio is based in {siteConfig.location}
          {siteConfig.availableWorldwide ? " and accepts work elsewhere when the schedule allows" : ""}.
        </p>
      </div>
    </article>
  );
}
