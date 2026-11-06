---
version: "alpha"
name: "Swiss Punk / New Wave"
description: "Swiss Punk / New Wave visual system, translated from the Claude Artisan catalog for use in digital products. Deconstructed Swiss grid; tilted, layered type; Wide letter-spacing, stepped baselines, rules"
colors:
  primary: "#ff2e63"
  background: "#f1f0ea"
  surface: "#ffffff"
  text: "#16161a"
  accent: "#08b2e3"
  on-primary: "#000000"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Helvetica Neue', 'Univers', Arial, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Helvetica Neue', 'Univers', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Helvetica Neue', 'Univers', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "0px"
  md: "0px"
  lg: "0px"
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
  order: 757
  author: "designmd.app"
  source: "https://designmd.app/library/swiss-punk"
  tags: ["风格模板", "stepped baselines", "rules"]
---
## Overview

Swiss Punk / New Wave visual system, translated from the Claude Artisan catalog for use in digital products. Deconstructed Swiss grid; tilted, layered type; Wide letter-spacing, stepped baselines, rules

- **Category:** brutalist
- **Era:** 1978–1990
- **Origin:** Wolfgang Weingart (Basel), spread by April Greiman and Dan Friedman in the US.
- **Reference:** April Greiman 'Does It Make Sense?' (1986); Weingart Typographische Monatsblätter.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Deconstructed Swiss grid; tilted, layered type
- Wide letter-spacing, stepped baselines, rules
- Photographic collage, gradients (Greiman's digital work)
- Rebellion against rigid International Style

## Colors

- **bg** — #f1f0ea
- **surface** — #ffffff
- **surface-strong** — #e7e5db
- **border** — #16161a
- **text** — #16161a
- **text-muted** — #4c4c50
- **primary** — #ff2e63
- **accent** — #08b2e3
- **yellow** — #ffd400

## Typography

- Display: 'Helvetica Neue', 'Univers', Arial, sans-serif
- Body: 'Helvetica Neue', 'Univers', Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Deconstructed Swiss grid; tilted, layered type; Wide letter-spacing, stepped baselines, rules; Photographic collage, gradients (Greiman's digital work); Rebellion against rigid International Style; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/swiss-punk · designmd.app -->
