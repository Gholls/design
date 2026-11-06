---
version: "alpha"
name: "McBling"
description: "McBling visual system, translated from the Claude Artisan catalog for use in digital products. Rhinestones, glitter, hot pink, gold bling; Flip-phone/tabloid celebrity culture"
colors:
  primary: "#ff2ea6"
  background: "#2a0a1f"
  surface: "#3d0f2c"
  text: "#fff2fa"
  accent: "#ffd23f"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Curlz MT', 'Brush Script MT', cursive"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "28px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "16px"

gallery:
  order: 544
  author: "designmd.app"
  source: "https://designmd.app/library/mcbling"
  tags: ["风格模板", "glitter", "hot pink"]
---
## Overview

McBling visual system, translated from the Claude Artisan catalog for use in digital products. Rhinestones, glitter, hot pink, gold bling; Flip-phone/tabloid celebrity culture

- **Category:** retrofuturism
- **Era:** 2003–2008
- **Origin:** Mid-2000s pop-culture glamour aesthetic.
- **Reference:** Paris Hilton era; early Myspace glam.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Rhinestones, glitter, hot pink, gold bling
- Flip-phone/tabloid celebrity culture
- Juicy/velour, Y2K glam
- Ostentatious, playful excess

## Colors

- **bg** — #2a0a1f
- **surface** — #3d0f2c
- **surface-strong** — #52123c
- **border** — rgba(255, 214, 240, 0.35)
- **text** — #fff2fa
- **text-muted** — #e8b8d8
- **primary** — #ff2ea6
- **accent** — #ffd23f
- **rhinestone** — #9be8ff
- **gold** — #ffcf5c

## Typography

- Display: 'Curlz MT', 'Brush Script MT', cursive
- Body: 'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rhinestones, glitter, hot pink, gold bling; Flip-phone/tabloid celebrity culture; Juicy/velour, Y2K glam; Ostentatious, playful excess; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/mcbling · designmd.app -->
