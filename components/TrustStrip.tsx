"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TrustStrip() {
  const categories = Array.from(
    new Set(TESTIMONIALS.map((t) => t.category)),
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [paused]);

  const active = TESTIMONIALS[index];

  return (
    <div
      className="border-b border-basalt-line bg-basalt-raised/40 py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 text-center sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() =>
            setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
          }
          aria-label="Previous quote"
          className="hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-basalt-line text-snow-dim transition-colors hover:border-snow-dim hover:text-snow sm:flex"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
            <path
              d="M15 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-base text-snow">
            &ldquo;{active.quote}&rdquo;{" "}
            <span className="text-snow-dim">— {active.name}</span>
          </p>
          <p className="text-xs text-snow-dim">
            {TESTIMONIALS.length} anonymized rep quotes across{" "}
            {categories.length} outcomes.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
          aria-label="Next quote"
          className="hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-basalt-line text-snow-dim transition-colors hover:border-snow-dim hover:text-snow sm:flex"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 pb-3" role="tablist" aria-label="Quote selector">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show quote ${i + 1} of ${TESTIMONIALS.length}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-orange" : "w-1.5 bg-basalt-line hover:bg-snow-dim"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
