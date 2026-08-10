import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "csso";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(projectRoot, "src/generated");
const stylesheets = [
  ["public/css/styles.css", "styles.min.css"],
  ["public/css/worker-overrides.css", "worker-overrides.min.css"]
];

await mkdir(outputDirectory, { recursive: true });

for (const [sourcePath, outputName] of stylesheets) {
  const source = await readFile(resolve(projectRoot, sourcePath), "utf8");
  const optimized = minify(source, { restructure: false }).css;
  await writeFile(resolve(outputDirectory, outputName), `${optimized}\n`, "utf8");
  console.log(`Minified ${sourcePath} to src/generated/${outputName}.`);
}
