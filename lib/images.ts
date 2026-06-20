import { promises as fs } from "fs";
import path from "path";

export type ImageMap = Record<string, string>;

const IMAGES_PATH = path.join(process.cwd(), "data", "images.json");

export async function getImageMap(): Promise<ImageMap> {
  try {
    const raw = await fs.readFile(IMAGES_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export async function setImage(key: string, publicPath: string): Promise<void> {
  const map = await getImageMap();
  map[key] = publicPath;
  await fs.writeFile(IMAGES_PATH, JSON.stringify(map, null, 2), "utf-8");
}
