import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    "Coaching is application-based. Here's exactly what's in the film room, how it compares to courses and going it alone, and how pricing works.",
};

const INCLUDES = [
  {
    icon: IconCalendarCheck,
    title: "Weekly 1:1 film session",
    body: "Your coach reviews your actual calls from that week and tears them down live — not a templated call review off someone else's script.",
  },
  {
    icon: IconFileText,
    title: "A written breakdown after every session",
    body: "The exact moments, the why behind them, and the line to run next time — in writing, so you're not relying on memory two days later.",
  },
  {
    icon: IconLayers,
    title: "Access to the full film library",
    body: "Every tagged objection, recovery, and blown call from the whole cohort. You study more reps than just yourself, every week.",
  },
  {
    icon: IconBookOpen,
    title: "A playbook built from your own calls",
    body: "Not a generic script. The exact recoveries that work on your prospects, in your voice, pulled straight from your own recordings.",
  },
];

const COMPARISON = [
  {
    name: "The Film Room",
    highlight: true,
    tagline: "Real calls, real coach, every week",
    points: [
      "Weekly 1:1 teardown of your own real calls",
      "Personalized recoveries pulled from your voice, your prospects",
      "Annotated library of the whole cohort's calls",
      "A coach who tells you the truth because they want you to win",
    ],
  },
  {
    name: "Courses & Content",
    highlight: false,
    tagline: "One-to-many, theory-first",
    points: [
      "Frameworks and scripts, never your own calls",
      "No one is listening to how you actually sound",
      "Finish rate on drip-fed video courses: low",
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
    a: "It depends on your stage and the cohort you'd join — that's exactly what the 15-minute screening call is for. Apply, get on the call, and we'll tell you straight. No pricing page games, no hidden tiers.",
  },
  {
    q: "Is there a contract?",
    a: "Coaching runs in cohorts. You'll know the commitment length and the price before you pay anything — on the screening call, not buried in fine print after.",
  },
  {
    q: "What if it doesn't work?",
    a: "Show up, send your calls, run the lines we give you for 30 days. If you book more meetings, it worked. If you did the work and it didn't move the needle, we keep coaching you until it does — at no extra cost.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main className="flex-1">
        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              PRICING
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-5xl">
              Application-based. Told to you straight.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-snow-dim">
              No hidden tiers, no upsell after you&apos;ve already paid.
              Price depends on your stage and the cohort you&apos;d join —
              we tell you on the screening call, before you commit to
              anything.
            </p>
            <Link
              href="/apply"
              className="mt-9 inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Apply &amp; Get Pricing
            </Link>
          </div>
        </section>

        <section className="border-b border-basalt-line bg-basalt-raised/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
                WHAT&apos;S IN THE FILM ROOM
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
                Here&apos;s exactly what happens every week you&apos;re in.
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
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {COMPARISON.map((option, i) => (
                <Reveal key={option.name} delay={i * 100}>
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
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Apply, get on the screen, get the number.
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
