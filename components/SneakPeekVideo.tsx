"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SneakPeekVideo({
  src = "/sneak-peek.mp4",
}: {
  src?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-basalt-line bg-basalt-raised">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play sneak peek of a real coaching call breakdown"
          className="group relative flex h-full w-full flex-col items-center justify-center gap-6 bg-[radial-gradient(circle_at_50%_35%,_var(--basalt-raised),_var(--basalt))]"
        >
          {/* Placeholder video frame — swap for a real call capture, 1280x720 (16:9), 2x export 2560x1440 */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 opacity-40 transition-opacity group-hover:opacity-55">
            <div className="flex items-center justify-between">
              <span className="rounded bg-basalt/70 px-2 py-1 font-display text-[10px] font-semibold tracking-[0.1em] text-snow">
                04:12
              </span>
              <span className="h-2 w-2 rounded-full bg-orange" />
            </div>
            <div className="mx-auto flex h-10 w-2/3 items-center justify-center gap-[3px]">
              {[6, 14, 9, 18, 11, 16, 7, 20, 12, 8, 15, 10, 17, 9, 13].map(
                (h, i) => (
                  <span
                    key={i}
                    className="w-[3px] rounded-full bg-snow-dim"
                    style={{ height: `${h * 2}px` }}
                  />
                ),
              )}
            </div>
            <div className="mx-auto max-w-sm rounded bg-basalt/70 px-3 py-1.5 text-center text-xs text-snow-dim">
              &ldquo;Totally fair — that&apos;s exactly what people say
              right before they switch vendors.&rdquo;
            </div>
          </div>

          <Image
            src="/Brand/logos/icon-on-dark.svg"
            alt=""
            width={72}
            height={52}
            aria-hidden
            className="relative opacity-30 transition-opacity group-hover:opacity-50"
          />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-orange shadow-lg shadow-orange/30 transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-basalt">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="relative font-display text-sm font-semibold tracking-[0.15em] text-snow">
            WATCH THE DAMAGE
          </span>
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sneak peek video"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-basalt/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-basalt-line bg-basalt text-snow transition-colors hover:border-snow-dim"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path
                d="M5 5l14 14M19 5 5 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl overflow-hidden rounded-2xl border border-basalt-line bg-basalt shadow-2xl"
          >
            <video
              src={src}
              controls
              autoPlay
              className="aspect-video w-full"
              onError={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
