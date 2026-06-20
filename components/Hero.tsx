import Image from "next/image";
import Link from "next/link";
import TopoLines from "./TopoLines";
import { IconTarget, IconPhoneCall } from "./icons";

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

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:py-20 lg:gap-12 lg:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="order-2 lg:order-none">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            THE FILM ROOM FOR SALES
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-6xl">
            You don&apos;t have a pitch problem. You have a sounds-like-a-scared-intern problem.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-snow-dim">
            Send me your real calls. I&apos;ll rip them apart, line by line,
            every single week — no frameworks, no fluff, just film and the
            truth about what you actually sound like on the phone.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/apply"
              className="rounded-full bg-orange px-8 py-4 text-center text-base font-semibold text-basalt shadow-lg shadow-orange/20 transition-colors hover:bg-orange-dim"
            >
              Get In The Film Room
            </Link>
            <a
              href="#sneak-peek"
              className="text-center text-sm font-medium text-snow-dim underline-offset-4 transition-colors hover:text-snow hover:underline"
            >
              Watch Me Wreck a Call
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs font-medium text-snow-dim">
            <IconPhoneCall className="h-3.5 w-3.5 flex-shrink-0 text-orange" />
            Two minutes to apply. I&apos;ll give you the price myself on a 15-minute call — no games.
          </p>

          <p className="mt-6 text-sm text-snow-dim">
            Built for SDRs, BDRs, and early AEs who actually want to get
            good — not veterans coasting on muscle memory or script hunters
            hoping for a magic line. Cohorts are capped. Don&apos;t be the
            one who applied a week too late.
          </p>
        </div>

        <div className="order-1 rounded-2xl border border-basalt-line bg-basalt-raised p-6 sm:p-8 lg:order-none">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 rounded-full bg-basalt px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-snow-dim">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
              LIVE CALL TRANSCRIPT
            </span>
            <span className="font-display text-xs text-snow-dim">02:47</span>
          </div>
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-basalt">
            <div className="hero-progress h-full w-full origin-left rounded-full bg-orange/70" />
          </div>

          <p className="mt-6 font-display text-lg leading-snug text-snow">
            &ldquo;I&apos;ve watched every video. I know the frameworks
            cold. Then a prospect pushes back for real and I just...
            freeze. Nobody&apos;s actually listening to my calls and
            telling me the truth.&rdquo;
          </p>

          <div className="mt-6 h-px bg-basalt-line" />

          <div className="mt-5 flex items-start gap-3 rounded-lg border border-orange/30 bg-basalt px-3 py-2.5">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
              <IconTarget className="h-3 w-3" />
            </span>
            <p className="text-xs leading-5 text-snow-dim">
              <span className="font-semibold text-orange">COACH NOTE —</span>{" "}
              Every rep, before I get my hands on them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
