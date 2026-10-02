# Instructions for AI coding tools: Lockout web app

Copy this file to the root of the app repo as `AGENTS.md`. Also create `CLAUDE.md` in the same folder containing one line: `@AGENTS.md`. Replace anything in <angle brackets>.

## Where things live
- Design system (separate repo, cloned next to this one): `../lockout-design-system`
  - Tokens: `../lockout-design-system/tokens/tokens.css` (import once at the app root)
  - Component specs: `../lockout-design-system/components/`
  - Icon rules: `../lockout-design-system/icons/README.md`
- Shared components in this app: `<src/components/ui/>`
- Feature work: `<features/<feature-name>/>` with `brief.md`, `handoff.md`, and `prototype/`

## Rules
1. Use only `--lo-*` tokens. Never hard-code colors, font sizes, spacing, radii, or shadows.
2. Build screens from the shared components. If a component is missing:
   - If its spec exists in the design system, create it in the shared components folder from the spec, then use it.
   - If no spec exists, stop and tell the developer. Do not invent a one-off.
3. The prototype is a visual reference, not code to copy. Rebuild it with this app's components and conventions.
4. Handle every state listed in the feature's `handoff.md` (loading, empty, error, offline, and any product-specific states).
5. Every screen must work in light and dark mode. Use semantic tokens so it does this automatically.
6. Status is never shown by color alone. Always pair color with an icon and a text label.
7. `handoff.md` records the design system version the screen was built against. If the design system folder is on a different version, say so before building.
8. Icons are Phosphor, regular weight, following the icon rules.

## How to build a screen
1. Read the feature's `handoff.md` and `brief.md`.
2. Open the prototype and compare it with the acceptance criteria.
3. Build with the shared components and tokens.
4. Before finishing, go through the acceptance criteria one by one and report which are met.

## Do not
- Do not change anything in the design system folder.
- Do not add dependencies without asking.
- Do not guess missing information. List it as a question.
- Do not build components that have no spec.
