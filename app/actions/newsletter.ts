"use server";

import { revalidatePath } from "next/cache";
import {
  addSubscriber,
  saveNewsletterContent,
  type NewsletterContent,
} from "@/lib/newsletter";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeAction(
  _prevState: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a real email address." };
  }

  await addSubscriber(email);
  return { status: "success", message: "You're in. Watch your inbox — don't make me chase you." };
}

export type AdminState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function updateNewsletterContentAction(
  _prevState: AdminState,
  formData: FormData
): Promise<AdminState> {
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

  const content: NewsletterContent = {
    eyebrow: String(formData.get("eyebrow") ?? "").trim(),
    headline: String(formData.get("headline") ?? "").trim(),
    subhead: String(formData.get("subhead") ?? "").trim(),
    ctaLabel: String(formData.get("ctaLabel") ?? "").trim(),
  };

  if (!content.headline || !content.ctaLabel) {
    return { status: "error", message: "Headline and CTA label are required." };
  }

  await saveNewsletterContent(content);
  revalidatePath("/");
  revalidatePath("/admin/newsletter");

  return { status: "success", message: "Newsletter section updated." };
}
