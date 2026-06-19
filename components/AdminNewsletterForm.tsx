"use client";

import { useActionState } from "react";
import {
  updateNewsletterContentAction,
  type AdminState,
} from "@/app/actions/newsletter";
import type { NewsletterContent } from "@/lib/newsletter";

const initialState: AdminState = { status: "idle", message: "" };

export default function AdminNewsletterForm({
  content,
}: {
  content: NewsletterContent;
}) {
  const [state, formAction, pending] = useActionState(
    updateNewsletterContentAction,
    initialState
  );

  return (
    <form action={formAction} className="mt-8 flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="key" className="text-sm font-medium text-snow">
          Admin key
        </label>
        <input
          id="key"
          name="key"
          type="password"
          required
          className="rounded-lg border border-basalt-line bg-basalt-raised px-4 py-2.5 text-sm text-snow focus:border-orange focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="eyebrow" className="text-sm font-medium text-snow">
          Eyebrow
        </label>
        <input
          id="eyebrow"
          name="eyebrow"
          defaultValue={content.eyebrow}
          className="rounded-lg border border-basalt-line bg-basalt-raised px-4 py-2.5 text-sm text-snow focus:border-orange focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="headline" className="text-sm font-medium text-snow">
          Headline
        </label>
        <input
          id="headline"
          name="headline"
          required
          defaultValue={content.headline}
          className="rounded-lg border border-basalt-line bg-basalt-raised px-4 py-2.5 text-sm text-snow focus:border-orange focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="subhead" className="text-sm font-medium text-snow">
          Subhead
        </label>
        <textarea
          id="subhead"
          name="subhead"
          rows={3}
          defaultValue={content.subhead}
          className="rounded-lg border border-basalt-line bg-basalt-raised px-4 py-2.5 text-sm text-snow focus:border-orange focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="ctaLabel" className="text-sm font-medium text-snow">
          Button label
        </label>
        <input
          id="ctaLabel"
          name="ctaLabel"
          required
          defaultValue={content.ctaLabel}
          className="rounded-lg border border-basalt-line bg-basalt-raised px-4 py-2.5 text-sm text-snow focus:border-orange focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-full bg-orange px-6 py-3 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save changes"}
      </button>

      <p
        aria-live="polite"
        className={`text-sm ${
          state.status === "error" ? "text-orange" : "text-snow-dim"
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}
