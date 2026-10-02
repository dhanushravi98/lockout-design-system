# Input (text field)

Version 0.1.0 · Web only

## Purpose
Single-line text entry. Select, textarea, checkbox, radio, and toggle are not specified yet.

## Anatomy
1. Label above the field. Always visible.
2. Control.
3. Helper text or error message below. Optional.

## Control
- Height `size.control-md` (32); sm and lg match the button sizes.
- Padding left and right `space.md`. Radius `radius.md`. Text style `text.body`.
- Border 1px.
- Placeholder uses `text.secondary`. It is an example of valid input, not a label.
- Label: `text.caption` size, weight medium, `text.secondary`. Helper text: `text.caption`, `text.secondary`.

## Tokens
| State | Background | Border | Text |
|---|---|---|---|
| Default | `bg.surface` | `border.input` | `text.primary` |
| Focus | `bg.surface` | `action.focusRing` plus shared focus ring | `text.primary` |
| Error | `bg.surface` | `border.error` | `text.primary` |
| Disabled | `disabled.bg` | `border.default` | `disabled.text` |

- Error message: icon `warning-circle` (16px) and text in `border.error`, below the field, `text.caption`.
- The input border uses `border.input` (not `border.default`) on purpose. A field edge needs 3:1 contrast against its surface. `npm run check` enforces this.

## Accessibility
- Every input has a visible `<label>` connected with `for` and `id`.
- Errors: set `aria-invalid="true"` and connect the message with `aria-describedby`.
- Error messages say what to do: "Enter a valid door ID." Not "Invalid input" and not color alone.
- Mark optional fields with "(optional)" in the label. Do not use asterisks.
- Do not validate on every keystroke. Validate on blur or submit.

## Open questions
- Hover treatment: v0.1.0 has no hover change.
- Success state: not defined.
- Prefix and suffix slots (icons, units).
