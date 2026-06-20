import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import ResultsGrid from "@/components/ResultsGrid";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Results — Top Mountaineer",
  description:
    "What reps say after I tear their calls apart every week — filter by the outcome that matches where you're stuck.",
};

const RESULTS_CATEGORY_COUNT = new Set(TESTIMONIALS.map((t) => t.category))
  .size;

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main id="main-content" className="flex-1 pb-24 md:pb-0">
        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              WHAT REPS SAY
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-5xl">
              Choking-on-the-phone to dangerous-on-the-phone.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-snow-dim">
              Nobody on my team wrote these. This is what reps actually say
              in the film room, the week after the call that used to make
              them freeze. Filter by the outcome closest to where
              you&apos;re stuck.
            </p>
            <p className="mt-6 text-sm font-medium text-snow-dim">
              {TESTIMONIALS.length} anonymized rep quotes across{" "}
              {RESULTS_CATEGORY_COUNT} outcomes.
            </p>
          </div>
        </section>

        <section className="border-b border-basalt-line bg-basalt-raised/40">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <ResultsGrid testimonials={TESTIMONIALS} />
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Want your own calls torn apart like this?
            </h2>
            <Link
              href="/apply"
              className="mt-8 inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Get Your Calls Reviewed
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
