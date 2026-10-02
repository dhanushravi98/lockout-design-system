# Button

Version 0.1.0 · Web only

## Purpose
Triggers an action. Use a link for navigation and a button for actions.

## Variants
| Variant | Use for |
|---|---|
| Primary | The one main action in a view or dialog. One per area. |
| Secondary | Default for everything else. When unsure, use this. |
| Ghost | Low-emphasis actions, toolbars, table row actions. |
| Danger | Destructive actions such as deleting a school or device. Always behind a confirmation. |

## Sizes
| Size | Height token | Horizontal padding |
|---|---|---|
| sm | `size.control-sm` (28) | `space.md` (12) |
| md (default) | `size.control-md` (32) | `space.lg` (16) |
| lg | `size.control-lg` (40) | `space.xl` (24) |

- Radius: `radius.md`. Text style: `text.label`. Gap between icon and label: `space.sm`.
- Optional leading icon: 16px in sm and md, 20px in lg. Icon-only buttons are square at the same height.

## Tokens
| Part | Primary | Secondary | Ghost | Danger |
|---|---|---|---|---|
| Background | `action.primary.bg` | `bg.surface` | none | `action.danger.bg` |
| Border | none | `border.strong` | none | none |
| Text | `action.primary.text` | `text.primary` | `action.link` | `action.danger.text` |
| Hover background | `action.primary.bgHover` | `bg.subtle` | `bg.subtle` | `action.danger.bgHover` |
| Pressed background | `action.primary.bgPressed` | `bg.subtle` + border `border.input` | `bg.subtle` | `action.danger.bgPressed` |

## States
| State | What changes |
|---|---|
| Default | As above |
| Hover | Hover background |
| Pressed | Pressed background |
| Focus-visible | Shared focus ring |
| Disabled | Background `disabled.bg`, text `disabled.text`, no border, `cursor: not-allowed` |
| Loading | Spinner replaces the icon (or sits before the label), width does not change, `aria-busy="true"`, clicks ignored |

## Accessibility
- Use a real `<button>` element. Set `type` explicitly.
- Icon-only buttons need `aria-label` and a tooltip.
- Text contrast is verified for every variant and state in both modes by `npm run check`.
- Avoid disabled buttons. If an action is unavailable, keep the button enabled and explain why when it is used, or show the reason next to it. Disabled controls are low contrast and give no feedback.

## Rules
- One primary button per area. Siblings are secondary or ghost.
- Labels start with a verb, in one to three words: "Acknowledge alert", "Add school". Not "Submit" or "OK".
- Danger buttons say what is destroyed: "Delete school".

## Open questions
- Should a button group (split button, segmented buttons) exist in v0.2?
- Loading spinner design is not specified yet.
