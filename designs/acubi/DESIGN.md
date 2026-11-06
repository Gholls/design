---
version: "alpha"
name: "Acubi"
description: "Acubi visual system, translated from the Claude Artisan catalog for use in digital products. Cool-toned grey, silver, black, white; Minimal cyber-Y2K, low-rise sleek"
colors:
  primary: "#c7ccd4"
  background: "#121316"
  surface: "#1c1e22"
  text: "#f2f3f5"
  accent: "#7dd3fc"
  on-primary: "#000000"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Helvetica Neue', 'Pretendard', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', 'Pretendard', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', 'Pretendard', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
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
  order: 116
  author: "designmd.app"
  source: "https://designmd.app/library/acubi"
  tags: ["风格模板", "Acubi visual system", "silver", "black"]
---
## Overview

Acubi visual system, translated from the Claude Artisan catalog for use in digital products. Cool-toned grey, silver, black, white; Minimal cyber-Y2K, low-rise sleek

- **Category:** niche
- **Era:** 2022–present
- **Origin:** Korean-origin sleek minimal-Y2K fashion aesthetic.
- **Reference:** Acubi TikTok/Korean fashion.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Cool-toned grey, silver, black, white
- Minimal cyber-Y2K, low-rise sleek
- Metallic + muted, clean lines
- Edgy, futuristic, understated

## Colors

- **bg** — #121316
- **surface** — #1c1e22
- **surface-strong** — #26282d
- **border** — #35383f
- **text** — #f2f3f5
- **text-muted** — #a7abb3
- **primary** — #c7ccd4
- **accent** — #7dd3fc

## Typography

- Display: 'Helvetica Neue', 'Pretendard', sans-serif
- Body: 'Helvetica Neue', 'Pretendard', system-ui, sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Cool-toned grey, silver, black, white; Minimal cyber-Y2K, low-rise sleek; Metallic + muted, clean lines; Edgy, futuristic, understated; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/acubi · designmd.app -->
