# Icons

Version 0.1.0 · Web only

The icon set is [Phosphor](https://phosphoricons.com). For the React web app use the official React package (`@phosphor-icons/react`). Check the package's current docs when installing.

## Rules
- **Weight:** regular, everywhere in v0.1.0.
- **Color:** icons inherit the text color of their parent (`currentColor`). Never give an icon its own hex value.
- **Sizes:**
  | Size | Use |
  |---|---|
  | 14 | Inside badges |
  | 16 | Buttons, inline with text, field messages, table sort and row actions |
  | 20 | Default: alerts, navigation items, lg buttons |
  | 24 | Empty states |
- **Decorative icons** next to a text label get `aria-hidden="true"`.
- **Icon-only controls** need an `aria-label` (and a tooltip on web).
- **Status always has a label.** An icon alone never carries a status.

## Status icons
| Meaning | Icon name |
|---|---|
| Critical | `warning-octagon` |
| Warning | `warning` |
| Normal | `check-circle` |
| Offline | `wifi-slash` |
| Info | `info` |
| Field error | `warning-circle` |

## Other icons used by Tier 1 components
`squares-four` (dashboard), `buildings` (schools), `bell` (alerts), `x` (dismiss), `caret-down` and `caret-up` (sorting), `magnifying-glass` (search).

## Open questions
- Whether the current navigation item uses the fill weight.
- Custom icons for lockout-specific concepts (door, lockdown, gate) that Phosphor does not cover.
- Mobile packages arrive in POC 2.
