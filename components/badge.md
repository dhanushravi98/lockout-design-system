# Badge

Version 0.1.0 · Web only

## Purpose
A small, non-interactive label that shows the status of something, such as a school, a door, or a device. If it can be clicked, it is a different component (filter chip, not yet specified).

## Statuses
| Status | Meaning | Icon (Phosphor) |
|---|---|---|
| Critical | Needs action now, such as an active lockdown | `warning-octagon` |
| Warning | Needs attention soon | `warning` |
| Normal | Working as expected | `check-circle` |
| Offline | No connection | `wifi-slash` |
| Info | Neutral information | `info` |

## Styles
| Style | Use |
|---|---|
| Tint (default) | Almost everywhere: tables, lists, headers |
| Solid | Sparingly, where one item should be seen first |

## Anatomy and size
- Icon (14px) then label. Gap `space.xs`. Height 22. Padding left and right `space.sm`. Radius `radius.sm`.
- Label: `text.caption` size, weight medium. One or two words. Never truncate.

## Tokens
For status `S`:
| Part | Tint | Solid |
|---|---|---|
| Background | `status.S.tintBg` | `status.S.solidBg` |
| Border (1px) | `status.S.tintBorder` | `status.S.solidBg` |
| Icon and text | `status.S.tintText` | `status.S.solidText` |

## Accessibility
- The icon and the label both carry the status. Color is a third signal, never the only one.
- The icon is decorative (`aria-hidden`). The label is the accessible name.
- Contrast for every status, style, and mode is verified by `npm run check`.

## Rules
- Use the status words above exactly. Do not invent synonyms ("Danger", "OK", "Down").
- Do not use Critical for anything that is not urgent. If everything is critical, nothing is.

## Open questions
- Neutral label badges that are not a status (for example a role name).
- Count badges (for example an unread alerts number on a nav item).
