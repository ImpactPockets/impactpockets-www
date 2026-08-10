import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import process from "node:process";
import sharp from "sharp";

function option(name, fallback) {
  const prefix = `${name}=`;
  const value = process.argv.slice(2).find((argument) => argument.startsWith(prefix));
  return value ? value.slice(prefix.length) : fallback;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function typographyRules(config) {
  return {
    sansFamily: String(config.typography?.sansFamily || "Arial, sans-serif"),
    accentFamily: String(config.typography?.accentFamily || "Georgia, serif"),
    eyebrowSize: Number(config.typography?.eyebrowSize || 18),
    headlineOneSize: Number(config.typography?.headlineOneSize || 76),
    headlineTwoSize: Number(config.typography?.headlineTwoSize || 74),
    supportingSize: Number(config.typography?.supportingSize || 24),
    destinationSize: Number(config.typography?.destinationSize || 23)
  };
}

function stableCardInput(config, card, name) {
  return {
    contractVersion: 2,
    templateVersion: String(config.templateVersion || "1"),
    seoContractVersion: String(config.seoContractVersion || "1"),
    width: config.width || 1200,
    height: config.height || 630,
    name,
    lineOne: String(card.lineOne || ""),
    lineTwo: String(card.lineTwo || ""),
    eyebrow: String(card.eyebrow || config.eyebrow || ""),
    tagline: String(card.tagline || config.tagline || ""),
    displayUrl: String(card.displayUrl || config.domain || ""),
    mark: String(card.mark || config.mark || "GFL"),
    colors: {
      background: String(config.colors?.background || "#07110f"),
      accent: String(config.colors?.accent || "#d6ff70"),
      secondary: String(config.colors?.secondary || "#83f3c8")
    },
    typography: typographyRules(config),
    sourceAssetSha256: String(card.sourceAssetSha256 || ""),
    brandAssetSha256: String(card.brandAssetSha256 || config.brandAssetSha256 || ""),
    renderingFingerprint: card.renderingFingerprint ?? null,
    ...(card.artworkReview ? { artworkReview: card.artworkReview } : {})
  };
}

function estimatedWidth(value, fontSize) {
  return [...String(value)].reduce((width, character) => {
    if (character === " ") return width + fontSize * 0.3;
    if (/[MW@%&]/.test(character)) return width + fontSize * 0.88;
    if (/[A-Z0-9]/.test(character)) return width + fontSize * 0.66;
    if (/[mw]/.test(character)) return width + fontSize * 0.78;
    if (/[iltfjr]/.test(character)) return width + fontSize * 0.34;
    return width + fontSize * 0.55;
  }, 0);
}

const configPath = resolve(option("--config", "open-graph.config.mjs"));
const config = (await import(`${pathToFileURL(configPath).href}?v=${Date.now()}`)).default;
const root = dirname(configPath);
const outputDirectory = isAbsolute(config.outputDirectory) ? config.outputDirectory : resolve(root, config.outputDirectory);
const stateFile = isAbsolute(config.stateFile) ? config.stateFile : resolve(root, config.stateFile);
const regenerate = process.argv.includes("--regenerate");
const previousState = await readFile(stateFile, "utf8").then(JSON.parse).catch(() => null);
const previousCards = new Map((previousState?.cards || []).map((card) => [card.name, card]));
const logoPath = resolve(root, "public/images/Logo.png");
const logo = await readFile(logoPath);
const actualLogoHash = sha256(logo);
const logoData = `data:image/png;base64,${logo.toString("base64")}`;
const typography = typographyRules(config);
const records = [];
const failures = [];
let generated = 0;
let reused = 0;

if ((config.width || 1200) !== 1200 || (config.height || 630) !== 630) failures.push("Open Graph output must be 1200 by 630 pixels");
if (!Array.isArray(config.cards) || config.cards.length === 0) failures.push("Configuration must define at least one card");

for (const card of config.cards || []) {
  if (card.sourceAssetSha256 !== actualLogoHash) failures.push(`${card.name}: source asset hash does not match the approved primary logo`);
  if (!card.purpose) failures.push(`${card.name}: intended purpose is required`);
  if (estimatedWidth(card.lineOne, typography.headlineOneSize) > 620) failures.push(`${card.name}: lineOne exceeds the safe text region`);
  if (estimatedWidth(card.lineTwo, typography.headlineTwoSize) > 620) failures.push(`${card.name}: lineTwo exceeds the safe text region`);
}

if (failures.length > 0) {
  for (const failure of failures) console.error(failure);
  process.exit(1);
}

if (regenerate) await mkdir(outputDirectory, { recursive: true });

for (const card of config.cards) {
  const name = card.name;
  const inputSha256 = sha256(JSON.stringify(stableCardInput(config, card, name)));
  const output = resolve(outputDirectory, `og-${name}.png`);
  const existing = await readFile(output).catch(() => null);
  const existingSha256 = existing ? sha256(existing) : null;
  const previous = previousCards.get(name);

  if (existing && previous?.inputSha256 === inputSha256 && previous.outputSha256 === existingSha256) {
    records.push(previous);
    reused += 1;
    continue;
  }

  if (!regenerate) {
    failures.push(`${name}: approved card state is missing or stale, run the explicit regeneration command`);
    continue;
  }

  const eyebrow = escapeXml(card.eyebrow || config.eyebrow);
  const tagline = escapeXml(card.tagline || config.tagline);
  const displayUrl = escapeXml(card.displayUrl || config.domain);
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="${escapeXml(config.colors.background)}"/>
      <defs>
        <pattern id="grid" width="54" height="54" patternUnits="userSpaceOnUse">
          <path d="M54 0H0V54" fill="none" stroke="${escapeXml(config.colors.secondary)}" stroke-opacity="0.10"/>
        </pattern>
      </defs>
      <rect width="1200" height="630" fill="url(#grid)"/>
      <rect x="72" y="54" width="270" height="92" rx="10" fill="#FFFFFF"/>
      <image href="${logoData}" x="97" y="71" width="220" height="58" preserveAspectRatio="xMidYMid meet"/>
      <rect x="72" y="188" width="54" height="5" fill="${escapeXml(config.colors.accent)}"/>
      <text x="142" y="197" fill="#F0F1F6" font-family="${escapeXml(typography.sansFamily)}" font-size="${typography.eyebrowSize}" font-weight="700" letter-spacing="2">${eyebrow}</text>
      <text x="72" y="315" fill="#FFFFFF" font-family="${escapeXml(typography.sansFamily)}" font-size="${typography.headlineOneSize}" font-weight="700">${escapeXml(card.lineOne)}</text>
      <text x="72" y="400" fill="${escapeXml(config.colors.accent)}" font-family="${escapeXml(typography.accentFamily)}" font-size="${typography.headlineTwoSize}" font-weight="700">${escapeXml(card.lineTwo)}</text>
      <text x="72" y="477" fill="${escapeXml(config.colors.secondary)}" font-family="${escapeXml(typography.sansFamily)}" font-size="${typography.supportingSize}">${tagline}</text>
      <text x="72" y="558" fill="#FFFFFF" font-family="${escapeXml(typography.sansFamily)}" font-size="${typography.destinationSize}" font-weight="700">${displayUrl}</text>
      <g fill="none" stroke="${escapeXml(config.colors.secondary)}" stroke-width="3" opacity="0.52">
        <rect x="806" y="104" width="290" height="290" rx="44" transform="rotate(8 951 249)"/>
        <rect x="846" y="144" width="210" height="210" rx="32" transform="rotate(8 951 249)"/>
      </g>
      <path d="M806 350h290v116c0 45-37 82-82 82H888c-45 0-82-37-82-82V350Z" fill="${escapeXml(config.colors.accent)}" opacity="0.96"/>
      <path d="M851 350h200v77c0 32-26 58-58 58h-84c-32 0-58-26-58-58v-77Z" fill="${escapeXml(config.colors.background)}"/>
      <circle cx="951" cy="388" r="13" fill="#FFFFFF"/>
    </svg>`;
  const png = await sharp(Buffer.from(svg), { density: 192 })
    .resize(1200, 630, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, palette: true, quality: 92, dither: 0 })
    .toBuffer();
  await writeFile(output, png);
  records.push({ name, file: `og-${name}.png`, inputSha256, outputSha256: sha256(png) });
  generated += 1;
}

if (failures.length > 0) {
  for (const failure of failures) console.error(failure);
  process.exit(1);
}

if (regenerate) {
  await writeFile(stateFile, `${JSON.stringify({
    version: 2,
    templateVersion: String(config.templateVersion),
    seoContractVersion: String(config.seoContractVersion),
    cards: records.sort((left, right) => left.name.localeCompare(right.name))
  }, null, 2)}\n`);
  console.log(`Open Graph regeneration complete: ${generated} generated, ${reused} unchanged and reused.`);
} else {
  console.log(`Verified and reused ${reused} approved Open Graph cards without rewriting files.`);
}
