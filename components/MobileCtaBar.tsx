"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroHeight = window.innerHeight * 0.8;
    const onScroll = () => setVisible(window.scrollY > heroHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`mobile-cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-basalt-line bg-basalt/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/apply"
        className="block rounded-full bg-orange px-7 py-3.5 text-center text-sm font-semibold text-basalt transition-colors hover:bg-orange-dim"
      >
        Get In The Film Room
      </Link>
    </div>
  );
}
