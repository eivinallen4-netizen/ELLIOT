import Image from "next/image";
import Link from "next/link";
import TopoLines from "./TopoLines";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-basalt-line">
      <TopoLines className="pointer-events-none absolute inset-x-0 top-0 h-48 w-full text-snow opacity-[0.07]" />
      <Image
        src="/Brand/logos/icon-on-dark.svg"
        alt=""
        width={640}
        height={464}
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-16 opacity-[0.06] sm:-right-16"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            THE FILM ROOM FOR SALES
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-6xl">
            Hear what closing actually sounds like. Then go sound like that.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-snow-dim">
            Send us your real calls. A real coach tears them down, line by
            line, every single week — so you stop guessing what works and
            start hearing yourself get better, call after call.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-full bg-orange px-7 py-3.5 text-center text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Apply for Coaching
            </Link>
            <a
              href="#sneak-peek"
              className="rounded-full border border-basalt-line px-7 py-3.5 text-center text-sm font-semibold text-snow transition-colors hover:border-snow-dim"
            >
              Watch a Real Teardown
            </a>
          </div>

          <p className="mt-6 text-sm text-snow-dim">
            For coachable SDRs, BDRs, and early AEs who are done guessing
            what closing sounds like — not for tenured reps or script
            hunters. We cap every cohort, so apply before the room fills.
          </p>
        </div>

        <div className="rounded-2xl border border-basalt-line bg-basalt-raised p-8">
          <svg viewBox="0 0 32 24" className="h-7 w-9 text-orange/70" aria-hidden>
            <path
              fill="currentColor"
              d="M9.5 0C4.3 2.6 0 7.7 0 13.4 0 18.2 3 21 7 21c3.6 0 6.2-2.8 6.2-6.2 0-3.2-2.3-5.6-5.3-5.6-.5 0-1 .1-1.4.2C7 6 9.3 3.3 12.6 1.6L9.5 0Zm17.8 0c-5.2 2.6-9.5 7.7-9.5 13.4 0 4.8 3 7.6 7 7.6 3.6 0 6.2-2.8 6.2-6.2 0-3.2-2.3-5.6-5.3-5.6-.5 0-1 .1-1.4.2C24.8 6 27.1 3.3 30.4 1.6L27.3 0Z"
            />
          </svg>
          <p className="mt-3 font-display text-lg leading-snug text-snow">
            &ldquo;I&apos;ve watched all the content. I know the
            frameworks. But the second someone pushes back on a live
            call, I still freeze — and nobody&apos;s actually listening to
            my calls and telling me the truth.&rdquo;
          </p>
          <div className="mt-6 h-px bg-basalt-line" />
          <p className="mt-6 text-sm text-snow-dim">
            Every rep, before Top Mountaineer.
          </p>
        </div>
      </div>
    </section>
  );
}
