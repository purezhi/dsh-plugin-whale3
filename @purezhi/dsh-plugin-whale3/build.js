#!/usr/bin/env node
/**
 * Build lib/client.js from lib/client.src.js.
 *
 * The whale plugin's browser bundle is plain ModuleLoader-compatible CJS, so
 * the build is deliberately minimal: it copies the source verbatim (only
 * normalizing the final newline) so the workspace stays the single source of
 * truth. A placeholder `__WHALE_VERSION__` in the source, if present, is
 * replaced with the version from package.json.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url)); // package root
const pkg = JSON.parse(readFileSync(join(here, "package.json"), "utf8"));
let src = readFileSync(join(here, "lib", "client.src.js"), "utf8");
if (src.includes("__WHALE_VERSION__")) {
  src = src.replaceAll("__WHALE_VERSION__", pkg.version);
}
if (!src.endsWith("\n")) src += "\n";
writeFileSync(join(here, "lib", "client.js"), src);
console.log(`client.js built (v${pkg.version}, ${src.length} bytes)`);
