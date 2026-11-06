---
version: "alpha"
name: "Dark Academia"
description: "Dark Academia visual system, translated from the Claude Artisan catalog for use in digital products. Moody browns, oxblood, forest green, cream; Serif type, old books, candlelight, tweed"
colors:
  primary: "#8b5e34"
  background: "#1c1712"
  surface: "#26201a"
  text: "#e8ddc7"
  accent: "#5a6b4f"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', 'EB Garamond', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'EB Garamond', Georgia, serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'EB Garamond', Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
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
  order: 306
  author: "designmd.app"
  source: "https://designmd.app/library/dark-academia"
  tags: ["风格模板", "oxblood", "forest green", "cream; Serif type"]
---
## Overview

Dark Academia visual system, translated from the Claude Artisan catalog for use in digital products. Moody browns, oxblood, forest green, cream; Serif type, old books, candlelight, tweed

- **Category:** niche
- **Era:** 2015–present (peak 2020)
- **Origin:** Tumblr/TikTok subculture romanticizing classic scholarship.
- **Reference:** 'Dead Poets Society' / 'The Secret History' moodboards.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Moody browns, oxblood, forest green, cream
- Serif type, old books, candlelight, tweed
- Gothic/Ivy-League architecture motifs
- Scholarly, nostalgic, melancholic

## Colors

- **bg** — #1c1712
- **surface** — #26201a
- **surface-2** — #332a20
- **text** — #e8ddc7
- **text-muted** — #a99a7f
- **primary** — #8b5e34
- **accent** — #5a6b4f
- **oxblood** — #6e2b2b
- **gold** — #b89b5e

## Typography

- Display: 'Cormorant Garamond', 'EB Garamond', serif
- Body: 'EB Garamond', Georgia, serif
- Mono: 'Courier Prime', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Moody browns, oxblood, forest green, cream; Serif type, old books, candlelight, tweed; Gothic/Ivy-League architecture motifs; Scholarly, nostalgic, melancholic; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/dark-academia · designmd.app -->
