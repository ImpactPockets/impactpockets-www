import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const [scriptName, ...args] = process.argv.slice(2);
const toolkitRoot = process.env.GO_FOR_LAUNCH_ROOT
  ? resolve(process.env.GO_FOR_LAUNCH_ROOT)
  : resolve(process.cwd(), "../go-for-launch");
const scriptPath = resolve(toolkitRoot, "scripts", scriptName || "");

if (!scriptName || !existsSync(scriptPath)) {
  console.error(`Go for Launch script was not found: ${scriptPath}`);
  console.error("Set GO_FOR_LAUNCH_ROOT when the toolkit is not the sibling repository.");
  process.exit(2);
}

const result = spawnSync(process.execPath, [scriptPath, ...args], {
  cwd: process.cwd(),
  stdio: "inherit",
  env: process.env
});

process.exit(result.status ?? 1);
