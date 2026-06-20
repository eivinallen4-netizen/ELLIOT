export default function Positioning() {
  return (
    <section className="border-b border-basalt-line bg-basalt-raised/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
          THE ALTERNATIVE TO COURSES
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
          I&apos;m not selling you a script. I&apos;m putting you on tape.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-snow-dim">
          You bought the course. You&apos;ve got the framework memorized
          word for word. The methodology gurus, the LinkedIn thought
          daddies, the bootcamps, the endless free YouTube — all of it is
          one-to-many, theory-first, and not one of them has ever heard
          your actual voice on a live call. I do. Every single week. And
          I&apos;ll tell you exactly what I hear, even when it stings.
        </p>

        <blockquote className="mt-10 rounded-2xl border-l-4 border-orange bg-basalt p-8">
          <p className="font-display text-xl leading-snug text-snow sm:text-2xl">
            For hungry, coachable reps who&apos;ve memorized every framework
            and still choke the second a prospect pushes back, Top
            Mountaineer is the film room for sales — real annotated calls
            plus weekly 1:1 coaching on your own recordings, not someone
            else&apos;s highlight reel. I&apos;m not here to hype you up.
            I&apos;m here to make you dangerous on the phone, even if it
            takes a few uncomfortable Tuesdays.
          </p>
        </blockquote>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-basalt-line p-6">
            <p className="font-display text-xs font-semibold tracking-[0.15em] text-snow-dim">
              WHAT I SAY
            </p>
            <p className="mt-3 text-base text-snow">
              &ldquo;Here&apos;s the exact line. Here&apos;s why it works.
              Here&apos;s me blowing it on a real call so you
              don&apos;t.&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-basalt-line p-6">
            <p className="font-display text-xs font-semibold tracking-[0.15em] text-snow-dim">
              WHAT I&apos;LL NEVER SAY
            </p>
            <p className="mt-3 text-base text-snow-dim">
              &ldquo;Unlock your sales potential and crush your
              goals!&rdquo; — said no one with an actual quota, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
