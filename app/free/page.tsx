import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SneakPeekVideo from "@/components/SneakPeekVideo";
import Newsletter from "@/components/Newsletter";
import { getNewsletterContent } from "@/lib/newsletter";

export const metadata: Metadata = {
  title: "Free Teardown — Top Mountaineer",
  description:
    "One real sales call, torn down for free — the exact moments it went sideways, the why, and the line to use next time. No email required to watch.",
};

const MOMENTS = [
  {
    time: "0:42",
    said: '"We\'re happy with our current vendor."',
    rep: 'Rep said: "Totally fair — a lot of teams feel that way right before they switch."',
    note:
      "Agreeing and rolling over kills your own urgency. Acknowledge it, then immediately give a believable reason \"happy\" customers still take calls like this one.",
  },
  {
    time: "1:58",
    said: '"Send me some information and I\'ll look it over."',
    rep:
      'Rep said: "Happy to — what should I actually focus on so it\'s useful instead of going straight to your spam folder?"',
    note:
      '"Send me info" is a brush-off, not a real ask. Don\'t fight it — make it cost the prospect a real answer instead.',
  },
  {
    time: "3:21",
    said: "Prospect goes quiet after hearing the price.",
    rep: "Rep filled the silence after four seconds to defend the number.",
    note:
      "Silence after pricing is usually processing, not rejection. Whoever fills the dead air first usually loses the frame — let it sit.",
  },
  {
    time: "5:10",
    said: '"Can you do a quick demo right now?"',
    rep: "Rep said yes and demoed for 12 minutes before asking a single question.",
    note:
      "A surprise demo request is a buying signal, not a green light to perform. Two questions first, then demo to the answer — not the whole deck.",
  },
];

export default async function FreePage() {
  const newsletterContent = await getNewsletterContent();

  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main className="flex-1">
        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              FREE FILM SESSION
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-5xl">
              Here&apos;s one real call, torn down for free.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-snow-dim">
              No email gate to watch it. No &ldquo;sign up to see the rest.&rdquo;
              This is the exact kind of breakdown that happens every week in
              the film room — just on someone else&apos;s call this time.
            </p>
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <SneakPeekVideo />
          </div>
        </section>

        <section className="border-b border-basalt-line bg-basalt-raised/40">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              THE BREAKDOWN
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Four moments. Here&apos;s the why behind each one.
            </h2>

            <div className="mt-10 flex flex-col gap-5">
              {MOMENTS.map((moment) => (
                <div
                  key={moment.time}
                  className="rounded-xl border border-basalt-line bg-basalt p-6"
                >
                  <p className="font-display text-sm font-semibold tracking-[0.1em] text-orange">
                    {moment.time}
                  </p>
                  <p className="mt-3 font-display text-lg leading-snug text-snow">
                    {moment.said}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-snow-dim">
                    {moment.rep}
                  </p>
                  <div className="mt-4 border-l-2 border-orange pl-4">
                    <p className="text-sm leading-6 text-snow">{moment.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-basalt-line">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,107,44,0.12),_transparent_60%)]" />
          <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Want your own calls torn down like this — every week?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-snow-dim">
              This was a free one. The film room does this on your calls,
              every single week, with a coach who tells you the truth.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Apply for Coaching
            </Link>
          </div>
        </section>

        <Newsletter content={newsletterContent} />
      </main>
      <Footer />
    </div>
  );
}
