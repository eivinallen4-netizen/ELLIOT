import SneakPeekVideo from "./SneakPeekVideo";

export default function SneakPeek() {
  return (
    <section id="sneak-peek" className="border-b border-basalt-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
            SNEAK PEEK
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
            Watch me drag a rep&apos;s call, kindly. Mostly kindly.
          </h2>
          <p className="mt-4 text-base text-snow-dim">
            Real line, real reason it works, and yes — a real blown moment
            of my own in there too. This is one straight rip from an actual
            coaching session, not a highlight reel.
          </p>
        </div>

        <div className="mt-10">
          <SneakPeekVideo />
        </div>
      </div>
    </section>
  );
}
