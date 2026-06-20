import { IconWaveform } from "./icons";
import Reveal from "./Reveal";

const QUOTES = [
  "I finally know what to say the second they push back.",
  "I stopped sounding like a telemarketer.",
  "I booked more this month than the last three combined.",
  "I got off the PIP — then got promoted to AE.",
  "I can hear myself getting better on the recordings.",
];

export default function Outcomes() {
  return (
    <section id="results" className="border-b border-basalt-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            WHAT REPS SAY
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
            Not &ldquo;learn the framework.&rdquo; Freeze-on-the-phone to
            dangerous-on-the-phone.
          </h2>
          <p className="mt-4 text-base leading-7 text-snow-dim">
            These aren&apos;t testimonials some agency wrote for us. They&apos;re
            what reps say in the film room, the week after the call that
            used to make them freeze.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((quote, i) => (
            <Reveal
              key={quote}
              delay={i * 80}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <blockquote className="h-full rounded-xl border border-basalt-line bg-basalt-raised p-6 transition-colors hover:border-orange/40">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-basalt text-orange">
                  <IconWaveform className="h-4 w-4" />
                </span>
                <p className="mt-4 font-display text-lg leading-snug text-snow">
                  &ldquo;{quote}&rdquo;
                </p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
