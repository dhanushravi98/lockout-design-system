# Navigation (sidebar)

Version 0.1.0 · Web only

## Purpose
Primary navigation between the main areas of the app, such as Dashboard, Schools, and Alerts.

## Anatomy
- Container: background `bg.surface`, right border 1px `border.default`, padding `space.sm`.
- Items stacked with `space.xs` between them.
- Each item: icon (20px) then label. Height `size.control-lg` (40). Padding left and right `space.md`. Gap `space.md`. Radius `radius.md`. Text `text.body`.

## States
| State | Background | Text and icon | Notes |
|---|---|---|---|
| Default | none | `text.secondary` | |
| Hover | `bg.subtle` | `text.primary` | |
| Current page | `nav.activeBg` | `nav.activeText` | Weight medium, `aria-current="page"` |
| Focus-visible | shared focus ring | | |

Unavailable items are hidden, not disabled.

## Optional count
A solid critical badge can sit at the right edge of an item (for example the number of active alerts). Same rules as the badge spec.

## Accessibility
- Wrap in `<nav aria-label="Main">`. Items are links (`<a>`), not buttons.
- The icon is decorative (`aria-hidden`). The label is always visible.
- Text contrast for the current-page state is verified in both modes by `npm run check`.

## Rules
- Labels are one or two nouns in sentence case: "Dashboard", "Schools", "Alerts".
- Keep the order stable. Do not reorder by usage.

## Open questions
- Collapsed (icon-only) sidebar behavior and tooltips.
- Top bar, breadcrumbs, and user menu are not specified yet.
- Mobile navigation arrives in POC 2.
