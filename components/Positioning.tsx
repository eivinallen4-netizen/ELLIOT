export default function Positioning() {
  return (
    <section className="border-b border-basalt-line bg-basalt-raised/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
          THE ALTERNATIVE TO COURSES
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
          We don&apos;t sell you scripts. We put you in the film room.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-snow-dim">
          The methodology programs, the famous LinkedIn personalities, the
          bootcamps, the endless free YouTube — all of it is one-to-many
          and theory-first. None of it listens to your calls. We do.
        </p>

        <blockquote className="mt-10 rounded-2xl border-l-4 border-orange bg-basalt p-8">
          <p className="font-display text-xl leading-snug text-snow sm:text-2xl">
            For hungry, coachable reps who&apos;ve consumed the theory but
            still freeze on live calls, Top Mountaineer is the film room
            for sales — real annotated calls plus weekly 1:1 coaching on
            your own recordings — unlike the courses and content everyone
            else sells, which teach you the words but never listen to how
            you actually sound.
          </p>
        </blockquote>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-basalt-line p-6">
            <p className="font-display text-xs font-semibold tracking-[0.15em] text-snow-dim">
              WE SAY
            </p>
            <p className="mt-3 text-base text-snow">
              &ldquo;Here&apos;s the exact line. Here&apos;s why it works.
              Here&apos;s me blowing it on a real call so you
              don&apos;t.&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-basalt-line p-6">
            <p className="font-display text-xs font-semibold tracking-[0.15em] text-snow-dim">
              WE NEVER SAY
            </p>
            <p className="mt-3 text-base text-snow-dim">
              &ldquo;Unlock your sales potential and crush your
              goals!&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
