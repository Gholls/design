---
version: alpha
name: Nuvemshop-Nimbus-design-system
description: The official open-source design system by Nuvemshop/Tiendanube — Latin America's leading e-commerce platform. Nimbus uses a semantic token architecture (ref → sys) built on a blue-primary palette with Geist Sans as the sole typographic voice, 4px-base spacing scale, and a 5-level elevation system anchored by layered neutral shadows. Designed for accessibility, consistency, and performance across the e-commerce admin experience.

colors:
  primary-interactive: "#0059D5"
  primary-interactive-hover: "#00429F"
  primary-interactive-pressed: "#00347D"
  primary-surface: "#EEF5FF"
  primary-surface-highlight: "#96C1FC"
  primary-text-low: "#00255A"
  primary-text-high: "#000B19"
  success-interactive: "#00C87B"
  success-interactive-hover: "#00935B"
  success-interactive-pressed: "#007447"
  success-surface: "#DEFEF2"
  success-surface-highlight: "#7AF7C7"
  success-text-low: "#005333"
  success-text-high: "#001910"
  warning-interactive: "#C87B00"
  warning-interactive-hover: "#935B00"
  warning-interactive-pressed: "#744700"
  warning-surface: "#FEF2DE"
  warning-surface-highlight: "#F7C77A"
  warning-text-low: "#533300"
  warning-text-high: "#191000"
  danger-interactive: "#C80003"
  danger-interactive-hover: "#930002"
  danger-interactive-pressed: "#740002"
  danger-surface: "#FEDEDE"
  danger-surface-highlight: "#F77A7C"
  danger-text-low: "#530001"
  danger-text-high: "#190000"
  neutral-background: "#FFFFFF"
  neutral-surface: "#F6F6F6"
  neutral-surface-disabled: "#E7E7E7"
  neutral-surface-highlight: "#D1D1D1"
  neutral-interactive: "#B0B0B0"
  neutral-interactive-hover: "#888888"
  neutral-interactive-pressed: "#777777"
  neutral-text-disabled: "#6D6D6D"
  neutral-text-low: "#5D5D5D"
  neutral-text-high: "#0A0A0A"
  ai-generative-interactive: "#E2DCFA"
  ai-generative-text-high: "#1F1254"
  ai-gradient-blue-high: "#0050C3"
  ai-gradient-purple-high: "#4629BA"
  ai-gradient-pink-high: "#D8446E"

typography:
  title-h1:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
  title-h2:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 32px
  title-h3:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 28px
  title-h4:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 24px
  title-h5:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  title-h6:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  body-highlight:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-base:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-caption:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  mono:
    fontFamily: Geist Mono, 'Roboto Mono', monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

rounded:
  0-5: 2px
  1: 4px
  base: 6px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  full: 9999px
  half: "9999px"

spacing:
  0-5: 2px
  1: 4px
  1-5: 6px
  2: 8px
  2-5: 10px
  3: 12px
  3-5: 14px
  4: 16px
  4-5: 18px
  5: 20px
  6: 24px
  7: 28px
  8: 32px
  9: 36px
  10: 40px
  11: 44px
  12: 48px
  14: 56px
  16: 64px
  18: 72px
  20: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary-interactive}"
    textColor: "{colors.neutral-background}"
    typography: "{typography.body-base}"
    fontWeight: 500
    rounded: "{rounded.base}"
    padding: "{spacing.2} {spacing.4}"
  button-secondary:
    backgroundColor: "{colors.neutral-background}"
    textColor: "{colors.primary-interactive}"
    borderColor: "{colors.primary-interactive}"
    typography: "{typography.body-base}"
    fontWeight: 500
    rounded: "{rounded.base}"
    padding: "{spacing.2} {spacing.4}"
  button-danger:
    backgroundColor: "{colors.danger-interactive}"
    textColor: "{colors.neutral-background}"
    typography: "{typography.body-base}"
    fontWeight: 500
    rounded: "{rounded.base}"
    padding: "{spacing.2} {spacing.4}"
  card:
    backgroundColor: "{colors.neutral-background}"
    textColor: "{colors.neutral-text-high}"
    borderColor: "{colors.neutral-surface-highlight}"
    rounded: "{rounded.2}"
    padding: "{spacing.4}"
  input:
    backgroundColor: "{colors.neutral-background}"
    textColor: "{colors.neutral-text-high}"
    borderColor: "{colors.neutral-interactive}"
    typography: "{typography.body-base}"
    rounded: "{rounded.base}"
    padding: "{spacing.2} {spacing.3}"
  chip:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text-high}"
    typography: "{typography.body-caption}"
    rounded: "{rounded.full}"
    padding: "{spacing.0-5} {spacing.2}"
  badge:
    backgroundColor: "{colors.primary-surface}"
    textColor: "{colors.primary-text-low}"
    typography: "{typography.body-caption}"
    rounded: "{rounded.full}"
    padding: "{spacing.0-5} {spacing.1}"
  alert-success:
    backgroundColor: "{colors.success-surface}"
    textColor: "{colors.success-text-high}"
    borderColor: "{colors.success-interactive}"
    rounded: "{rounded.2}"
    padding: "{spacing.3} {spacing.4}"
  alert-danger:
    backgroundColor: "{colors.danger-surface}"
    textColor: "{colors.danger-text-high}"
    borderColor: "{colors.danger-interactive}"
    rounded: "{rounded.2}"
    padding: "{spacing.3} {spacing.4}"
  alert-warning:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.warning-text-high}"
    borderColor: "{colors.warning-interactive}"
    rounded: "{rounded.2}"
    padding: "{spacing.3} {spacing.4}"
  modal:
    backgroundColor: "{colors.neutral-background}"
    textColor: "{colors.neutral-text-high}"
    rounded: "{rounded.2}"
    padding: "{spacing.6}"
  sidebar:
    backgroundColor: "{colors.neutral-background}"
    textColor: "{colors.neutral-text-high}"
    padding: "{spacing.4}"
  table:
    backgroundColor: "{colors.neutral-background}"
    textColor: "{colors.neutral-text-high}"
    headerBackground: "{colors.neutral-surface}"
    borderColor: "{colors.neutral-surface-highlight}"
    padding: "{spacing.3} {spacing.4}"
  tabs:
    textColor: "{colors.neutral-text-low}"
    activeTextColor: "{colors.primary-interactive}"
    activeBorderColor: "{colors.primary-interactive}"
    typography: "{typography.body-base}"
    fontWeight: 500
    padding: "{spacing.2} {spacing.4}"
  skeleton:
    backgroundColor: "{colors.neutral-surface-disabled}"
    rounded: "{rounded.1}"


gallery:
  order: 1696
  author: "designmd.app"
  source: "https://designmd.app/brands/nuvemshop-nimbus"
  tags: ["真实品牌", "consistency"]
---


## Overview

Nimbus is the open-source design system built by Nuvemshop (Tiendanube) — Latin America's largest independent e-commerce platform. It powers the admin dashboard, partner app ecosystem, and internal tooling across all Nuvemshop products. The system follows a reference → semantic token architecture where raw color values (ref tokens) are mapped to purpose-driven roles (sys tokens), enabling both light and dark themes from a single source of truth.

The visual language is purposefully restrained and professional. A strong blue primary (`#0059D5`) anchors the interactive layer while a predominantly neutral canvas (`#FFFFFF` → `#F6F6F6`) keeps the admin interface clean and content-focused. Typography is handled entirely by Vercel's Geist family (Sans + Mono) at three weights (400 / 500 / 600), creating a modern, geometric, developer-friendly reading experience.

Nimbus ships as individually installable npm packages (`@nimbus-ds/components`, `@nimbus-ds/styles`, `@nimbus-ds/tokens`) with React components and CSS token exports for maximum adoption flexibility. The system is purpose-built for the e-commerce vertical — emphasizing data density, multi-step workflows, and clear feedback states (success, warning, danger) that merchants encounter daily.

**Key Characteristics:**
- **Semantic token architecture** — two-tier color system (ref → sys) with 5 semantic categories: primary, success, warning, danger, neutral, plus an AI generative palette.
- **Single font family** — Geist Sans/Mono handles all typographic roles. No secondary or decorative faces.
- **4px base unit** — The spacing scale starts at `0.125rem` (2px) and progresses through a consistent rem-based system up to `5rem` (80px).
- **5-level elevation** — Shadow tokens from `level-0` (none) through `level-5` (24px offset), using neutral `{colors.neutral-interactive-hover}` as shadow color.
- **Accessible by default** — Color contrast ratios built into the token hierarchy (text-high for primary content, text-low for secondary).
- **Dark mode native** — Every semantic token has a dark-mode counterpart defined at the sys layer.
- **E-commerce focused** — Components optimized for admin dashboards, order management, and merchant workflows.

## Colors

### Primary (Brand Blue)
- **Primary Interactive** (`{colors.primary-interactive}` — `#0059D5`): The brand's core action color. All primary buttons, links, active states, and focus rings.
- **Primary Interactive Hover** (`{colors.primary-interactive-hover}` — `#00429F`): Hover state for primary interactive elements.
- **Primary Interactive Pressed** (`{colors.primary-interactive-pressed}` — `#00347D`): Pressed/active state.
- **Primary Surface** (`{colors.primary-surface}` — `#EEF5FF`): Light blue tint for selected rows, active tab backgrounds, info callouts.
- **Primary Surface Highlight** (`{colors.primary-surface-highlight}` — `#96C1FC`): Stronger emphasis surface — progress bars, selection rings.
- **Primary Text Low** (`{colors.primary-text-low}` — `#00255A`): Secondary text on primary surfaces.
- **Primary Text High** (`{colors.primary-text-high}` — `#000B19`): High-contrast text on primary surfaces.

### Success (Green)
- **Success Interactive** (`{colors.success-interactive}` — `#00C87B`): Positive action buttons, confirmation states.
- **Success Surface** (`{colors.success-surface}` — `#DEFEF2`): Background for success alerts and banners.
- **Success Text High** (`{colors.success-text-high}` — `#001910`): Text on success surfaces.

### Warning (Amber)
- **Warning Interactive** (`{colors.warning-interactive}` — `#C87B00`): Caution-state buttons and indicators.
- **Warning Surface** (`{colors.warning-surface}` — `#FEF2DE`): Background for warning alerts.
- **Warning Text High** (`{colors.warning-text-high}` — `#191000`): Text on warning surfaces.

### Danger (Red)
- **Danger Interactive** (`{colors.danger-interactive}` — `#C80003`): Destructive action buttons, error states.
- **Danger Surface** (`{colors.danger-surface}` — `#FEDEDE`): Background for error alerts and validation messages.
- **Danger Text High** (`{colors.danger-text-high}` — `#190000`): Text on danger surfaces.

### Neutral
- **Background** (`{colors.neutral-background}` — `#FFFFFF`): The base page background.
- **Surface** (`{colors.neutral-surface}` — `#F6F6F6`): Card backgrounds, table headers, subtle separation.
- **Surface Disabled** (`{colors.neutral-surface-disabled}` — `#E7E7E7`): Disabled element backgrounds, skeleton loaders.
- **Surface Highlight** (`{colors.neutral-surface-highlight}` — `#D1D1D1`): Borders, dividers, pressed surfaces.
- **Interactive** (`{colors.neutral-interactive}` — `#B0B0B0`): Default input borders, inactive toggle tracks.
- **Interactive Hover** (`{colors.neutral-interactive-hover}` — `#888888`): Hovered neutral elements.
- **Text Disabled** (`{colors.neutral-text-disabled}` — `#6D6D6D`): Disabled text and placeholders.
- **Text Low** (`{colors.neutral-text-low}` — `#5D5D5D`): Secondary body text, captions, metadata.
- **Text High** (`{colors.neutral-text-high}` — `#0A0A0A`): Primary text — headings and body content.

### AI Generative (Purple)
- **AI Interactive** (`{colors.ai-generative-interactive}` — `#E2DCFA`): AI feature backgrounds and surfaces.
- **AI Text High** (`{colors.ai-generative-text-high}` — `#1F1254`): Text on AI surfaces.
- **AI Gradient Blue** (`{colors.ai-gradient-blue-high}` — `#0050C3`): Gradient stop for AI feature branding.
- **AI Gradient Purple** (`{colors.ai-gradient-purple-high}` — `#4629BA`): Gradient stop for AI feature branding.
- **AI Gradient Pink** (`{colors.ai-gradient-pink-high}` — `#D8446E`): Gradient stop for AI feature branding.

## Typography

### Font Family
A single font family — **Geist** by Vercel — serves every typographic role across the system. The geometric sans-serif provides excellent readability at small sizes (critical for data-dense admin UIs) while maintaining personality at display sizes. **Geist Mono** handles code blocks, technical metadata, and monospaced content.

Fallback stack: `-apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', arial, sans-serif`.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.title-h1}` | 32px (2rem) | 600 | 40px (2.5rem) | Page titles. One per page max. |
| `{typography.title-h2}` | 28px (1.75rem) | 600 | 32px (2rem) | Section headings dividing large content areas. |
| `{typography.title-h3}` | 24px (1.5rem) | 600 | 28px (1.75rem) | Sub-section headings. |
| `{typography.title-h4}` | 20px (1.25rem) | 500 | 24px (1.5rem) | Card titles, dialog headings. |
| `{typography.title-h5}` | 16px (1rem) | 500 | 24px (1.5rem) | Low-hierarchy titles, highlighted text. |
| `{typography.title-h6}` | 14px (0.875rem) | 500 | 20px (1.25rem) | Smallest heading role. |
| `{typography.body-highlight}` | 16px (1rem) | 400 | 24px (1.5rem) | Emphasized body text, lead paragraphs. |
| `{typography.body-base}` | 14px (0.875rem) | 400 | 20px (1.25rem) | Default body text for all content. |
| `{typography.body-caption}` | 12px (0.75rem) | 400 | 16px (1rem) | Captions, labels, helper text, chips. |
| `{typography.mono}` | 14px (0.875rem) | 400 | 20px (1.25rem) | Code blocks, technical values. |

### Weight System
- **Regular (400)** — body text, descriptions, plain content.
- **Medium (500)** — buttons, labels, low-hierarchy titles (h4–h6), navigation items.
- **Bold (600)** — high-hierarchy titles (h1–h3). The system never goes above 600.

### Principles
- **Three weights maximum.** 400 / 500 / 600 — no 700 or 800. The hierarchy is achieved through size and weight combination, not extreme boldness.
- **Rem-based sizing.** All font sizes use rem units for accessibility (user font-size preferences respected).
- **Generous line heights.** Body text at 1.43× ratio (20px / 14px), titles at 1.17–1.25× — optimized for readability in dense admin layouts.
- **Single family discipline.** No decorative or display fonts. Geist's geometric neutrality keeps the admin feeling professional and content-focused.

## Layout

### Spacing System
- **Base unit**: 4px (`0.25rem`).
- **Scale**: `{spacing.0-5}` 2px · `{spacing.1}` 4px · `{spacing.1-5}` 6px · `{spacing.2}` 8px · `{spacing.2-5}` 10px · `{spacing.3}` 12px · `{spacing.4}` 16px · `{spacing.5}` 20px · `{spacing.6}` 24px · `{spacing.8}` 32px · `{spacing.10}` 40px · `{spacing.12}` 48px · `{spacing.16}` 64px · `{spacing.20}` 80px.
- **Component internal padding**: `{spacing.2}` to `{spacing.4}` (8–16px) for atomic components.
- **Card padding**: `{spacing.4}` (16px) standard.
- **Section separation**: `{spacing.6}` to `{spacing.8}` (24–32px) between unrelated content blocks.

### Grid & Breakpoints

| Breakpoint | Width | Use |
|---|---|---|
| `xs` | 0px | Mobile — single column layouts. |
| `md` | 672px | Tablet — two-column grids begin. |
| `lg` | 1024px | Small desktop — full sidebar + content. |
| `xl` | 1200px | Desktop — expanded content areas. |
| `xxl` | 1920px | Extra-large displays. |

### Responsive Strategy
- Admin layout: fixed sidebar (collapsed on mobile) + fluid content area.
- Content grids collapse from multi-column to single-column at `md` breakpoint.
- Tables become scrollable or stack on mobile.
- Touch targets: minimum 44px (achieved through padding + line-height combinations).

## Elevation & Depth

Nimbus uses a 6-level shadow system (0–5) where shadow color references the neutral interactive-hover token (`#888888`) for consistency with the neutral palette.

| Level | Value | Use |
|---|---|---|
| Level 0 | `none` | Flat surfaces, inline content. |
| Level 1 | `0px 0px 1px 0px` neutral-interactive-hover | Subtle edge definition — input focus rings, dividers. |
| Level 2 | `0px 0px 2px 0px` neutral-interactive-hover | Slight lift — hovered cards, active inputs. |
| Level 3 | `0px 3px 6px 0px` neutral-surface-highlight + `0px 0px 1px 0px` neutral-interactive-hover | Medium elevation — dropdowns, popovers, floating actions. |
| Level 4 | `0px 12px 16px 0px` neutral-surface-highlight + `0px 0px 1px 0px` neutral-interactive-hover | High elevation — modals, sidebars. |
| Level 5 | `0px 24px 32px 0px` neutral-surface-highlight + `0px 0px 1px 0px` neutral-interactive-hover | Maximum elevation — dialogs over dimmed overlays. |

### z-Index Layering

| Token | Value | Use |
|---|---|---|
| 100–300 | 100–300 | Base layer elements, sticky headers. |
| 400–500 | 400–500 | Floating elements, dropdown menus. |
| 600 | 600 | Overlays, sidebars. |
| 700 | 700 | Modals, sidebars. |
| 800 | 800 | Toasts, tooltips, popovers. |
| 900 | 900 | Highest general-purpose layer. |
| 1000–1100 | 1000–1100 | Reserved for top-priority modals. |

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.0-5}` | 2px | Very subtle rounding — small inline elements. |
| `{rounded.1}` | 4px | Medium/small elements — badges, skeleton loaders. |
| `{rounded.base}` | 6px | Default component radius — buttons, inputs. |
| `{rounded.2}` | 8px | Cards, alerts, modals, larger containers. |
| `{rounded.3}` | 12px | Large panels, feature cards. |
| `{rounded.4}` | 16px | Hero elements, promotional cards. |
| `{rounded.5}` | 20px | Extra-large containers. |
| `{rounded.6}` | 24px | Oversized decorative elements. |
| `{rounded.full}` | 9999px | Pills, chips, badges, avatars. |
| `{rounded.half}` | 50% | Perfect circles (1:1 aspect ratio elements). |

### Border Width Scale

| Token | Value | Use |
|---|---|---|
| 1 | 0.0625rem (1px) | Default borders — inputs, cards, dividers. |
| 2 | 0.125rem (2px) | Emphasis borders — focus rings, active states. |
| 3 | 0.1875rem (3px) | Strong borders — selected tabs, active indicators. |

## Components

### Atomic Components
The foundational building blocks:

- **Badge** — Status indicators with semantic color variants (primary, success, warning, danger).
- **Box** — Layout primitive with spacing, flex, and responsive props.
- **Button** — Primary, secondary, danger, and text variants. 6px radius, medium weight labels.
- **Checkbox** — Form selection with label and helper text.
- **Chip** — Pill-shaped tags for categories and filters.
- **Divider** — Horizontal/vertical content separators.
- **FileUploader** — Drag-and-drop file upload zone.
- **Icon** — SVG icon wrapper from the Nimbus Icons library.
- **IconButton** — Icon-only circular buttons for toolbars.
- **Input** — Text input with prefix/suffix slots, validation states.
- **Label** — Form field labels with required indicator.
- **Link** — Inline and standalone link styles.
- **List** — Ordered and unordered list containers.
- **MultiSelect** — Multi-value selection dropdown.
- **Popover** — Floating content triggered by click/hover.
- **ProgressBar** — Linear progress indicator.
- **Radio** — Radio button groups.
- **Select** — Single-value dropdown selection.
- **Skeleton** — Loading placeholder animations.
- **Slider** — Range input slider.
- **Spinner** — Loading indicator (circular).
- **Tag** — Removable tags for multi-value inputs.
- **Text** — Typography component with semantic size/weight props.
- **Textarea** — Multi-line text input.
- **Thumbnail** — Image preview containers.
- **Title** — Heading component (h1–h6) with built-in spacing.
- **Toast** — Temporary notification messages.
- **Toggle** — On/off switch toggle.
- **Tooltip** — Contextual hover information.

### Composite Components
Higher-level patterns composed from atomic elements:

- **Accordion** — Expandable content sections.
- **Alert** — Persistent feedback banners (success, warning, danger, info).
- **Card** — Content container with header, body, and footer slots.
- **Collapsible** — Show/hide content toggle.
- **Modal** — Dialog overlay with backdrop.
- **Pagination** — Page navigation controls.
- **ScrollPane** — Scrollable content container.
- **SegmentedControl** — Tab-like option selector.
- **Sidebar** — Navigation drawer (fixed or overlay).
- **SplitButton** — Button with dropdown action menu.
- **Stepper** — Multi-step workflow indicator.
- **Table** — Data table with sorting, selection, and pagination.
- **Tabs** — Tabbed content navigation.
- **TimePicker** — Time selection input.

### Motion

| Token | Duration | Use |
|---|---|---|
| `motion.speed.fast` | 150ms | Micro-interactions — hover, focus, toggle. |
| `motion.speed.base` | 300ms | Standard transitions — dropdowns, tabs. |
| `motion.speed.slow` | 450ms | Emphasis animations — modals appearing. |
| `motion.speed.slower` | 600ms | Complex sequences — page transitions. |

## Do's and Don'ts

### Do's
- ✅ Use semantic color tokens (`primary-interactive`, `danger-surface`) instead of raw hex values.
- ✅ Stick to the 3-weight system (400/500/600) — never use 700+ weights.
- ✅ Use `{spacing.4}` (16px) as default card padding.
- ✅ Apply `{rounded.base}` (6px) for interactive elements and `{rounded.2}` (8px) for containers.
- ✅ Use the shadow level system for elevation — don't create custom shadows.
- ✅ Respect the breakpoint tokens for responsive layouts.
- ✅ Use Geist Sans as the sole font family — never mix with other sans-serif faces.
- ✅ Use `{colors.neutral-text-high}` for primary content and `{colors.neutral-text-low}` for secondary.
- ✅ Import components individually (`@nimbus-ds/button`) for optimal tree-shaking.
- ✅ Use the ThemeProvider for dark mode — never hardcode dark-mode colors.

### Don'ts
- ❌ Don't use raw color hex values — always reference semantic tokens.
- ❌ Don't exceed font-weight 600 — the system caps at semibold.
- ❌ Don't mix spacing values outside the defined scale.
- ❌ Don't use custom border-radius values — pick from the defined scale.
- ❌ Don't apply shadows arbitrarily — use the 0–5 level system.
- ❌ Don't use `{colors.primary-interactive}` for text — use `{colors.primary-text-low}` or `{colors.primary-text-high}`.
- ❌ Don't combine multiple font families — Geist alone handles all roles.
- ❌ Don't hardcode breakpoint values — use the token names.
- ❌ Don't use `{colors.neutral-interactive}` for text — it's for borders and non-text elements.
- ❌ Don't create one-off components — compose from atomic primitives.

---

## Attribution

| Field | Value |
|---|---|
| Source | github.com/TiendaNube/nimbus-design-system |
| Method | Open-source repository analysis (tokens/src JSON files) |
| Date | 2026-07-05 |
| License | MIT |
| Official docs | nimbus.nuvemshop.com.br |

<!-- Source: https://designmd.app/brands/nuvemshop-nimbus · designmd.app -->
