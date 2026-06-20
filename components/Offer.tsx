const INCLUDES = [
  {
    title: "Weekly 1:1 film session",
    body: "Your coach reviews your actual calls from that week and tears them down live — not a templated call review off someone else's script.",
  },
  {
    title: "A written breakdown after every session",
    body: "The exact moments, the why behind them, and the line to run next time — in writing, so you're not relying on memory two days later.",
  },
  {
    title: "Access to the full film library",
    body: "Every tagged objection, recovery, and blown call from the whole cohort. You study more reps than just yourself, every week.",
  },
  {
    title: "A playbook built from your own calls",
    body: "Not a generic script. The exact recoveries that work on your prospects, in your voice, pulled straight from your own recordings.",
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
            Here&apos;s exactly what happens every week you&apos;re in.
          </h2>
          <p className="mt-4 text-base leading-7 text-snow-dim">
            No vague &ldquo;membership.&rdquo; No drip-fed video course
            gathering dust in a portal. Here&apos;s the whole stack.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {INCLUDES.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-basalt-line bg-basalt-raised p-6"
            >
              <h3 className="font-display text-lg font-semibold text-snow">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-snow-dim">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-basalt-line bg-basalt-raised/40 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.15em] text-orange">
              PRICING
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-snow-dim">
              Coaching is application-based, and price depends on your
              stage and the cohort you&apos;d join. We&apos;ll tell you
              straight on your screening call — no hidden tiers, no
              upsell after you&apos;ve already paid.
            </p>
          </div>
          <a
            href="#apply"
            className="flex-shrink-0 rounded-full bg-orange px-7 py-3.5 text-center text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
          >
            Apply &amp; Get Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
