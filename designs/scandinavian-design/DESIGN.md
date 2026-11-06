---
version: "alpha"
name: "Scandinavian Design"
description: "Scandinavian visual system with neutral black-and-white foundation, restrained sans-serif typography and generous spacing."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
typography:
  h1:
    fontFamily: Inter Variable
    fontSize: 2.5rem
    fontWeight: 600
  body-md:
    fontFamily: Inter Variable
    fontSize: 1.0625rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    color: "#FFFFFF"
    borderRadius: "8px"
    padding: "12px 24px"

gallery:
  order: 695
  author: "designmd.app"
  source: "https://designmd.app/library/scandinavian-design"
  tags: ["风格模板"]
---

## Overview

Scandinavian Design — sistema visual nórdico de contenção funcional: fundação preto e branco neutra construída com alpha-black sobre branco, uma única família sans-serif, hierarquia criada por opacidade e espaço em vez de peso ou cor, capítulos generosos e decoração mínima. A imagens de produto carregam a expressão; a interface ao redor permanece quieta.

- Density: 4/10 — Airy
- Variance: 3/10 — Structured
- Motion: 2/10 — Minimal

- **Style:** Calm, Monochrome, Spacious, Restrained
- **Keywords:** Scandinavian, Nordic, monochrome, alpha-black ladder, restrained sans-serif, generous whitespace, quiet UI
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Light / ✓ Dark (inversão disciplinada)

## Colors

Escala de tinta neutra — hierarquia por opacidade, nunca por cinza tingido:

- **#FFFFFF** (#FFFFFF) — Canvas e superfície
- **#000000** (#000000) — Tinta primária (texto principal, ícones críticos)
- **rgb(0 0 0 / 64%)** — Tinta secundária (texto de apoio)
- **rgb(0 0 0 / 44–56%)** — Tinta terciária (metadados opcionais; elevar se houver leitura real)
- **rgb(0 0 0 / 10%)** — Bordas e separadores
- **rgb(0 0 0 / 5%)** — Hover; **rgb(0 0 0 / 9%)** — Pressed/selected
- **rgb(0 0 0 / 44%)** — Scrim sobre conteúdo

Regras: definir tinta com cores alfa (nunca `opacity` no contêiner); proibidos bege, creme e cinzas azulados/esverdeados; um único accent de marca é tolerado na ação primária; logo da marca permanece em cor cheia; marcas de terceiros vão para monocromático. Variante escura: canvas `#0A0A0A`, tinta primária branca, secundária `rgb(255 255 255 / 56%)`, terciária `36%` (50% acima de `#1A1A1A`), bordas `rgb(255 255 255 / 10–12%)`.

## Typography

Uma única família sans-serif. Padrão web: **Inter Variable** (se já licenciada, Scto Grotesk A dá caráter nórdico).

- **Display / Hero:** Inter Variable — weight 500–600, line-height 1.05–1.15, tracking levemente negativo. Evitar 700–900.
- **Body:** Inter Variable — 16–18px, weight 400, line-height 1.5–1.6, tracking neutro, medida 55–68 caracteres.
- **Labels / Controls:** weight 500, sentence case — nunca all-caps nem lowercase forçado.
- Máximo 3–4 estilos de texto por tela editorial (6 em telas densas); hierarquia por tamanho e whitespace, não por muitos pesos.

## Layout

- **Grid:** max-width ~1200px, margens 24px mobile / 40–64px desktop.
- **Spacing rhythm:** base 8px (ajustes de 4px). Transições entre capítulos: 96–144px desktop / 64–96px mobile.
- **Capítulos, não cards:** páginas longas como sequência de capítulos espaçosos com uma ideia cada — heading conciso, explicação curta, 3–4 resumos de features, uma visual dominante. Alternar fills `rgb(0 0 0 / 4%)` para ritmo.
- **Divisórias raras:** espaço antes de linha; ~1 regra por viewport; nunca dividir par imagem-legenda ou label-campo; linhas verticais de grid multi-coluna são mantidas.
- **Radii:** 6–12px, consistentes por tipo de componente; pills só como família distinta de tags/filtros.
- **Sem sombras** exceto quando elevação comunica comportamento (sombra neutra quase invisível).
- **Alinhamento à esquerda** por padrão (headings, labels, metadata, footer).

## Effects

- Transições quietas < 300ms; `ease-out` em entradas, `ease-in-out` em movimento on-screen, `ease` em cor/hover.
- Sem animação de entrada a partir de `scale(0)`; usar `scale(0.95–0.98)` + opacidade.
- Respeitar `prefers-reduced-motion`; hover-motion apenas com `(hover: hover) and (pointer: fine)`.
- Proibidos: gradientes decorativos, texturas, glows, sombras grandes, emoji como iconografia.

## Anti-patterns (escalation triggers)

- Cinzas tingidos quentes/frios no lugar de alpha-black neutro
- Serifas display ou sistemas serif/sans misturados
- All-caps ou CSS `text-transform: uppercase`
- Emoji como ícones de interface
- Divisórias separando elemento de sua própria legenda/metadata
- Cards uniformes sem elemento dominante
- Pills em controles retangulares comuns; raios/alturas/paddings inconsistentes entre CTAs equivalentes
- Cor removida de estados semânticos (erro, sucesso, foco, selecionado)

## Use Case

Landing pages editoriais, sites de produto SaaS, portfólios, documentações, dashboards calmos e qualquer superfície onde compreensão e calma valem mais que expressividade cromática.
<!-- Source: https://designmd.app/library/scandinavian-design · designmd.app -->
