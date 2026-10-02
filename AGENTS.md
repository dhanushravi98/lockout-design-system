# Instructions for AI tools working on this repo

This is the Lockout design system. Treat it as a source of truth that other teams build against. Changes here have wide effects, so be careful and explicit.

## Rules
1. `tokens/tokens.json` is the only place token values live. Never hand-edit `tokens/tokens.css`. Run `npm run build`.
2. Light and dark must always have the same set of semantic keys. The build fails if they differ.
3. Specs and components refer to semantic tokens (such as `action.primary.bg`), never to hex values and never to raw palette steps.
4. After any token change, run `npm run check`. It must pass in both modes. Do not weaken the check to make it pass. Change the token.
5. Any change to a component spec must also update `components/reference.html` so the picture matches the text.
6. Every change needs a CHANGELOG entry, labeled as one of: visual only (token change, no app code needed), or needs code changes (describe what).
7. Bump the version in `package.json` and `tokens/tokens.json` together.
8. Keep token values platform neutral: plain numbers for sizes, structured values for shadows. No CSS strings in `tokens.json`.
9. Do not add components, tokens, or variants that nobody asked for. Add them to a spec's "Open questions" instead.
10. Web only until POC 2. Do not add mobile sections.

## Do not
- Do not change colors, spacing, radii, or type values without being asked to.
- Do not add dependencies without asking.
- Do not guess answers to "Open questions" in the specs. Ask.
