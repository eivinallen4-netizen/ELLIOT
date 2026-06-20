"use server";

import { addApplication } from "@/lib/applications";

export type ApplyState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function applyAction(
  _prevState: ApplyState,
  formData: FormData
): Promise<ApplyState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim();
  const obstacle = String(formData.get("obstacle") ?? "").trim();
  const recording = String(formData.get("recording") ?? "").trim();

  if (!name) {
    return { status: "error", message: "Tell me your name. I'm not psychic." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a real email address." };
  }
  if (!role) {
    return { status: "error", message: "Pick the option closest to your role." };
  }
  if (!obstacle || obstacle.length < 10) {
    return {
      status: "error",
      message: "Give me a real sentence on where you're stuck — that's literally what I screen on.",
    };
  }
  if (!recording) {
    return { status: "error", message: "Let me know if you can record your calls." };
  }

  await addApplication({ name, email, role, obstacle, recording });

  return {
    status: "success",
    message:
      "You're in the queue. Watch your inbox — I'll reach out to book your 15-minute screen.",
  };
}
