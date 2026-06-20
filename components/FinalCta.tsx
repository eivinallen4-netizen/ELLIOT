export default function FinalCta() {
  return (
    <section id="apply" className="relative overflow-hidden border-b border-basalt-line">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,107,44,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-snow sm:text-5xl">
          Book more meetings in 30 days — guaranteed, if you do the work.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-snow-dim">
          Hear what closing actually sounds like, get your real calls torn
          down every week, and put a real coach in your corner. We select
          for coachable — apply and tell us where you&apos;re stuck. Two
          minutes to apply, one short call to see if you&apos;re a fit.
        </p>
        <a
          href="mailto:coach@topmountaineer.com?subject=Coaching%20Application"
          className="mt-9 inline-block rounded-full bg-orange px-8 py-4 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
        >
          Apply for Coaching
        </a>
        <p className="mt-4 text-xs text-snow-dim">
          We turn away tenured reps, script hunters, and tire-kickers — on
          purpose. Pricing comes after the screen, not before — no
          surprises.
        </p>
      </div>
    </section>
  );
}
