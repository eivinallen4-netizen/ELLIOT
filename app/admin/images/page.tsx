import AdminImagesForm from "@/components/AdminImagesForm";
import { getImageMap } from "@/lib/images";
import { getPlaceholders } from "@/lib/placeholders";

export const metadata = {
  title: "Edit Images — Top Mountaineer",
  robots: { index: false, follow: false },
};

export default async function AdminImagesPage() {
  const [imageMap, placeholders] = await Promise.all([
    getImageMap(),
    Promise.resolve(getPlaceholders()),
  ]);

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16">
      <h1 className="font-display text-2xl font-bold text-snow">
        Edit Site Images
      </h1>
      <p className="mt-2 text-sm text-snow-dim">
        Every placeholder photo across the site lives here. Copy the list to
        hand off to a photographer, then upload a file per slot to replace it
        on the live site immediately. Requires the{" "}
        <code className="text-orange">NEWSLETTER_ADMIN_KEY</code> server
        environment variable.
      </p>
      <AdminImagesForm placeholders={placeholders} imageMap={imageMap} />
    </main>
  );
}
