import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Top Mountaineer",
  description:
    "Why the film room for sales exists, who's behind it, and the principles that shape every coaching session.",
};

const PRINCIPLES = [
  {
    title: "Direct and blunt, but in your corner",
    body: "We give hard feedback because we respect you enough to. Soft feedback doesn't fix a freeze on a live call.",
  },
  {
    title: "Confessional",
    body: "We show our own bad calls. Credibility comes from being in the arena, not above it.",
  },
  {
    title: "Tactical and concrete",
    body: "Always a real example, a real line, a real move. Never abstract.",
  },
  {
    title: "Anti-fluff, anti-guru",
    body: "No “synergy,” no “thought leadership,” no motivational fog.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main className="flex-1">
        <section className="border-b border-basalt-line">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <PhotoSlot label="Coach headshot — drop a real photo at public/photos/coach.jpg, 1:1, 1200x1200" />
            <div>
              <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
                WHY THIS EXISTS
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-5xl">
                The industry sells words. We listen to calls.
              </h1>
              <p className="mt-6 text-lg leading-8 text-snow-dim">
                Every program out there sells frameworks, acronyms, scripts,
                slide decks. Almost none of them show a rep what
                &ldquo;good&rdquo; actually sounds like on a live call, and
                even fewer put a coach on that rep&apos;s own recordings
                every week. That gap is the entire reason Top Mountaineer
                exists.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-basalt-line bg-basalt-raised/40">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              THE STORY
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Pro athletes watch film. Sales reps never had that — until now.
            </h2>
            <p className="mt-5 text-base leading-7 text-snow-dim">
              Pro athletes don&apos;t get better from a playbook PDF — they
              get better watching film with a position coach who breaks
              down what they did and why. Sales has never had that as a
              standard. We&apos;re building it: starting with 1:1 coaching,
              growing into the largest annotated library of real sales
              calls anywhere — every objection, every recovery, every
              blown call, tagged with the why.
            </p>
            <p className="mt-5 text-base leading-7 text-snow-dim">
              We&apos;re not interested in motivating you. We&apos;re
              interested in making you dangerous on the phone — and we
              select hard for coachable, because that&apos;s the only
              variable that actually predicts whether someone improves.
            </p>
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
                HOW WE OPERATE
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
                The principles behind every session.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {PRINCIPLES.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className="rounded-xl border border-basalt-line bg-basalt-raised p-6 transition-colors hover:border-orange/40"
                >
                  <h3 className="font-display text-lg font-semibold text-snow">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-snow-dim">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border-l-4 border-orange bg-basalt-raised p-8">
              <p className="font-display text-xl leading-snug text-snow sm:text-2xl">
                &ldquo;Here&apos;s the exact line. Here&apos;s why it
                works. Here&apos;s me blowing it on a real call so you
                don&apos;t.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Want a real coach on your real calls?
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
