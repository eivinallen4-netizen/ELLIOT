import { TESTIMONIALS } from "@/data/testimonials";

export type PlaceholderDef = {
  key: string;
  label: string;
  width: number;
  height: number;
  page: string;
};

export function getPlaceholders(): PlaceholderDef[] {
  return [
    {
      key: "about-coach-headshot",
      label: "Coach headshot",
      width: 1200,
      height: 1200,
      page: "About page",
    },
    ...TESTIMONIALS.map((t): PlaceholderDef => ({
      key: `testimonial-${t.id}`,
      label: `Rep photo — ${t.name}`,
      width: 240,
      height: 240,
      page: "Results page",
    })),
  ];
}
