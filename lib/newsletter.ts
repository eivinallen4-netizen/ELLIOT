import { promises as fs } from "fs";
import path from "path";

export type NewsletterContent = {
  eyebrow: string;
  headline: string;
  subhead: string;
  ctaLabel: string;
};

export type Subscriber = {
  email: string;
  subscribedAt: string;
};

const CONTENT_PATH = path.join(process.cwd(), "data", "newsletter-content.json");
const SUBSCRIBERS_PATH = path.join(process.cwd(), "data", "subscribers.json");

const FALLBACK_CONTENT: NewsletterContent = {
  eyebrow: "THE WEEKLY FILM SESSION",
  headline: "One real call, torn apart, in your inbox every week.",
  subhead:
    "A real line, a real save, a real call gone sideways — annotated with the why. No frameworks, no fluff, just film and my notes in the margins.",
  ctaLabel: "Get the Film, Free",
};

export async function getNewsletterContent(): Promise<NewsletterContent> {
  try {
    const raw = await fs.readFile(CONTENT_PATH, "utf-8");
    return { ...FALLBACK_CONTENT, ...JSON.parse(raw) };
  } catch {
    return FALLBACK_CONTENT;
  }
}

export async function saveNewsletterContent(
  content: NewsletterContent
): Promise<void> {
  await fs.writeFile(CONTENT_PATH, JSON.stringify(content, null, 2), "utf-8");
}

export async function addSubscriber(email: string): Promise<void> {
  let subscribers: Subscriber[] = [];
  try {
    const raw = await fs.readFile(SUBSCRIBERS_PATH, "utf-8");
    subscribers = JSON.parse(raw);
  } catch {
    subscribers = [];
  }

  if (subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
    return;
  }

  subscribers.push({ email, subscribedAt: new Date().toISOString() });
  await fs.writeFile(
    SUBSCRIBERS_PATH,
    JSON.stringify(subscribers, null, 2),
    "utf-8"
  );
}
