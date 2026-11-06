---
version: "alpha"
name: "Film Noir"
description: "Film Noir visual system, translated from the Claude Artisan catalog for use in digital products. High-contrast black, smoke, and cream; Venetian-blind stripes and hard pools of light"
colors:
  primary: "#e8dfc9"
  background: "#111111"
  surface: "#1b1b1b"
  text: "#f5eedc"
  accent: "#bb342f"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "2px"
  lg: "4px"
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
  order: 401
  author: "designmd.app"
  source: "https://designmd.app/library/film-noir"
  tags: ["风格模板", "smoke"]
---
## Overview

Film Noir visual system, translated from the Claude Artisan catalog for use in digital products. High-contrast black, smoke, and cream; Venetian-blind stripes and hard pools of light

- **Category:** historical
- **Era:** 1940s-1950s revival
- **Origin:** Postwar American crime cinema shaped by German Expressionist lighting, hard-boiled fiction, and urban shadows.
- **Reference:** The Third Man, Double Indemnity, and Saul Bass-inspired title treatments.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- High-contrast black, smoke, and cream
- Venetian-blind stripes and hard pools of light
- Editorial crime-file typography and precise red evidence marks

## Colors

- **bg** — #111111
- **surface** — #1b1b1b
- **surface-2** — #292929
- **text** — #f5eedc
- **text-muted** — #c9c0ac
- **primary** — #e8dfc9
- **accent** — #bb342f
- **smoke** — #78736a

## Typography

- Display: Georgia, 'Times New Roman', serif
- Body: Arial, Helvetica, sans-serif
- Mono: 'Courier New', monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- High-contrast black, smoke, and cream; Venetian-blind stripes and hard pools of light; Editorial crime-file typography and precise red evidence marks; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/film-noir · designmd.app -->
