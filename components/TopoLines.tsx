export default function TopoLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <path
        d="M-20 220 C 120 180, 200 260, 320 210 S 520 120, 640 190 S 860 270, 1000 200 S 1180 140, 1220 180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M-20 250 C 140 215, 230 285, 360 245 S 560 165, 680 230 S 880 295, 1010 235 S 1190 180, 1220 215"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <path
        d="M-20 185 C 100 140, 190 220, 300 165 S 500 70, 610 140 S 840 230, 980 155 S 1170 90, 1220 130"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.25"
      />
    </svg>
  );
}
