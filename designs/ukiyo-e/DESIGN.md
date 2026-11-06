---
version: "alpha"
name: "Ukiyo-e"
description: "Ukiyo-e visual system, translated from the Claude Artisan catalog for use in digital products. Flat areas of color with bold outlines; Woodblock print texture and registration"
colors:
  primary: "#1d4e89"
  background: "#eee3c8"
  surface: "#f6ecd2"
  text: "#1c1a15"
  accent: "#b23a2e"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Zen Old Mincho', 'Shippori Mincho', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "2px"
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
  order: 804
  author: "designmd.app"
  source: "https://designmd.app/library/ukiyo-e"
  tags: ["风格模板"]
---
## Overview

Ukiyo-e visual system, translated from the Claude Artisan catalog for use in digital products. Flat areas of color with bold outlines; Woodblock print texture and registration

- **Category:** historical
- **Era:** 1603–1868
- **Origin:** Edo-period Japan (Hokusai, Hiroshige).
- **Reference:** Hokusai 'Great Wave off Kanagawa'.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Flat areas of color with bold outlines
- Woodblock print texture and registration
- Nature, waves, Mt Fuji, everyday life
- Asymmetric balance, negative space

## Colors

- **bg** — #eee3c8
- **surface** — #f6ecd2
- **surface-strong** — #e6d7ac
- **border** — #1c1a15
- **text** — #1c1a15
- **text-muted** — #4a4736
- **primary** — #1d4e89
- **accent** — #b23a2e
- **wave** — #2f6f8f

## Typography

- Display: 'Zen Old Mincho', 'Shippori Mincho', serif
- Body: 'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flat areas of color with bold outlines; Woodblock print texture and registration; Nature, waves, Mt Fuji, everyday life; Asymmetric balance, negative space; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 2px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/ukiyo-e · designmd.app -->
