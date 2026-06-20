import Image from "next/image";

const LINKS = [
  { href: "/#for-you", label: "Who It's For" },
  { href: "/#method", label: "The Method" },
  { href: "/#pricing", label: "What You Get" },
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

        <div className="flex gap-5 text-sm text-snow-dim">
          <a href="#" className="hover:text-snow">
            LinkedIn
          </a>
          <a href="#" className="hover:text-snow">
            TikTok
          </a>
          <a href="#" className="hover:text-snow">
            X
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
