const FAQS = [
  {
    q: "How much does this cost?",
    a: "Depends on your stage and which cohort you'd join — that's literally what the 15-minute call is for. Apply, get on the call, I'll tell you straight. No pricing page Easter eggs.",
  },
  {
    q: "How much time does this actually take each week?",
    a: "One session, plus however long it takes you to send your calls in. Most reps spend under an hour a week on top of actually selling — so 'I don't have time' isn't going to fly.",
  },
  {
    q: "What if I'm not allowed to record my calls?",
    a: "Most dialers, CRMs, and conferencing tools you already use — Gong, Zoom, Aircall, your phone system — are already recording your calls whether you think about it or not. I just need access to what's already being captured. Tell me your stack when you apply.",
  },
  {
    q: "What if I'm not good enough yet?",
    a: "Good — that's the whole point. This isn't for reps who already have it figured out. It's for reps willing to sound rough on a recording for a few weeks before they sound dangerous on a call.",
  },
  {
    q: "What if it doesn't work?",
    a: "Show up, send your calls, run the lines I give you for 30 days. Book more meetings? It worked. Did the work and nothing moved? I keep coaching you until it does — on me.",
  },
  {
    q: "Does this work for my industry?",
    a: "The method works on any commission-driven phone or video seller — SaaS, fintech, insurance, agency, services. If you pick up a phone or hop on Zoom to close, it applies to you.",
  },
  {
    q: "I already know the frameworks. Is this still for me?",
    a: "Knowing the framework on a whiteboard and running it under pressure on a live call are two completely different skills. If you freeze the second a prospect pushes back, yes — this is exactly for you.",
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
