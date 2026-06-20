import Image from "next/image";
import { IconLinkedIn, IconTikTok, IconX } from "./icons";

const LINKS = [
  { href: "/#for-you", label: "Who It's For" },
  { href: "/#method", label: "The Method" },
  { href: "/pricing", label: "Pricing" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/free", label: "Free Teardown" },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <Image
          src="/Brand/logos/logo-primary-on-dark.svg"
          alt="Top Mountaineer"
          width={160}
          height={28}
        />

        <nav className="flex flex-wrap gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-snow-dim transition-colors hover:text-snow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Top Mountaineer on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-basalt-line text-snow-dim transition-colors hover:border-snow-dim hover:text-snow"
          >
            <IconLinkedIn className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Top Mountaineer on TikTok"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-basalt-line text-snow-dim transition-colors hover:border-snow-dim hover:text-snow"
          >
            <IconTikTok className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Top Mountaineer on X"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-basalt-line text-snow-dim transition-colors hover:border-snow-dim hover:text-snow"
          >
            <IconX className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-basalt-line px-6 py-6 text-center text-xs text-snow-dim">
        © {new Date().getFullYear()} Top Mountaineer. We don&apos;t sell
        scripts — we put a real coach on your real calls, every week.
      </div>
    </footer>
  );
}
