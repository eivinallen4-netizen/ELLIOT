import Link from "next/link";
import { IconWaveform } from "./icons";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/data/testimonials";

const QUOTES = TESTIMONIALS.slice(0, 5);

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
          {QUOTES.map((item, i) => (
            <Reveal
              key={item.quote}
              delay={i * 80}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <blockquote className="flex h-full flex-col rounded-xl border border-basalt-line bg-basalt-raised p-6 transition-colors hover:border-orange/40">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-basalt text-orange">
                  <IconWaveform className="h-4 w-4" />
                </span>
                <p className="mt-4 font-display text-lg leading-snug text-snow">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 text-xs font-medium tracking-[0.05em] text-snow-dim">
                  {item.name} &middot; {item.category}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-snow-dim">
            Ready to stop guessing and start hearing yourself actually get better?
          </p>
          <Link
            href="/apply"
            className="rounded-full bg-orange px-8 py-3.5 text-center text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
          >
            Get Your Calls Torn Down
          </Link>
        </div>
      </div>
    </section>
  );
}
