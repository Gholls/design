---
version: "alpha"
name: "Postmodern Graphic Design"
description: "Postmodern Graphic Design visual system, translated from the Claude Artisan catalog for use in digital products. Rejects rigid grid and objectivity; Layering, collage, historical pastiche, irony"
colors:
  primary: "#e0247a"
  background: "#efe9df"
  surface: "#ffffff"
  text: "#17171a"
  accent: "#2b6df0"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "16px"
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
  order: 640
  author: "designmd.app"
  source: "https://designmd.app/library/postmodernism"
  tags: ["风格模板", "collage", "historical pastiche", "irony"]
---
## Overview

Postmodern Graphic Design visual system, translated from the Claude Artisan catalog for use in digital products. Rejects rigid grid and objectivity; Layering, collage, historical pastiche, irony

- **Category:** historical
- **Era:** 1970s–1990s
- **Origin:** Reaction to Modernism (Wolfgang Weingart, April Greiman, David Carson).
- **Reference:** Emigre magazine; MTV identity; Cranbrook work.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Rejects rigid grid and objectivity
- Layering, collage, historical pastiche, irony
- Mixed type, texture, decoration
- Expressive and subjective

## Colors

- **bg** — #efe9df
- **surface** — #ffffff
- **surface-strong** — #fff2b8
- **border** — #17171a
- **text** — #17171a
- **text-muted** — #514f52
- **primary** — #e0247a
- **accent** — #2b6df0
- **clash** — #ffce00

## Typography

- Display: Georgia, 'Times New Roman', serif
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rejects rigid grid and objectivity; Layering, collage, historical pastiche, irony; Mixed type, texture, decoration; Expressive and subjective; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 999px 4px 999px 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/postmodernism · designmd.app -->
