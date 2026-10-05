import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <article className="px-5 pt-36 pb-28 md:px-10">
      <Seo title="Page not found" description="This page is not part of the studio site." path="/404" />
      <h1 className="font-serif text-6xl font-medium md:text-7xl">Lost the light.</h1>
      <p className="mt-6 max-w-md text-lg text-muted">That page is not here. The portfolio still is.</p>
      <Link to="/" className="mt-8 inline-flex border-b border-current pb-1 text-[11px] uppercase tracking-[0.24em]">
        Return home
      </Link>
    </article>
  );
}
