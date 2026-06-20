import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Top Mountaineer",
  description:
    "Why I built the film room for sales, who I am, and the principles I won't bend on no matter how much you beg.",
};

const PRINCIPLES = [
  {
    title: "Blunt, but in your corner",
    body: "I give you hard feedback because I respect you enough to. Soft feedback never fixed a freeze on a live call — and it never will.",
  },
  {
    title: "Confessional",
    body: "I show you my own bad calls too. Credibility comes from being in the arena, not lecturing from the bleachers.",
  },
  {
    title: "Tactical and concrete",
    body: "Always a real example, a real line, a real move. Never some vague vibe.",
  },
  {
    title: "Anti-fluff, anti-guru",
    body: "No “synergy,” no “thought leadership,” no motivational poster nonsense.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main id="main-content" className="flex-1 pb-24 md:pb-0">
        <section className="border-b border-basalt-line">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <PhotoSlot label="Coach headshot — drop a real photo at public/photos/coach.jpg, 1:1, 1200x1200" />
            <div>
              <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
                WHY THIS EXISTS
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-5xl">
                Everyone else sells words. I listen to calls.
              </h1>
              <p className="mt-6 text-lg leading-8 text-snow-dim">
                Every program out there sells frameworks, acronyms, scripts,
                slide decks. Almost none of them show a rep what
                &ldquo;good&rdquo; actually sounds like on a live call, and
                even fewer put a real coach on that rep&apos;s own
                recordings every single week. That gap is the entire reason
                I built this.
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
              Pro athletes watch film. Sales reps never got that — until now.
            </h2>
            <p className="mt-5 text-base leading-7 text-snow-dim">
              Pro athletes don&apos;t get good reading a playbook PDF —
              they get good watching film with a coach who breaks down
              exactly what they did and why. Sales never had that as a
              standard. I&apos;m building it: starting with 1:1 coaching,
              growing into the largest annotated library of real sales
              calls anywhere — every objection, every save, every blown
              call, tagged with the why.
            </p>
            <p className="mt-5 text-base leading-7 text-snow-dim">
              I&apos;m not interested in motivating you. I&apos;m
              interested in making you dangerous on the phone — and I
              select hard for coachable, because that&apos;s the only
              variable that actually predicts whether someone gets better.
            </p>
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
                HOW I OPERATE
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
              Ready for a real coach on your real calls?
            </h2>
            <Link
              href="/apply"
              className="mt-8 inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Talk to Me
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
