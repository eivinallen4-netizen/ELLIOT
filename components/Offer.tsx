import Link from "next/link";
import {
  IconCalendarCheck,
  IconFileText,
  IconLayers,
  IconBookOpen,
} from "./icons";
import Reveal from "./Reveal";

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

export default function Offer() {
  return (
    <section id="pricing" className="border-b border-basalt-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            WHAT&apos;S IN THE FILM ROOM
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
            Here&apos;s exactly what happens to you every week you&apos;re in.
          </h2>
          <p className="mt-4 text-base leading-7 text-snow-dim">
            No vague &ldquo;membership.&rdquo; No drip-fed video course
            gathering dust in some portal you forgot the login to.
            Here&apos;s the whole stack.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {INCLUDES.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 80}
              className="rounded-xl border border-basalt-line bg-basalt-raised p-6 transition-colors hover:border-orange/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-basalt-line bg-basalt text-orange">
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

        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-basalt-line bg-basalt-raised/40 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.15em] text-orange">
              PRICING
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-snow-dim">
              Coaching is application-based, and price depends on your
              stage and which cohort you&apos;d join. I&apos;ll tell you
              straight on the 15-minute screening call — no hidden tiers,
              no surprise upsell after you&apos;ve already paid me.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="rounded-full border border-basalt-line px-7 py-3.5 text-center text-sm font-semibold text-snow transition-colors hover:border-snow-dim"
            >
              See Full Pricing
            </Link>
            <Link
              href="/apply"
              className="rounded-full bg-orange px-7 py-3.5 text-center text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
            >
              Get In The Film Room
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
