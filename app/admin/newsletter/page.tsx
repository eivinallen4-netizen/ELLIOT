import AdminNewsletterForm from "@/components/AdminNewsletterForm";
import { getNewsletterContent } from "@/lib/newsletter";

export const metadata = {
  title: "Edit Newsletter — Top Mountaineer",
  robots: { index: false, follow: false },
};

export default async function AdminNewsletterPage() {
  const content = await getNewsletterContent();

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-16">
      <h1 className="font-display text-2xl font-bold text-snow">
        Edit Newsletter Section
      </h1>
      <p className="mt-2 text-sm text-snow-dim">
        Changes save to <code className="text-orange">data/newsletter-content.json</code>{" "}
        and update the live landing page immediately. Requires the{" "}
        <code className="text-orange">NEWSLETTER_ADMIN_KEY</code> server
        environment variable.
      </p>
      <AdminNewsletterForm content={content} />
    </main>
  );
}
