export default function PhotoSlot({
  label,
  aspect = "aspect-square",
  className = "",
  iconOnly = false,
}: {
  label: string;
  aspect?: string;
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <div
      title={label}
      className={`flex ${aspect} flex-col items-center justify-center ${
        iconOnly ? "gap-0 p-0" : "gap-3 p-6"
      } rounded-2xl border border-dashed border-basalt-line bg-basalt-raised/60 text-center ${className}`}
    >
      <span
        className={`flex items-center justify-center rounded-full border border-basalt-line bg-basalt text-snow-dim ${
          iconOnly ? "h-full w-full" : "h-12 w-12"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
          <path
            d="M4 8h2.5l1.3-2h8.4l1.3 2H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="3.3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
      {!iconOnly && (
        <p className="text-xs font-medium leading-5 text-snow-dim">{label}</p>
      )}
    </div>
  );
}
