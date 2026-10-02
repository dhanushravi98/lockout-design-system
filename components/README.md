# Components

Specs for the Tier 1 components. Each spec is written for two readers: a person deciding how something should look, and an AI coding tool building it.

**Scope in v0.1.0:** web only. Mobile sections arrive in POC 2.

| Component | Spec | Status |
|---|---|---|
| Button | [button.md](button.md) | Draft |
| Input (text field) | [input.md](input.md) | Draft |
| Badge | [badge.md](badge.md) | Draft |
| Alert (inline) | [alert.md](alert.md) | Draft |
| Table | [table.md](table.md) | Draft |
| Navigation (sidebar) | [navigation.md](navigation.md) | Draft |

Not yet specified: select, checkbox, radio, toggle, tabs, card, modal, toast, page banner. Do not invent these. Add the spec here first.

See [reference.html](reference.html) for every component in light and dark mode.

## How to read a spec

- **Tokens, not values.** Specs name semantic tokens such as `action.primary.bg`. Never write a hex value in a spec or in component code.
- **Token to CSS name.** Dots become hyphens, camelCase becomes kebab-case, and the prefix is `--lo-`. So `action.primary.bgHover` is `--lo-action-primary-bg-hover`, and `space.lg` is `--lo-space-lg`.
- **Light and dark come for free.** A component that uses only semantic tokens works in both modes. If a component needs a color that has no token, stop and add the token first.
- **Every spec ends with "Open questions".** Those are decisions not made yet. Do not guess them in code. Ask.

## Shared rules

- Focus ring: `0 0 0 2px var(--lo-bg-surface), 0 0 0 4px var(--lo-action-focus-ring)`. The inner gap should match the surface the control sits on.
- Transitions: color and background only, `--lo-motion-duration-fast` with `--lo-motion-easing-standard`. Respect `prefers-reduced-motion`.
- Status is never shown by color alone. Always pair color with an icon and a text label.
- Icons are Phosphor, regular weight. See [../icons/README.md](../icons/README.md).
- Text is sentence case. Labels have no end punctuation. Helper and error messages end with a period.
