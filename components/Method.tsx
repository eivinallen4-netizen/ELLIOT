const STEPS = [
  {
    number: "01",
    title: "Send your real calls",
    body: "Every week, your live calls go into the film room — the good, the bad, and the ones you'd rather forget.",
  },
  {
    number: "02",
    title: "Get torn down, 1:1",
    body: "A real coach reviews your recordings and breaks down what you did, why it worked or didn't, and the exact line to use next time.",
  },
  {
    number: "03",
    title: "Build the habit of studying film",
    body: "Every objection, every recovery, every blown call gets tagged with the why — building the largest annotated library of real sales calls as you go.",
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
            Pro athletes don&apos;t get better from a playbook PDF.
          </h2>
          <p className="mt-4 text-base leading-7 text-snow-dim">
            They get better watching film with a position coach who breaks
            down what they did and why. Sales has never had that as a
            standard. We&apos;re building it.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number}>
              <p className="font-display text-4xl font-bold text-basalt-line">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-snow">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-snow-dim">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
