---
version: "alpha"
name: "Populuxe"
description: "Populuxe visual system, translated from the Claude Artisan catalog for use in digital products. Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver; Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation"
colors:
  primary: "#ff6f61"
  background: "#f4ede0"
  surface: "#fffaf3"
  text: "#2b2320"
  accent: "#1fb5a3"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "Futura, Century Gothic, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "Futura, Century Gothic, Trebuchet MS, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "Futura, Century Gothic, Trebuchet MS, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "10px"
  lg: "20px"
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
  order: 638
  author: "designmd.app"
  source: "https://designmd.app/library/populuxe"
  tags: ["风格模板"]
---
## Overview

Populuxe visual system, translated from the Claude Artisan catalog for use in digital products. Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver; Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation

- **Category:** historical
- **Era:** 1950s–early 1960s
- **Origin:** Postwar American consumer design — the optimistic mass-market graphic language of appliance ads, diner menus, and car showrooms during the atomic-age boom (term coined by Thomas Hine).
- **Reference:** 1950s Frigidaire and Chevrolet print ads; Googie coffee-shop signage; boomerang-pattern Formica.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver
- Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation
- Bold italic wedge-shaped display type evoking tailfins and forward motion

## Colors

- **bg** — #f4ede0
- **surface** — #fffaf3
- **surface-2** — #ffe3ec
- **text** — #2b2320
- **text-muted** — #6b5f56
- **primary** — #ff6f61
- **accent** — #1fb5a3
- **chrome** — #c8ccd0
- **gold** — #d4af37

## Typography

- Display: Futura, Century Gothic, sans-serif
- Body: Futura, Century Gothic, Trebuchet MS, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver; Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation; Bold italic wedge-shaped display type evoking tailfins and forward motion; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 10px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/populuxe · designmd.app -->
