"use client";

import { useState } from "react";
import Image from "next/image";

export default function SneakPeekVideo({
  src = "/sneak-peek.mp4",
}: {
  src?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-basalt-line bg-basalt-raised">
      {playing ? (
        <video
          src={src}
          controls
          autoPlay
          className="h-full w-full"
          onError={() => setPlaying(false)}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play sneak peek of a real coaching call breakdown"
          className="group flex h-full w-full flex-col items-center justify-center gap-6 bg-[radial-gradient(circle_at_50%_35%,_var(--basalt-raised),_var(--basalt))]"
        >
          <Image
            src="/Brand/logos/icon-on-dark.svg"
            alt=""
            width={72}
            height={52}
            aria-hidden
            className="opacity-30 transition-opacity group-hover:opacity-50"
          />
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange shadow-lg shadow-orange/30 transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-basalt">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.15em] text-snow">
            WATCH THE TEARDOWN
          </span>
        </button>
      )}
    </div>
  );
}
