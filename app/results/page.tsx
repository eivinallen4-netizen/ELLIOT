import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResultsGrid, { type Testimonial } from "@/components/ResultsGrid";

export const metadata: Metadata = {
  title: "Results — Top Mountaineer",
  description:
    "What reps say after their calls get torn down in the film room every week — filter by the outcome that matches where you're stuck.",
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I finally know what to say the second they push back.",
    name: "SDR, SaaS — name withheld",
    category: "Stopped Freezing",
  },
  {
    quote: "I stopped sounding like a telemarketer.",
    name: "BDR, fintech — name withheld",
    category: "Stopped Freezing",
  },
  {
    quote: "I booked more this month than the last three combined.",
    name: "SMB AE, SaaS — name withheld",
    category: "Booked More Meetings",
  },
  {
    quote: "I got off the PIP — then got promoted to AE.",
    name: "Former SDR, SaaS — name withheld",
    category: "Off the PIP",
  },
  {
    quote: "I can hear myself getting better on the recordings.",
    name: "BDR, agency services — name withheld",
    category: "Stopped Freezing",
  },
  {
    quote: "My manager finally stopped flagging my calls in 1:1s.",
    name: "SDR, insurance — name withheld",
    category: "Off the PIP",
  },
  {
    quote: "Two promotions in eight months after I started sending in calls.",
    name: "AE, SaaS — name withheld",
    category: "Promoted",
  },
  {
    quote: "Booked meetings every week for six weeks straight, first time ever.",
    name: "BDR, SaaS — name withheld",
    category: "Booked More Meetings",
  },
  {
    quote: "Went from dreading objections to actually wanting them.",
    name: "SDR, services — name withheld",
    category: "Promoted",
  },
];

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main className="flex-1">
        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              WHAT REPS SAY
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-5xl">
              Freeze-on-the-phone to dangerous-on-the-phone.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-snow-dim">
              These aren&apos;t testimonials some agency wrote for us.
              They&apos;re what reps say in the film room, the week after
              the call that used to make them freeze. Filter by the outcome
              closest to where you&apos;re stuck.
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
              Want your own calls torn down like this?
            </h2>
            <Link
              href="/apply"
              className="mt-8 inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Apply for Coaching
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
