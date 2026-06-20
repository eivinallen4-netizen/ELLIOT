"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#for-you", label: "Is This You?" },
  { href: "/#method", label: "The Method" },
  { href: "/pricing", label: "What You Get" },
  { href: "/results", label: "Receipts" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/free", label: "Free Teardown" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (next: boolean) => {
    setMenuOpen(next);
    if (typeof document !== "undefined") {
      document.body.dataset.menuOpen = next ? "true" : "false";
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-basalt-line/80 bg-basalt/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Top Mountaineer home"
          onClick={() => toggleMenu(false)}
        >
          <Image
            src="/Brand/logos/logo-primary-on-dark.svg"
            alt="Top Mountaineer"
            width={183}
            height={32}
            priority
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

        <Link
          href="/apply"
          className="hidden rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim md:inline-block"
        >
          Get In The Film Room
        </Link>

        <button
          type="button"
          onClick={() => toggleMenu(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-basalt-line text-snow md:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`block h-[1.5px] w-full bg-snow transition-transform ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-snow transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-snow transition-transform ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-basalt-line/80 transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => toggleMenu(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-snow-dim transition-colors hover:bg-basalt-raised hover:text-snow"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-orange px-5 py-3 text-center text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
          >
            Get In The Film Room
          </Link>
        </nav>
      </div>
    </header>
  );
}
