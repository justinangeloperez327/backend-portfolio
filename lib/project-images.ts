import fs from "node:fs";
import path from "node:path";

export type ProjectImage = { src: string; alt: string };

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

/** Turns "02-redhq-corporate-dashboard.png" into "Corporate dashboard". */
function altFromFile(file: string, slug: string, projectName: string) {
  const words = path
    .parse(file)
    .name.replace(/^\d+[-_ ]*/, "")
    .replace(new RegExp("^" + slug + "[-_ ]*", "i"), "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!words) return projectName + " screenshot";
  return projectName + ": " + words.charAt(0).toUpperCase() + words.slice(1);
}

/**
 * Screenshots for a project, read at build time from public/projects/<slug>/.
 * Files are shown in file-name order, so prefix them 01-, 02-, … to control it.
 */
export function getProjectImages(slug: string, projectName: string): ProjectImage[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: "/projects/" + slug + "/" + encodeURIComponent(file),
      alt: altFromFile(file, slug, projectName),
    }));
}
