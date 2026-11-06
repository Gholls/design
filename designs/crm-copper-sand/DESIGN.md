---
version: "alpha"
name: "CRM Copper Sand"
description: "Modern CRM landing + dashboard-style UI using Geist font, a warm copper primary color (#C08532), and a soft neutral background (#F2F1ED). Ideal for plataformas crm, painéis de vendas, ferramentas de gestão comercial, dashboards saas. AI-ready template."
colors:
  primary: "#C08532"
  secondary: "#F2F1ED"
  tertiary: "#111827"
  neutral: "#9CA3AF"
  surface: "#16A34A"
  accent: "#DC2626"
typography:
  h1:
    fontFamily: Geist
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 284
  author: "designmd.app"
  source: "https://designmd.app/library/crm-copper-sand"
  tags: ["风格模板", "plataformas crm", "painéis de vendas", "dashboards saas"]
---

## Overview

Modern CRM landing + dashboard-style UI using Geist font, a warm copper primary color (#C08532), and a soft neutral background (#F2F1ED). Ideal for plataformas crm, painéis de vendas, ferramentas de gestão comercial, dashboards saas. AI-ready template. For years, CRM dashboards defaulted to the same sterile blue-gray palette that screamed 'enterprise software nobody wants to open.' The implicit message was clear: this is work, not craft. Salesforce set that tone in the early 2000s and everyone followed like lemmings.

The shift toward warm neutrals — copper, sand, terracotta — started gaining traction around 2021 when designers finally admitted that people who stare at dashboards eight hours a day deserve something that doesn't feel like a hospital waiting room. Copper tones carry warmth without sacrificing professionalism. Sand grounds the interface. Together they signal confidence and approachability, which is exactly what a sales team needs from their daily tool.

This palette choice isn't decorative. It's functional empathy. Warm neutrals reduce perceived cognitive load, make data feel less intimidating, and subtly communicate that the software was designed by humans who understand the monotony of pipeline management. The best modern CRMs — Folk, Attio, Clay — understood this instinctively.

- Density: 8/10 — Dense
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** General
- **Keywords:** dashboard CRM, Geist, cards modulares, foco em atividade comercial, ícones Hugeicons, visual limpo e analítico
- **Era:** 2020s Modern SaaS CRM
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Primária cobre** (#C08532) — Metallic accent, decorative detail
- **Neutro areia** (#F2F1ED) — Secondary surface or text color
- **Cinza grafite** (#111827) — Secondary text, borders, muted elements
- **Cinza médio** (#9CA3AF) — Secondary text, borders, muted elements
- **Verde sucesso** (#16A34A) — Success states, positive indicators
- **Vermelho alerta** (#DC2626) — Error states, destructive actions


## Typography

- **Display / Hero:** Geist — Weight 700, tight tracking, used for headline impact
- **Accent:** Segoe UI — Used for decorative or emphasis text
- **Body:** Geist — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Geist — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem


## Layout

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Cards claros sobre fundo quase branco, header em cobre com contraste forte, gráficos simples, bordas suaves, uso consistente de ícones Hugeicons para estados e ações

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (var(--radius-card)) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (var(--radius-card)) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Usar Geist como fonte principal em toda a interface
- Do Aplicar letter-spacing -0.15px em títulos
- Do labels e navegação
- Do Fundo neutro #F2F1ED com cards brancos levemente elevados
- Do Cor primária #C08532 em CTAs
- Do indicadores e gráficos
- Do Utilizar ícones Hugeicons em navegação
- Do botões e legendas de status
- Do Layout com cards de pipeline
- Do contatos
- Do negócios e atividades recente visíveis


## Use Case

CRM platforms, Sales panels, Commercial management tools, SaaS dashboards

<!-- Source: https://designmd.app/library/crm-copper-sand · designmd.app -->
