---
version: alpha
name: "Mondrian"
website: "https://mondrian.claro.com.br"
description: >-
  Design system da Claro Brasil cobrindo 100% dos produtos web e 80% dos apps
  da operadora. Vermelho Claro #D52B1E sobre branco com cinza neutro #ADAFAF,
  bibliotecas em seis plataformas (Figma, Vanilla, React, React Native, Android,
  Kotlin) alimentadas pelo Mondrian Tokens. Em produção desde 2019.
colors:
  primary: "#D52B1E"
  primary-dark: "#B32419"
  secondary: "#ADAFAF"
  ink: "#000000"
  canvas: "#FFFFFF"
typography:
  heading:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5"

gallery:
  order: 1688
  author: "designmd.app"
  source: "https://designmd.app/brands/mondrian-claro"
  tags: ["真实品牌"]
---

## Overview

**Mondrian** é o design system da **Claro Brasil**, maior operadora de telecom do país (grupo América Móvil). Em desenvolvimento desde 2019, hoje está presente em **100% dos produtos web e 80% dos apps** da operadora, com cerca de **75% de adoção das features** lançadas.

O nome é uma declaração de princípios: como as composições de Piet Mondrian, a interface se apoia em blocos estruturais claros — cores primárias reduzidas, grid explícito, componentes que se encaixam sem ambiguidade. O vermelho Claro é a âncora cromática; todo o resto é neutro e disciplinado.

### Ecossistema multiplataforma

- **Mondrian Figma** — biblioteca de design
- **Mondrian Vanilla** — CSS/JS sem dependências
- **Mondrian React** e **React Native**
- **Mondrian Android** (Kotlin)
- **Mondrian Tokens** — fonte única de verdade (cores, bordas, opacidades, sombras, espaçamentos, tipografias) distribuída para todas as plataformas

### Características-chave

- Vermelho `{colors.primary}` (#D52B1E, Pantone 485C) como cor de marca e ação
- Cinza `{colors.secondary}` (#ADAFAF) para estrutura secundária
- Componentes citados oficialmente: botões, links, textos, calendários, headers, footers e formulários
- Governança centralizada com processo formal de adoção por squads
- Case internacional: documentado pela Springer como serviço para B2B enterprise

## Colors

| Token | Hex | Uso |
|---|---|---|
| `{colors.primary}` | #D52B1E | Marca Claro, CTAs, destaques |
| `{colors.primary-dark}` | #B32419 | Hover/pressed inferido da rampa da marca |
| `{colors.secondary}` | #ADAFAF | Bordas, elementos secundários (Pantone Cool Gray 6C) |
| `{colors.ink}` | #000000 | Texto principal |
| `{colors.canvas}` | #FFFFFF | Fundos |

> **Ressalva:** os tokens numéricos completos (rampas semânticas, sombras, opacidades) são distribuídos via Mondrian Tokens internamente, mas não estão publicados. Este arquivo documenta a paleta de marca verificável publicamente + a arquitetura do sistema.

## Typography

Segundo o manual da marca Claro: família **DIN** (Alternate/Medium/Bold) para impresso e **Arial Regular/Bold** para superfícies digitais — escolha pragmática de stack nativo que garante consistência sem licenciamento de webfont.

| Token | Fonte | Peso | Uso |
|---|---|---|---|
| `{typography.heading}` | Arial | 700 | Títulos |
| `{typography.body}` | Arial | 400 | Corpo |

## Layout

Estrutura em blocos modulares no espírito do neoplasticismo: headers full-width, grids de cards alinhados, footers densos. Os valores exatos de espaçamento vivem no Mondrian Tokens e não são públicos.

## Elevation & Depth

Sombras discretas e bordas neutras separam superfícies; o sistema expõe sombras e opacidades como variáveis de token, indicando elevação controlada e padronizada entre plataformas.

## Shapes

Componentes com cantos arredondados moderados, consistentes entre web e apps nativos (botões pill nos CTAs principais dos apps).

## Components

Catálogo público cita botões, links, textos, calendários, headers, footers e formulários como base, distribuídos nas 6 bibliotecas. A arquitetura de tokens garante que um botão atualizado no Figma reflita idêntico no React e no Kotlin.

## Do's and Don'ts

**Do** consumir os valores via Mondrian Tokens — nunca hardcode de hex nas plataformas.

**Do** usar o vermelho como assinatura de ação e marca, com parcimônia.

**Don't** misturar a DIN (impresso) com contextos digitais ou substituir a Arial digital por outras sans-serif.

**Don't** criar variações locais de componentes fora da governança do time de DesignOps.

## Known Gaps

- Rampas semânticas completas, sombras, opacidades e escala tipográfica numérica não são públicas — extração limitada à paleta de marca e arquitetura documentadas
- Site oficial protegido contra automação; valores completos exigiriam acesso ao Mondrian Tokens interno

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [mondrian.claro.com.br/o-mondrian](https://mondrian.claro.com.br/o-mondrian) |
| Manual da marca | [Manual Da Marca CLARO (cópia pública)](https://pt.scribd.com/document/398627864/Manual-Da-Marca-CLARO) |
| Catálogo | [Design Systems Brasileiros — Mondrian](https://designsystemsbrasileiros.com/mondrian/) |
| Métricas | LinkedIn do product owner do Mondrian (2026): 100% web, 80% apps |
| Method | Public documentation |
| Date | 2026-08-21 |

<!-- Source: https://designmd.app/brands/mondrian-claro · designmd.app -->
