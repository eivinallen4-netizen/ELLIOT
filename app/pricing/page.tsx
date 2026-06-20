import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import Reveal from "@/components/Reveal";
import {
  IconCalendarCheck,
  IconFileText,
  IconLayers,
  IconBookOpen,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing — Top Mountaineer",
  description:
    "Coaching is application-based. Here's exactly what's in the film room, how it stacks up against courses and going it alone, and how the pricing actually works.",
};

const INCLUDES = [
  {
    icon: IconCalendarCheck,
    title: "Weekly 1:1 film session",
    body: "I review your actual calls from that week and tear them down live — not some templated review off somebody else's script.",
  },
  {
    icon: IconFileText,
    title: "A written breakdown after every session",
    body: "The exact moments, the why behind them, and the line to run next time — in writing, because your memory after a full day on the phones is garbage.",
  },
  {
    icon: IconLayers,
    title: "Access to the full film library",
    body: "Every tagged objection, save, and blown call from the whole cohort. You study way more reps than just yourself, every single week.",
  },
  {
    icon: IconBookOpen,
    title: "A playbook built from your own calls",
    body: "Not a generic script some guru sells in a bundle. The exact recoveries that work on your actual prospects, in your own voice, pulled straight from your own recordings.",
  },
];

const COMPARISON = [
  {
    name: "The Film Room",
    highlight: true,
    tagline: "Real calls. Real coach. Every single week.",
    points: [
      "Weekly 1:1 teardown of your actual real calls",
      "Personalized recoveries pulled from your voice, your prospects",
      "Annotated library of the whole cohort's calls",
      "A coach who tells you the truth because I actually want you to win",
    ],
  },
  {
    name: "Courses & Content",
    highlight: false,
    tagline: "One-to-many, theory-first",
    points: [
      "Frameworks and scripts, never your own calls",
      "No one is listening to how you actually sound",
      "Finish rate on drip-fed video courses: embarrassingly low",
      "You're on your own the second a prospect pushes back",
    ],
  },
  {
    name: "Going It Alone",
    highlight: false,
    tagline: "Guessing, on your own",
    points: [
      "No outside ear on your calls at all",
      "You repeat the same mistakes because no one names them",
      "Plateau lasts as long as you let it",
      "Free, until the missed quota isn't",
    ],
  },
];

const PRICING_FAQS = [
  {
    q: "So what does it actually cost?",
    a: "Depends on your stage and which cohort you'd join — that's exactly what the 15-minute call is for. Apply, get on the call, I'll tell you straight. No pricing-page riddles, no hidden tiers.",
  },
  {
    q: "Is there a contract?",
    a: "Coaching runs in cohorts. You'll know the commitment length and the price before you pay me a dime — on the 15-minute screening call, not buried in fine print after.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main id="main-content" className="flex-1 pb-24 md:pb-0">
        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              PRICING
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-5xl">
              Application-based. No pricing-page mystery.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-snow-dim">
              No hidden tiers, no upsell after you&apos;ve already paid
              me. Price depends on your stage and the cohort you&apos;d
              join — I tell you on the 15-minute screening call, before
              you commit to a thing.
            </p>
            <Link
              href="/apply"
              className="mt-9 inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Apply &amp; Get Pricing
            </Link>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium tracking-[0.05em] text-snow-dim">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                NO HIDDEN TIERS
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                SCREENED, NOT SOLD
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                PRICE BEFORE YOU PAY
              </li>
            </ul>
          </div>
        </section>

        <section className="border-b border-basalt-line bg-basalt-raised/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
                WHAT&apos;S IN THE FILM ROOM
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
                Here&apos;s exactly what happens to you every week you&apos;re in.
              </h2>
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {INCLUDES.map((item, i) => (
                <Reveal
                  key={item.title}
                  as="li"
                  delay={i * 80}
                  className="rounded-xl border border-basalt-line bg-basalt p-6 transition-colors hover:border-orange/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-basalt-line bg-basalt-raised text-orange">
                    <item.icon />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-snow">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-snow-dim">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
                THE ALTERNATIVE TO COURSES
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
                How it actually compares.
              </h2>
              <p className="mt-2 text-xs font-medium text-snow-dim sm:hidden">
                Swipe to compare →
              </p>
            </div>

            <div className="mt-10 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:snap-none sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3">
              {COMPARISON.map((option, i) => (
                <Reveal
                  key={option.name}
                  delay={i * 100}
                  className="w-[85%] flex-shrink-0 snap-start sm:w-auto"
                >
                  <div
                    className={`flex h-full flex-col rounded-2xl border p-7 ${
                      option.highlight
                        ? "border-orange/50 bg-basalt-raised"
                        : "border-basalt-line bg-basalt-raised/40"
                    }`}
                  >
                    {option.highlight && (
                      <span className="mb-3 inline-block w-fit rounded-full bg-orange px-3 py-1 text-xs font-semibold text-basalt">
                        THIS IS US
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold text-snow">
                      {option.name}
                    </h3>
                    <p className="mt-1 text-sm text-snow-dim">{option.tagline}</p>
                    <ul className="mt-5 flex flex-col gap-3">
                      {option.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-6 text-snow"
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                              option.highlight ? "bg-orange" : "bg-basalt-line"
                            }`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-basalt-line bg-basalt-raised/40">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              PRICING QUESTIONS
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Before you apply.
            </h2>

            <div className="mt-10 flex flex-col gap-4">
              {PRICING_FAQS.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-basalt-line bg-basalt p-5 open:border-orange/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-snow">
                    {item.q}
                    <span className="flex-shrink-0 text-orange transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-snow-dim">{item.a}</p>
                </details>
              ))}
            </div>

            <p className="mt-6 text-sm text-snow-dim">
              More questions about the format, the guarantee, or who it&apos;s
              for?{" "}
              <Link href="/#faq" className="font-medium text-orange hover:underline">
                See the full FAQ
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Apply. Get on the screen. Get the number, no games.
            </h2>
            <Link
              href="/apply"
              className="mt-8 inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Apply Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
