import { readdir, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import sharp from "sharp";

const publicDirectory = resolve("public");
const imagesDirectory = join(publicDirectory, "images");
const outputFile = resolve("src/data/image-dimensions.json");
const supportedExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectFiles(path));
    } else if (supportedExtensions.has(extname(entry.name).toLowerCase())) {
      files.push(path);
    }
  }

  return files;
}

const dimensions = {};

for (const file of await collectFiles(imagesDirectory)) {
  const metadata = await sharp(file).metadata();

  if (metadata.width && metadata.height) {
    const key = relative(publicDirectory, file).split("\\").join("/");
    dimensions[key] = { width: metadata.width, height: metadata.height };
  }
}

await writeFile(outputFile, `${JSON.stringify(dimensions, null, 2)}\n`);
