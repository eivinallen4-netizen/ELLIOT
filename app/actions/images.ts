"use server";

import { revalidatePath } from "next/cache";
import { promises as fs } from "fs";
import path from "path";
import { setImage } from "@/lib/images";

export type ImageUploadState = {
  status: "idle" | "success" | "error";
  message: string;
};

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];
const MAX_SIZE = 8 * 1024 * 1024;

export async function uploadPlaceholderImageAction(
  _prevState: ImageUploadState,
  formData: FormData
): Promise<ImageUploadState> {
  const adminKey = process.env.NEWSLETTER_ADMIN_KEY;

  if (!adminKey) {
    return {
      status: "error",
      message:
        "Editing is disabled until the NEWSLETTER_ADMIN_KEY environment variable is set on the server.",
    };
  }

  if (String(formData.get("key") ?? "") !== adminKey) {
    return { status: "error", message: "Incorrect admin key." };
  }

  const placeholderKey = String(formData.get("placeholderKey") ?? "").trim();
  const file = formData.get("file");

  if (!placeholderKey || !(file instanceof File) || file.size === 0) {
    return { status: "error", message: "Choose a file to upload." };
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return { status: "error", message: "Use a JPG, PNG, WebP, or SVG file." };
  }

  if (file.size > MAX_SIZE) {
    return { status: "error", message: "File is too large (max 8MB)." };
  }

  const safeKey = placeholderKey.replace(/[^a-z0-9-]/gi, "");
  if (!safeKey) {
    return { status: "error", message: "Unknown placeholder." };
  }

  const ext =
    path.extname(file.name).toLowerCase() ||
    (file.type === "image/svg+xml" ? ".svg" : ".jpg");
  const filename = `${safeKey}-${Date.now()}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(uploadDir, filename), buffer);

  await setImage(safeKey, `/uploads/${filename}`);

  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/results");
  revalidatePath("/admin/images");

  return { status: "success", message: "Image updated." };
}
