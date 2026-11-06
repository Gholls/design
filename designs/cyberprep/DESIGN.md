---
version: "alpha"
name: "Cyberprep"
description: "Cyberprep visual system, translated from the Claude Artisan catalog for use in digital products. Clean, bright, safe high-tech future; White/aqua/green, glossy surfaces"
colors:
  primary: "#0fb5c4"
  background: "#eef9fb"
  surface: "#ffffff"
  text: "#0c3a3f"
  accent: "#3ddc84"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Eurostile', 'Segoe UI', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Segoe UI', 'Frutiger', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Segoe UI', 'Frutiger', system-ui, sans-serif"
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
  order: 298
  author: "designmd.app"
  source: "https://designmd.app/library/cyberprep"
  tags: ["风格模板", "bright", "glossy surfaces"]
---
## Overview

Cyberprep visual system, translated from the Claude Artisan catalog for use in digital products. Clean, bright, safe high-tech future; White/aqua/green, glossy surfaces

- **Category:** retrofuturism
- **Era:** 1990s–present
- **Origin:** Optimistic counterpart to dystopian cyberpunk (Frutiger-adjacent).
- **Reference:** Mirror's Edge; early 2000s tech ads.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Clean, bright, safe high-tech future
- White/aqua/green, glossy surfaces
- Seamless friendly tech integration
- Utopian consumer sci-fi

## Colors

- **bg** — #eef9fb
- **surface** — #ffffff
- **surface-strong** — #dcf3f6
- **border** — #b7e6ec
- **text** — #0c3a3f
- **text-muted** — #3f6c70
- **primary** — #0fb5c4
- **accent** — #3ddc84
- **glossy-hi** — rgba(255, 255, 255, 0.85)

## Typography

- Display: 'Eurostile', 'Segoe UI', sans-serif
- Body: 'Segoe UI', 'Frutiger', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Clean, bright, safe high-tech future; White/aqua/green, glossy surfaces; Seamless friendly tech integration; Utopian consumer sci-fi; sombras e elevação

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

<!-- Source: https://designmd.app/library/cyberprep · designmd.app -->
