const QUOTES = [
  "I finally know what to say the second they push back.",
  "I stopped sounding like a telemarketer.",
  "I booked more this month than the last three combined.",
  "I got off the PIP — then got promoted to AE.",
  "I can hear myself getting better on the recordings.",
];

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
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((quote, i) => (
            <blockquote
              key={quote}
              className={`rounded-xl border border-basalt-line bg-basalt-raised p-6 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <p className="font-display text-lg leading-snug text-snow">
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
