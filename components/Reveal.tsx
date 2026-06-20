"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClassName = `transition-all duration-700 ease-out ${
    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  } ${className}`;
  const revealStyle = { transitionDelay: visible ? `${delay}ms` : "0ms" };

  if (as === "li") {
    return (
      <li
        ref={ref as React.RefObject<HTMLLIElement>}
        style={revealStyle}
        className={revealClassName}
      >
        {children}
      </li>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={revealStyle}
      className={revealClassName}
    >
      {children}
    </div>
  );
}
