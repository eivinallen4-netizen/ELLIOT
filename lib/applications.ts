import { promises as fs } from "fs";
import path from "path";

export type Application = {
  name: string;
  email: string;
  role: string;
  obstacle: string;
  recording: string;
  submittedAt: string;
};

const APPLICATIONS_PATH = path.join(process.cwd(), "data", "applications.json");

export async function addApplication(
  application: Omit<Application, "submittedAt">
): Promise<void> {
  let applications: Application[] = [];
  try {
    const raw = await fs.readFile(APPLICATIONS_PATH, "utf-8");
    applications = JSON.parse(raw);
  } catch {
    applications = [];
  }

  applications.push({ ...application, submittedAt: new Date().toISOString() });
  await fs.writeFile(
    APPLICATIONS_PATH,
    JSON.stringify(applications, null, 2),
    "utf-8"
  );
}
