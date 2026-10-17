import { cpSync, existsSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appsDir = join(root, "apps");
const outDir = join(root, "dist");

const LESSON_SLUGS = [
  "router",
  "jotai",
  "context-reducer",
  "hooks",
  "hoc",
  "react-bootstrap",
  "radix",
  "axios",
  "tanstack-query",
  "forms",
  "suspense-lazy",
  "portals",
  "error-boundaries",
];

if (existsSync(outDir)) rmSync(outDir, { recursive: true });
mkdirSync(outDir, { recursive: true });

const catalogDist = join(appsDir, "catalog", "dist");
if (!existsSync(catalogDist)) {
  throw new Error("Missing apps/catalog/dist. Run turbo build first.");
}
cpSync(catalogDist, outDir, { recursive: true });

for (const slug of LESSON_SLUGS) {
  const appDist = join(appsDir, slug, "dist");
  if (!existsSync(appDist)) {
    throw new Error(`Missing apps/${slug}/dist. Run turbo build first.`);
  }
  const target = join(outDir, slug);
  mkdirSync(target, { recursive: true });
  cpSync(appDist, target, { recursive: true });
}

console.log(
  `Assembled dist/ with catalog + ${LESSON_SLUGS.length} lessons:`,
  readdirSync(outDir).join(", "),
);
