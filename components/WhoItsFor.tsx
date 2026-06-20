import Link from "next/link";
import {
  IconCircleSlash,
  IconLifeBuoy,
  IconAlertTriangle,
  IconPlateau,
  IconClimb,
  IconSetback,
  IconBusyManager,
  IconShuffle,
} from "./icons";
import Reveal from "./Reveal";

const TRIGGERS = [
  {
    text: "Just got your first sales job, handed a headset and a script nobody wrote for you, and zero real coaching",
    icon: IconLifeBuoy,
  },
  {
    text: "Ramping, missing quota, and sweating a PIP — or already living on one",
    icon: IconAlertTriangle,
  },
  {
    text: "Plateaued. Booking the same number every month like it's a subscription",
    icon: IconPlateau,
  },
  {
    text: "Gunning for the AE promotion and need real closing reps, not another LinkedIn carousel",
    icon: IconClimb,
  },
  {
    text: "Got passed over for the promotion you were sure was yours",
    icon: IconSetback,
  },
  {
    text: "Stuck under a manager who's too busy firefighting to ever actually listen to a call",
    icon: IconBusyManager,
  },
  {
    text: "Switching industries and need to retool fast, not in six months",
    icon: IconShuffle,
  },
];

const NOT_FOR = [
  "Tenured reps who think they've got nothing left to learn",
  "Script hunters looking for one magic line",
  "Tire-kickers who ghost the work and blame the coach",
];

export default function WhoItsFor() {
  return (
    <section id="for-you" className="border-b border-basalt-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            IS THIS YOU?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
            Built for reps who actually want to get better, not just talk about it
          </h2>
          <p className="mt-4 text-base leading-7 text-snow-dim">
            I work with phone and video reps in years 0–4 — SDRs, BDRs,
            and SMB/early AEs. Hungry for commission, competitive, and
            coachable. That last word isn&apos;t a vibe — it&apos;s a
            requirement I screen for before you ever get a seat in my
            room.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {TRIGGERS.map((trigger, i) => (
            <Reveal
              key={trigger.text}
              as="li"
              delay={i * 60}
              className="flex h-full gap-4 rounded-xl border border-basalt-line bg-basalt-raised p-5 transition-colors hover:border-orange/40"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-basalt-line bg-basalt text-orange">
                <trigger.icon className="h-4 w-4" />
              </span>
              <span className="text-sm leading-6 text-snow">
                {trigger.text}
              </span>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-basalt-line bg-basalt p-8">
          <div className="flex items-center gap-2 text-snow-dim">
            <IconCircleSlash className="h-4 w-4" />
            <p className="font-display text-xs font-semibold tracking-[0.15em]">
              WHO THIS IS NOT FOR
            </p>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-snow-dim">
            Saying this out loud sharpens everything. I&apos;d rather turn
            you away on the screening call than take your money and waste
            both our Tuesdays.
          </p>
          <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-8">
            {NOT_FOR.map((item) => (
              <li key={item} className="text-sm font-medium text-snow">
                — {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium text-snow">
            Still sounds like you, rookie?
          </p>
          <Link
            href="/apply"
            className="rounded-full bg-orange px-7 py-3.5 text-center text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
          >
            See If You Make The Cut
          </Link>
        </div>
      </div>
    </section>
  );
}
