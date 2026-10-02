// Generates tokens/tokens.css from tokens/tokens.json. No dependencies.
// Usage: node scripts/build-tokens.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(fs.readFileSync(path.join(root, "tokens/tokens.json"), "utf8"));
const PREFIX = "--lo-";

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const varName = (pathParts) => PREFIX + pathParts.map(kebab).join("-");
const isRef = (v) => typeof v === "string" && /^\{.+\}$/.test(v);
const lookup = (ref) =>
  ref.slice(1, -1).split(".").reduce((o, k) => (o == null ? o : o[k]), tokens.primitive);

function resolveColorHex(value) {
  let v = value;
  while (isRef(v)) v = lookup(v);
  if (typeof v !== "string" || !v.startsWith("#")) throw new Error(`Not a color: ${value}`);
  return v;
}
const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

function cssRef(ref) {
  return `var(${varName(ref.slice(1, -1).split("."))})`;
}

function shadowToCss(s) {
  const hex = resolveColorHex(s.color);
  const [r, g, b] = hexToRgb(hex);
  return `${s.offsetX}px ${s.offsetY}px ${s.blur}px ${s.spread}px rgba(${r}, ${g}, ${b}, ${s.opacity})`;
}

function leafToCss(pathParts, value) {
  const top = pathParts[0];
  if (isRef(value)) return cssRef(value);
  if (typeof value === "number") {
    if (["space", "radius", "size", "fontSize"].includes(top)) return `${value}px`;
    if (top === "motion" && pathParts[1] === "duration") return `${value}ms`;
    return String(value);
  }
  if (Array.isArray(value)) {
    if (top === "fontFamily") return value.map((f) => (/\s/.test(f) ? `"${f}"` : f)).join(", ");
    if (top === "motion") return `cubic-bezier(${value.join(", ")})`;
  }
  return String(value);
}

function flatten(obj, parts = [], out = []) {
  for (const [k, v] of Object.entries(obj)) {
    const next = [...parts, k];
    if (v && typeof v === "object" && !Array.isArray(v)) {
      if (parts[0] === "shadow" && "offsetX" in v) out.push([next, shadowToCss(v)]);
      else if (next[0] === "text" && next.length === 2) {
        out.push([[...next, "size"], leafToCss(["fontSize"], v.size)]);
        out.push([[...next, "line-height"], `${v.lineHeight}px`]);
        out.push([[...next, "weight"], leafToCss(["fontWeight"], v.weight)]);
      } else flatten(v, next, out);
    } else out.push([next, leafToCss(next, v)]);
  }
  return out;
}

const keys = (obj, p = []) =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" && !Array.isArray(v) && !("offsetX" in v) ? keys(v, [...p, k]) : [[...p, k].join(".")]
  );
const lightKeys = keys(tokens.semantic.light).sort();
const darkKeys = keys(tokens.semantic.dark).sort();
const missing = [
  ...lightKeys.filter((k) => !darkKeys.includes(k)).map((k) => `dark is missing ${k}`),
  ...darkKeys.filter((k) => !lightKeys.includes(k)).map((k) => `light is missing ${k}`),
];
if (missing.length) {
  console.error("Light and dark semantic tokens must have the same keys:\n" + missing.join("\n"));
  process.exit(1);
}

const lines = (entries, indent = "  ") => entries.map(([p, v]) => `${indent}${varName(p)}: ${v};`).join("\n");
const primitives = flatten(tokens.primitive);
const light = flatten(tokens.semantic.light);
const dark = flatten(tokens.semantic.dark);

const css = `/* GENERATED FILE. Do not edit by hand.
   Source: tokens/tokens.json (v${tokens.meta.version}). Rebuild with: npm run build */

:root {
${lines(primitives)}
}

:root,
[data-theme="light"] {
  color-scheme: light;
${lines(light)}
}

[data-theme="dark"] {
  color-scheme: dark;
${lines(dark)}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    color-scheme: dark;
${lines(dark, "    ")}
  }
}
`;

fs.writeFileSync(path.join(root, "tokens/tokens.css"), css);
console.log(`tokens.css written: ${primitives.length} primitive, ${light.length} light, ${dark.length} dark variables`);
