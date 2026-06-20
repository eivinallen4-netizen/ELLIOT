"use client";

import { useActionState } from "react";
import { subscribeAction, type SubscribeState } from "@/app/actions/newsletter";
import type { NewsletterContent } from "@/lib/newsletter";

const initialState: SubscribeState = { status: "idle", message: "" };

export default function Newsletter({
  content,
}: {
  content: NewsletterContent;
}) {
  const [state, formAction, pending] = useActionState(
    subscribeAction,
    initialState
  );

  return (
    <section id="newsletter" className="border-y border-basalt-line bg-basalt-raised">
      <div className="mx-auto max-w-2xl px-6 py-12 text-center">
        <p className="font-display text-xs font-medium tracking-[0.2em] text-orange">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-xl font-bold leading-tight text-snow sm:text-2xl">
          {content.headline}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-snow-dim">
          {content.subhead}
        </p>

        <form
          action={formAction}
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            placeholder="you@yourinbox.com"
            className="flex-1 rounded-full border border-basalt-line bg-basalt px-5 py-3 text-sm text-snow placeholder:text-snow-dim focus:border-orange focus:outline-none"
          />
          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim disabled:opacity-60"
          >
            {pending ? "Subscribing…" : content.ctaLabel}
          </button>
        </form>

        <p
          aria-live="polite"
          className={`mt-3 text-sm ${
            state.status === "error" ? "text-orange" : "text-snow-dim"
          }`}
        >
          {state.message ||
            "No spam. Unsubscribe whenever, no hard feelings. One real call torn apart, straight to your inbox, every week."}
        </p>
      </div>
    </section>
  );
}
