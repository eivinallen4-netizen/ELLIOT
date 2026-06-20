import Link from "next/link";

export const metadata = {
  title: "Admin — Top Mountaineer",
  robots: { index: false, follow: false },
};

export default function AdminIndexPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-16">
      <h1 className="font-display text-2xl font-bold text-snow">Admin</h1>
      <p className="mt-2 text-sm text-snow-dim">
        Edit the parts of the live site that change without a deploy.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <Link
          href="/admin/newsletter"
          className="rounded-xl border border-basalt-line bg-basalt-raised p-5 transition-colors hover:border-orange/40"
        >
          <p className="font-display text-lg font-semibold text-snow">
            Newsletter section
          </p>
          <p className="mt-1 text-sm text-snow-dim">
            Edit the eyebrow, headline, subhead, and button label.
          </p>
        </Link>

        <Link
          href="/admin/images"
          className="rounded-xl border border-basalt-line bg-basalt-raised p-5 transition-colors hover:border-orange/40"
        >
          <p className="font-display text-lg font-semibold text-snow">
            Site images
          </p>
          <p className="mt-1 text-sm text-snow-dim">
            Copy the list of needed photos and upload a replacement for any
            placeholder.
          </p>
        </Link>
      </div>
    </main>
  );
}
