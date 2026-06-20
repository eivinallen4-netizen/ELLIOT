import {
  IconUpload,
  IconTarget,
  IconLayers,
  IconCompass,
} from "./icons";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    icon: IconUpload,
    title: "Send your real calls",
    body: "Every week, your live calls go into the film room — the good, the bad, and the ones you'd rather forget.",
  },
  {
    number: "02",
    icon: IconTarget,
    title: "Get torn down, 1:1",
    body: "A real coach reviews your recordings and breaks down what you did, why it worked or didn't, and the exact line to use next time.",
  },
  {
    number: "03",
    icon: IconLayers,
    title: "Build the habit of studying film",
    body: "Every objection, every recovery, every blown call gets tagged with the why — building the largest annotated library of real sales calls as you go.",
  },
  {
    number: "04",
    icon: IconCompass,
    title: "Show up next week dangerous",
    body: "You don't just fix last week's call — you walk into your next one already knowing the line, the recovery, and the close before the prospect says a word.",
  },
];

export default function Method() {
  return (
    <section id="method" className="border-b border-basalt-line bg-basalt-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            THE METHOD
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
            Pro athletes don&apos;t get good reading a playbook PDF.
          </h2>
          <p className="mt-4 text-base leading-7 text-snow-dim">
            They get good watching film with a coach who breaks down
            exactly what they did and why. Sales never had that as a
            standard. I&apos;m building it, one rep at a time.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="group rounded-xl p-1 transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-display text-4xl font-bold text-basalt-line">
                    {step.number}
                  </p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-basalt-line bg-basalt text-orange transition-colors group-hover:border-orange/50">
                    <step.icon />
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-snow">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-snow-dim">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
