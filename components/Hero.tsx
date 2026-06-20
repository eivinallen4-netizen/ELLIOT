import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-basalt-line">
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
            <a
              href="#apply"
              className="rounded-full bg-orange px-7 py-3.5 text-center text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Apply for Coaching
            </a>
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
          <p className="font-display text-lg leading-snug text-snow">
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
