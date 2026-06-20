const STEPS = [
  {
    number: "01",
    title: "Apply",
    body: "Two minutes. Tell us where you're stuck — ramping, plateaued, on a PIP, whatever it is. No resume required.",
  },
  {
    number: "02",
    title: "Get on a 15-minute screen",
    body: "We check for coachable, not credentialed. If you're a fit, we'll tell you the price and the start date on that same call.",
  },
  {
    number: "03",
    title: "Send your first calls",
    body: "Accepted reps start within a week. Send your real calls in — the good, the bad, all of it.",
  },
  {
    number: "04",
    title: "Show up weekly. Repeat.",
    body: "One film session a week. Do the work between sessions, and the calls start changing fast.",
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
            From application to your first teardown, in under a week.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-12 rounded-2xl border-l-4 border-orange bg-basalt p-8">
          <p className="font-display text-xs font-semibold tracking-[0.15em] text-snow-dim">
            THE GUARANTEE
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-snow">
            Show up to every session, send your calls every week, and run
            the lines we give you. Do that for 30 days and book more
            meetings — or we keep coaching you until you do, at no extra
            cost. We can guarantee the work. We can&apos;t guarantee it
            for reps who ghost the sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
