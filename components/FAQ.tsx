const FAQS = [
  {
    q: "How much does this cost?",
    a: "It depends on your stage and the cohort you'd join — that's exactly what the 15-minute screening call is for. Apply, get on the call, and we'll tell you straight. No pricing page games.",
  },
  {
    q: "How much time does this actually take each week?",
    a: "One coaching session, plus the time it takes to send your calls in. Most reps spend under an hour a week outside their normal selling time.",
  },
  {
    q: "What if I'm not allowed to record my calls?",
    a: "Most dialers, CRMs, and conferencing tools you already use — Gong, Zoom, Aircall, your phone system — are already capturing your calls. We just need access to what's already being recorded. Tell us your stack when you apply.",
  },
  {
    q: "What if I'm not good enough yet?",
    a: "Good — that's who this is for. This isn't for reps who already have it figured out. It's for reps willing to sound rough on a recording before they sound dangerous on the phone.",
  },
  {
    q: "What if it doesn't work?",
    a: "Show up, send your calls, run the lines we give you for 30 days. If you book more meetings, it worked. If you did the work and it didn't move the needle, we keep coaching you until it does — at no extra cost.",
  },
  {
    q: "Does this work for my industry?",
    a: "The method travels to any commission-driven phone or video seller — SaaS, fintech, insurance, agency, services. If you pick up a phone or hop on Zoom to close, it applies.",
  },
  {
    q: "I already know the frameworks. Is this still for me?",
    a: "Knowing the framework and running it under pressure on a live call are two different skills. If you freeze the second a prospect pushes back, this is exactly for you.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-basalt-line">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
          BEFORE YOU APPLY
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
          Questions reps ask before they send their first call in.
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-basalt-line bg-basalt-raised p-5 open:border-orange/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-snow">
                {item.q}
                <span className="flex-shrink-0 text-orange transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-snow-dim">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
