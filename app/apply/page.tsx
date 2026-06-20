import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";
import TopoLines from "@/components/TopoLines";

export const metadata: Metadata = {
  title: "Apply for Coaching — Top Mountaineer",
  description:
    "Two minutes to apply. We screen for coachable, not credentialed — tell us where you're stuck and we'll book your 15-minute screen.",
};

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-basalt font-sans text-snow">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-basalt-line">
          <TopoLines className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full text-orange opacity-[0.07]" />
          <div className="relative mx-auto max-w-2xl px-6 py-20 text-center">
            <p className="font-display text-sm font-medium tracking-[0.2em] text-orange">
              APPLY FOR COACHING
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-snow sm:text-5xl">
              Two minutes to apply. No resume required.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-snow-dim">
              We screen for coachable, not credentialed. Tell us where
              you&apos;re stuck and we&apos;ll book a 15-minute call to see
              if it&apos;s a fit — and tell you the price straight, on that
              same call.
            </p>
          </div>
        </section>

        <section className="border-b border-basalt-line">
          <div className="mx-auto max-w-xl px-6 py-16">
            <ApplyForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
