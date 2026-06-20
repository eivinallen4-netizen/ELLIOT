import { IconCircleSlash } from "./icons";
import Reveal from "./Reveal";

const TRIGGERS = [
  "Just landed your first sales role and it's sink-or-swim with zero real coaching",
  "Ramping and missing quota — scared of a PIP, or already on one",
  "Plateaued: booking the same number for months and can't break through",
  "Gunning for SDR → AE and need real closing reps, not theory",
  "Got passed over for a promotion",
  "Stuck under a manager who's too busy to actually coach calls",
  "Switching industries and need to retool fast",
];

const NOT_FOR = [
  "Tenured reps who already know it all",
  "People hunting for a magic script",
  "Tire-kickers who won't put in the work",
];

export default function WhoItsFor() {
  return (
    <section id="for-you" className="border-b border-basalt-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            WHO IT&apos;S FOR
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
            Built for reps who are willing to do the work
          </h2>
          <p className="mt-4 text-base leading-7 text-snow-dim">
            Early-to-mid-career phone and video outbound reps — SDRs,
            BDRs, and SMB/early AEs, roughly years 0–4. Commission-motivated,
            competitive, and coachable. That last one isn&apos;t a hope —
            it&apos;s a qualification we screen for before you ever get a
            seat in the room.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {TRIGGERS.map((trigger, i) => (
            <Reveal
              key={trigger}
              as="li"
              delay={i * 60}
              className="flex h-full gap-3 rounded-xl border border-basalt-line bg-basalt-raised p-5 transition-colors hover:border-orange/40"
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange" />
              <span className="text-sm leading-6 text-snow">{trigger}</span>
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
            Saying this out loud sharpens everything. We&apos;d rather turn
            these people away on the screening call than dilute the room.
          </p>
          <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-8">
            {NOT_FOR.map((item) => (
              <li key={item} className="text-sm font-medium text-snow">
                — {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
