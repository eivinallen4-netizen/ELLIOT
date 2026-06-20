import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Mountaineer — The Film Room for Sales",
  description:
    "A real coach roasts your real calls, every week, until you stop sounding like a nervous wreck on the phone. Tough love, real recordings, zero participation trophies.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-basalt text-snow">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-orange focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-basalt"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
