"use client";

import { useActionState, useState } from "react";
import Image from "next/image";
import {
  uploadPlaceholderImageAction,
  type ImageUploadState,
} from "@/app/actions/images";
import type { PlaceholderDef } from "@/lib/placeholders";
import type { ImageMap } from "@/lib/images";

const initialState: ImageUploadState = { status: "idle", message: "" };

function ImagePlaceholderRow({
  placeholder,
  currentSrc,
  adminKey,
}: {
  placeholder: PlaceholderDef;
  currentSrc?: string;
  adminKey: string;
}) {
  const [state, formAction, pending] = useActionState(
    uploadPlaceholderImageAction,
    initialState
  );

  return (
    <li className="flex flex-col gap-3 rounded-xl border border-basalt-line bg-basalt-raised p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-basalt-line bg-basalt">
          {currentSrc ? (
            <Image src={currentSrc} alt="" fill className="object-cover" />
          ) : (
            <span className="flex h-full items-center justify-center text-[10px] text-snow-dim">
              Empty
            </span>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-snow">{placeholder.label}</p>
          <p className="text-xs text-snow-dim">
            {placeholder.page} · {placeholder.width}×{placeholder.height}
          </p>
        </div>
      </div>

      <form action={formAction} className="flex flex-col gap-2 sm:items-end">
        <div className="flex items-center gap-2">
          <input type="hidden" name="key" value={adminKey} />
          <input type="hidden" name="placeholderKey" value={placeholder.key} />
          <input
            type="file"
            name="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml"
            required
            className="max-w-[180px] text-xs text-snow-dim file:mr-2 file:rounded-full file:border-0 file:bg-basalt file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-snow"
          />
          <button
            type="submit"
            disabled={pending || !adminKey}
            className="flex-shrink-0 rounded-full bg-orange px-4 py-1.5 text-xs font-semibold text-basalt transition-colors hover:bg-orange-dim disabled:opacity-60"
          >
            {pending ? "Uploading…" : "Upload"}
          </button>
        </div>
        {state.message && (
          <p
            className={`text-xs ${
              state.status === "error" ? "text-orange" : "text-snow-dim"
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </li>
  );
}

export default function AdminImagesForm({
  placeholders,
  imageMap,
}: {
  placeholders: PlaceholderDef[];
  imageMap: ImageMap;
}) {
  const [adminKey, setAdminKey] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const list = placeholders
      .map((p) => `${p.label} — ${p.width}x${p.height} (${p.page})`)
      .join("\n");
    await navigator.clipboard.writeText(list);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label htmlFor="admin-key" className="text-sm font-medium text-snow">
          Admin key
        </label>
        <input
          id="admin-key"
          type="password"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
          className="max-w-xs rounded-lg border border-basalt-line bg-basalt-raised px-4 py-2.5 text-sm text-snow focus:border-orange focus:outline-none"
        />
        <p className="text-xs text-snow-dim">
          Enter it once — it&apos;s reused for every upload below.
        </p>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="self-start rounded-full border border-basalt-line px-5 py-2.5 text-sm font-medium text-snow transition-colors hover:border-orange"
      >
        {copied ? "Copied!" : "Copy list of needed pictures"}
      </button>

      <ul className="flex flex-col gap-3">
        {placeholders.map((p) => (
          <ImagePlaceholderRow
            key={p.key}
            placeholder={p}
            currentSrc={imageMap[p.key]}
            adminKey={adminKey}
          />
        ))}
      </ul>
    </div>
  );
}
