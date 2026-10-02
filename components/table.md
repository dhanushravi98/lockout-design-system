# Table

Version 0.1.0 · Web only

## Purpose
Dense, scannable lists of records such as schools, devices, and alerts.

## Anatomy
1. Container: border 1px `border.default`, radius `radius.md`, background `bg.surface`, content clipped to the radius.
2. Header row: background `bg.subtle`, text `text.secondary`, `text.caption` size with weight medium.
3. Body rows: separated by 1px `border.default`, text `text.primary`, `text.body`.
4. Cells: padding left and right `space.md`.

## Density
| Density | Row vertical padding |
|---|---|
| Compact (default) | `space.sm` |
| Comfortable | `space.md` |

## Cell types
| Type | Rule |
|---|---|
| Text | Left aligned. Wrap rather than truncate for names and anything needed to identify the row. |
| Number | Right aligned, tabular figures. The header is right aligned too. |
| Status | A badge (tint). Never a bare colored dot. |
| Actions | Ghost icon-only buttons at the right edge, each with an `aria-label`. |

## States
| State | What changes |
|---|---|
| Row hover | Background `bg.subtle` |
| Row focus-visible | Shared focus ring on the focusable element inside the row |
| Sorted column | Header text `text.primary`, with a `caret-up` or `caret-down` icon (16px) |
| Empty | One line explaining what belongs here, plus one action |
| Loading | Skeleton rows in `bg.subtle`, same row height |

## Accessibility
- Use a real `<table>` with `<th scope="col">`.
- Sortable headers are buttons, with `aria-sort` on the `<th>`.
- Give the table a caption or `aria-label`.
- If the table can be wider than its container, wrap it in a scroll container with `tabindex="0"` and an `aria-label`.
- Status is a badge with a label, so it never relies on color alone.

## Rules
- Prefer a clear link or button in each row over making the whole row clickable.
- Do not put more than one badge in a status cell.

## Open questions
- Selected row: needs its own token (for example `selection.bg`). Not defined in v0.1.0.
- Sticky header, column resizing, and pagination versus infinite scroll.
