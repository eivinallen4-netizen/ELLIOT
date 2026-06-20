"use client";

import { useMemo, useState } from "react";
import PhotoSlot from "./PhotoSlot";
import type { Testimonial } from "@/data/testimonials";

export default function ResultsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(testimonials.map((t) => t.category)))],
    [testimonials]
  );
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "border-orange bg-orange text-basalt"
                : "border-basalt-line text-snow-dim hover:border-snow-dim hover:text-snow"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((t) => (
          <div
            key={t.quote}
            className="flex flex-col gap-4 rounded-xl border border-basalt-line bg-basalt-raised p-6 transition-colors hover:border-orange/40"
          >
            <PhotoSlot
              label="Rep photo"
              iconOnly
              aspect="aspect-square"
              className="h-12 w-12 flex-shrink-0 self-start"
            />
            <p className="font-display text-lg leading-snug text-snow">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-auto text-sm text-snow-dim">{t.name}</p>
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-center text-sm text-snow-dim">
          Nothing in this category yet — give it time, or go book the
          meeting that becomes the next one.
        </p>
      )}
    </div>
  );
}
