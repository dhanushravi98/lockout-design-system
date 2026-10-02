# Lockout design system

**Status:** POC 1, web only. Version 0.1.0.

This repo is the single source of truth for how the Lockout product looks and behaves: design tokens, component specs, and icon rules, in light and dark mode. People read it, and so do AI coding tools.

## What is in here
```
lockout-design-system/
├── tokens/
│   ├── tokens.json        Source of truth. Edit this.
│   └── tokens.css         Generated from tokens.json. Never edit by hand.
├── components/            One spec per component, plus reference.html
├── icons/                 Phosphor usage rules
├── templates/             Brief, handoff packet, and app rules file templates
├── scripts/               build-tokens.mjs and check-contrast.mjs
├── AGENTS.md              Rules for AI tools working on this repo
├── CHANGELOG.md
└── package.json           Scripts only, no dependencies
```

## Using it
**Designers and prototypes:** give Claude Design `tokens/tokens.css` and the relevant spec from `components/`, and tell it to use only the tokens. Open `components/reference.html` in a browser to see every component in both modes.

**Developers and their AI tools:** keep this repo cloned next to the app repo, as `../lockout-design-system`. The app's `AGENTS.md` tells the tool where to look. Import `tokens/tokens.css` once at the app root. Components use only the `--lo-*` variables.

**Themes:** the default follows the system setting. To force a mode, set `data-theme="light"` or `data-theme="dark"` on `<html>` (or on any element to scope it).

## Naming
`action.primary.bgHover` in a spec is `--lo-action-primary-bg-hover` in CSS. Dots become hyphens, camelCase becomes kebab-case, and every variable starts with `--lo-`.

## Changing something
1. Branch.
2. Edit `tokens/tokens.json`, the component spec, and `components/reference.html` as needed.
3. `npm run build` to regenerate the CSS, then `npm run check` to verify contrast in both modes.
4. Add a CHANGELOG entry and bump the version in `package.json` and `tokens.json`.
5. Open a pull request and get it reviewed, then tag the version (for example `v0.1.1`).

A change here does not change any app by itself. Each app updates to the new version on its own schedule. Every handoff packet records which version a screen was built against.

## Not in POC 1
Mobile (iOS and Android), Style Dictionary, and components beyond Tier 1. Token values are plain numbers and structured values, so mobile builds can be added later without reworking the file.
