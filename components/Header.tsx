import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#for-you", label: "Who It's For" },
  { href: "#method", label: "The Method" },
  { href: "#results", label: "Results" },
  { href: "#newsletter", label: "Newsletter" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-basalt-line/80 bg-basalt/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center" aria-label="Top Mountaineer home">
          <Image
            src="/Brand/logos/logo-primary-on-dark.svg"
            alt="Top Mountaineer"
            width={183}
            height={32}
            preload
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-snow-dim transition-colors hover:text-snow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#apply"
          className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
        >
          Apply for Coaching
        </a>
      </div>
    </header>
  );
}
