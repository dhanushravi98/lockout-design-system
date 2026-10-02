// Checks WCAG contrast for the pairings components rely on, in light and dark.
// Text pairs need 4.5:1. UI boundaries (input borders, focus rings) need 3:1.
// Usage: node scripts/check-contrast.mjs   (exits with an error if any pair fails)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(fs.readFileSync(path.join(root, "tokens/tokens.json"), "utf8"));

const isRef = (v) => typeof v === "string" && /^\{.+\}$/.test(v);
const lookup = (ref) => ref.slice(1, -1).split(".").reduce((o, k) => o[k], tokens.primitive);
const hex = (v) => { while (isRef(v)) v = lookup(v); return v; };
const get = (mode, p) => hex(p.split(".").reduce((o, k) => o[k], tokens.semantic[mode]));

const lum = (h) => {
  const f = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const [r, g, b] = [1, 3, 5].map((i) => f(parseInt(h.slice(i, i + 2), 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const TEXT = 4.5;
const UI = 3;
const statuses = Object.keys(tokens.semantic.light.status);
const pairs = [];
const add = (min, fg, bg, label) => pairs.push({ min, fg, bg, label });

for (const bg of ["bg.page", "bg.surface", "bg.raised", "bg.subtle"]) add(TEXT, "text.primary", bg, `text.primary on ${bg}`);
for (const bg of ["bg.page", "bg.surface", "bg.raised", "bg.subtle"]) add(TEXT, "text.secondary", bg, `text.secondary on ${bg}`);
for (const bg of ["bg.surface", "bg.raised"]) add(TEXT, "action.link", bg, `action.link on ${bg}`);
for (const state of ["bg", "bgHover", "bgPressed"]) {
  add(TEXT, "action.primary.text", `action.primary.${state}`, `primary text on ${state}`);
  add(TEXT, "action.danger.text", `action.danger.${state}`, `danger text on ${state}`);
}
add(TEXT, "nav.activeText", "nav.activeBg", "nav active text");
for (const s of statuses) {
  add(TEXT, `status.${s}.tintText`, `status.${s}.tintBg`, `${s} tint text`);
  add(TEXT, `status.${s}.solidText`, `status.${s}.solidBg`, `${s} solid text`);
}
for (const bg of ["bg.surface", "bg.page"]) {
  add(UI, "border.input", bg, `border.input on ${bg}`);
  add(UI, "action.focusRing", bg, `focus ring on ${bg}`);
}
add(UI, "border.error", "bg.surface", "border.error on bg.surface");
add(TEXT, "border.error", "bg.surface", "error text on bg.surface");
add(UI, "action.primary.bg", "bg.surface", "primary button on bg.surface");

let failures = 0;
for (const mode of ["light", "dark"]) {
  let ok = 0;
  for (const p of pairs) {
    const r = ratio(get(mode, p.fg), get(mode, p.bg));
    if (r + 1e-9 < p.min) {
      failures++;
      console.log(`FAIL [${mode}] ${p.label}: ${r.toFixed(2)}:1 (needs ${p.min}:1)`);
    } else ok++;
  }
  console.log(`${mode}: ${ok}/${pairs.length} pairs pass`);
}
console.log("Not checked on purpose: text.disabled and disabled.text (disabled controls are exempt).");
if (failures) process.exit(1);
