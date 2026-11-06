---
version: "alpha"
name: "Acid Graphics / Acid Design"
description: "Acid Graphics / Acid Design visual system, translated from the Claude Artisan catalog for use in digital products. Melted chrome type, distorted 3D blobs; Toxic greens, purples, chrome"
colors:
  primary: "#ccff00"
  background: "#0a0510"
  surface: "#1a0f2e"
  text: "#eafff0"
  accent: "#ff2ee0"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Chrome', 'Arial Black', 'Space Grotesk', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "10px"
  lg: "18px"
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
  order: 124
  author: "designmd.app"
  source: "https://designmd.app/library/acid-graphics"
  tags: ["风格模板", "purples", "chrome"]
---
## Overview

Acid Graphics / Acid Design visual system, translated from the Claude Artisan catalog for use in digital products. Melted chrome type, distorted 3D blobs; Toxic greens, purples, chrome

- **Category:** niche
- **Era:** 2019–present (evokes 90s rave)
- **Origin:** Revival of 90s rave/acid-house flyer graphics.
- **Reference:** Techno/rave posters; 2020s fashion (Balenciaga-adjacent).
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Melted chrome type, distorted 3D blobs
- Toxic greens, purples, chrome
- Trippy warped compositions
- Rave/underground energy

## Colors

- **bg** — #0a0510
- **surface** — #1a0f2e
- **surface-strong** — #2a1a45
- **border** — #ccff00
- **text** — #eafff0
- **text-muted** — rgba(234, 255, 240, 0.68)
- **primary** — #ccff00
- **accent** — #ff2ee0
- **toxic-green** — #7cff2e

## Typography

- Display: 'Chrome', 'Arial Black', 'Space Grotesk', sans-serif
- Body: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Melted chrome type, distorted 3D blobs; Toxic greens, purples, chrome; Trippy warped compositions; Rave/underground energy; sombras e elevação

## Shapes

- Radius scale: 4px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/acid-graphics · designmd.app -->
