# Alert (inline)

Version 0.1.0 · Web only

## Purpose
A message about something that needs the person's attention, shown inside the page next to the thing it is about. Page-wide banners and toasts are not specified yet.

## Statuses
Critical, warning, normal, and info. (Offline is a device state, not an alert.) Icons match the badge: `warning-octagon`, `warning`, `check-circle`, `info`.

## Anatomy
1. Icon (20px).
2. Optional title, `text.label`.
3. Message, `text.body`. Says what happened, and what to do if anything.
4. Optional action: a ghost or secondary button, or a link.
5. Optional dismiss: icon-only ghost button with `x`.

## Layout
- Padding `space.md` on all sides. Gap between icon and content `space.md`. Radius `radius.md`. Border 1px.
- Stack alerts with `space.sm` between them.

## Tokens
For status `S`:
| Part | Token |
|---|---|
| Background | `status.S.tintBg` |
| Border | `status.S.tintBorder` |
| Icon, title, message | `status.S.tintText` |

## Accessibility
- Critical and warning: `role="alert"`. Normal and info: `role="status"`.
- The icon is decorative (`aria-hidden`). The text carries the meaning.
- Dismiss buttons need `aria-label="Dismiss"`.

## Rules
- One alert per issue. Group repeated alerts into one with a count, not a stack of ten.
- Messages end with a period. No "Error:" prefix, no "please".
  - Good: "Lockdown active at Riverside High."
  - Good: "Gate controller battery is low. Replace it this week."

## Open questions
- Should critical alerts be dismissible at all, or only clear when resolved? Proposal: not dismissible while the condition is active.
- Page banner and toast variants.
