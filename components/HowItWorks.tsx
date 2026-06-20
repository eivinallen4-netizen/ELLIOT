import {
  IconSend,
  IconPhoneCall,
  IconUpload,
  IconRotate,
  IconCalendarCheck,
} from "./icons";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    icon: IconSend,
    title: "Apply",
    body: "Two minutes. Tell me where you're stuck — ramping, plateaued, on a PIP, whatever it is. I don't need your resume, I need your honesty.",
  },
  {
    number: "02",
    icon: IconPhoneCall,
    title: "Get on a 15-minute screen",
    body: "I check for coachable, not credentialed. If you're a fit, you get the price and your start date on that same call — no callback games.",
  },
  {
    number: "03",
    icon: IconUpload,
    title: "Send your first calls",
    body: "Accepted reps start within a week. Send me your real calls — the good, the cringe, all of it. I've heard worse.",
  },
  {
    number: "04",
    icon: IconRotate,
    title: "Show up weekly. Repeat.",
    body: "One film session a week. Do the work between sessions and your calls start sounding like a different person, fast.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-basalt-line bg-basalt-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            HOW IT WORKS
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
            From application to your first gut-check, in under a week.
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-basalt-line sm:block" />
          <div className="grid gap-10 sm:grid-cols-4 sm:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange bg-basalt-raised font-display text-sm font-bold text-orange">
                  {step.number}
                </span>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-basalt-line bg-basalt text-orange">
                    <step.icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-snow">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-snow-dim">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-orange bg-basalt p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
              <IconCalendarCheck className="h-4 w-4" />
            </span>
            <p className="font-display text-xs font-semibold tracking-[0.15em] text-snow-dim">
              THE GUARANTEE
            </p>
          </div>
          <p className="mt-3 max-w-2xl text-base leading-7 text-snow">
            Show up to every session, send your calls every week, and run
            the lines I give you. Do that for 30 days and book more
            meetings — or I keep coaching you until you do, free. I can
            guarantee the work. I can&apos;t guarantee it for reps who
            ghost the sessions and then wonder why nothing changed.
          </p>
        </div>
      </div>
    </section>
  );
}
