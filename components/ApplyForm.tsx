"use client";

import { useActionState } from "react";
import { applyAction, type ApplyState } from "@/app/actions/apply";

const initialState: ApplyState = { status: "idle", message: "" };

const ROLES = ["SDR / BDR", "Early AE (0–4 yrs)", "Sales Manager", "Other"];
const RECORDING_OPTIONS = [
  "Yes, my calls are already recorded",
  "Not yet, but I can set it up",
  "Not sure",
];

export default function ApplyForm() {
  const [state, formAction, pending] = useActionState(applyAction, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-orange/40 bg-basalt-raised p-8 text-center">
        <p className="font-display text-xs font-semibold tracking-[0.15em] text-orange">
          APPLICATION RECEIVED
        </p>
        <p className="mt-4 font-display text-2xl font-bold leading-snug text-snow">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-snow-dim">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="rounded-lg border border-basalt-line bg-basalt px-4 py-3 text-sm text-snow placeholder:text-snow-dim/60 focus:border-orange focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-snow-dim">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@yourinbox.com"
            className="rounded-lg border border-basalt-line bg-basalt px-4 py-3 text-sm text-snow placeholder:text-snow-dim/60 focus:border-orange focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="role" className="text-xs font-medium text-snow-dim">
          Which is closest to you?
        </label>
        <select
          id="role"
          name="role"
          required
          defaultValue=""
          className="rounded-lg border border-basalt-line bg-basalt px-4 py-3 text-sm text-snow focus:border-orange focus:outline-none"
        >
          <option value="" disabled>
            Select one
          </option>
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="obstacle" className="text-xs font-medium text-snow-dim">
          Where are you actually stuck right now?
        </label>
        <textarea
          id="obstacle"
          name="obstacle"
          required
          minLength={10}
          rows={4}
          placeholder="Ramping and missing quota, plateaued for months, on a PIP, freezing the second they push back — give it to me straight."
          className="resize-none rounded-lg border border-basalt-line bg-basalt px-4 py-3 text-sm text-snow placeholder:text-snow-dim/60 focus:border-orange focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="recording" className="text-xs font-medium text-snow-dim">
          Can your calls already be recorded? (Gong, Zoom, Aircall, your phone system)
        </label>
        <select
          id="recording"
          name="recording"
          required
          defaultValue=""
          className="rounded-lg border border-basalt-line bg-basalt px-4 py-3 text-sm text-snow focus:border-orange focus:outline-none"
        >
          <option value="" disabled>
            Select one
          </option>
          {RECORDING_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send My Application"}
      </button>

      <p
        aria-live="polite"
        className={`text-sm ${
          state.status === "error" ? "text-orange" : "text-snow-dim"
        }`}
      >
        {state.message ||
          "Two minutes to apply. I screen for coachable, not credentialed — so don't sweat the resume."}
      </p>
    </form>
  );
}
