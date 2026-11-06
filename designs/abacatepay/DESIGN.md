---
name: "AbacatePay"
description: "Linguagem visual pública da AbacatePay, plataforma brasileira de pagamentos. Uma interface leve e direta que combina verde-lima, verde-escuro e a dupla tipográfica Fustat e Inter Tight."
colors:
  brand:
    lime: "#9EEA6C"
    green: "#58C411"
    darkGreen: "#244C4E"
    pulp: "#89BA4F"
    outline: "#337D63"
    pit: "#804B35"
  semantic:
    action: "#9EEA6C"
    emphasis: "#58C411"
    textStrong: "#244C4E"
    text: "#4C5267"
    background: "#E2E7F1"
    surface: "#FFFFFF"
typography:
  headline:
    fontFamily: "Fustat, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter Tight, sans-serif"
    fontWeight: 500
    lineHeight: 1.8
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"

gallery:
  order: 1665
  author: "designmd.app"
  source: "https://designmd.app/brands/abacatepay"
  tags: ["真实品牌"]
---

## Overview

**AbacatePay** é uma plataforma brasileira de pagamentos. Seu guia público de marca privilegia uma comunicação simples, amigável e reconhecível: o verde-lima chama para a ação; o verde-escuro organiza títulos, wordmark e fundos de alto contraste; e os tons suaves mantêm a interface leve.

O sistema evita ornamentação excessiva. A marca usa frases curtas, diretas e em português brasileiro, com o benefício apresentado antes do detalhe. A personalidade vem da paleta inspirada no abacate e de formas macias, não de efeitos visuais pesados.

### Princípios de design

1. **Clareza antes do detalhe** — explique o benefício de forma direta e deixe a ação evidente.
2. **Verde com função** — o lima é reservado para botões, ações e destaques; não é decoração indiscriminada.
3. **Contraste preservado** — use o verde-escuro para texto forte e fundos que recebem a marca negativa.
4. **Leveza estrutural** — superfícies brancas, fundo azul-acinzentado claro e bordas discretas evitam ruído.
5. **Marca íntegra** — use os arquivos oficiais, mantenha proporção e respiro, sem efeitos ou recoloração.

---

## Colors

### Paleta pública

| Token | Hex | Uso |
|---|---|---|
| `brand.lime` | `#9EEA6C` | Ações principais, botões e destaques |
| `brand.green` | `#58C411` | Ênfase em títulos e links |
| `brand.darkGreen` | `#244C4E` | Títulos, wordmark e fundos escuros |
| `brand.pulp` | `#89BA4F` | Polpa do símbolo; acento complementar |
| `brand.outline` | `#337D63` | Contorno do símbolo e acentos secundários |
| `brand.pit` | `#804B35` | Caroço do símbolo colorido |
| `text.default` | `#4C5267` | Parágrafos e descrições |
| `surface.background` | `#E2E7F1` | Fundo estrutural das páginas |
| `surface.default` | `#FFFFFF` | Superfícies e marca negativa |

### Aplicação de cor

- Use `#9EEA6C` para o CTA principal e elementos que pedem interação imediata.
- Use `#244C4E` como cor de texto de alto contraste e em grandes áreas escuras.
- Use `#4C5267` no corpo de texto; não substitua parágrafos inteiros pelo verde-lima.
- Equilibre áreas brancas com `#E2E7F1` em planos de fundo e bordas `#E2E7F1` em superfícies brancas.
- Os verdes do símbolo têm função de marca: não introduza novos degradês ou cores concorrentes.

---

## Typography

### Famílias

| Papel | Família | Especificação pública |
|---|---|---|
| Títulos | Fustat | Semibold, tracking apertado, verde-escuro |
| Texto | Inter Tight | Medium, entrelinha folgada, cinza `#4C5267` |

```css
font-family: "Fustat", sans-serif; /* títulos */
font-family: "Inter Tight", sans-serif; /* UI e corpo */
```

### Hierarquia sugerida

| Token | Tamanho | Peso | Uso |
|---|---:|---:|---|
| `display` | 48–64px | 600 | Hero e mensagens de campanha |
| `heading` | 28–40px | 600 | Títulos de seção e cards importantes |
| `title` | 20–24px | 600 | Títulos de componente |
| `body` | 16–18px | 500 | Texto explicativo |
| `label` | 12–14px | 600 | Labels, navegação e metadados |

Mantenha títulos compactos e corpo com `line-height` próximo de `1.8`. O texto deve ser curto, útil e em português brasileiro quando o público for local.

---

## Layout

O site público utiliza composição arejada, grids responsivos e cartões com bastante espaço interno. Comece em uma escala de 8px: `8`, `16`, `24`, `32` e `48px`. Prefira uma coluna em telas pequenas e duas ou três colunas apenas quando o conteúdo tiver espaço para respirar.

- **Mobile:** margens laterais de 16–24px, CTAs fáceis de tocar e cartões empilhados.
- **Tablet:** use duas colunas para grupos de recursos e paleta.
- **Desktop:** limite o conteúdo a aproximadamente 1.200px e preserve áreas vazias ao redor de hero e marca.
- **Bordas:** `#E2E7F1`, 1px, sem contrastes agressivos.

---

## Elevation & Depth

A hierarquia é predominantemente plana. Diferencie blocos com fundo, borda e espaçamento antes de recorrer a sombra. Quando necessária, a sombra deve ser discreta, apenas para controles flutuantes ou card em hover.

```css
--shadow-low: 0 2px 8px rgba(36, 76, 78, 0.08);
--shadow-hover: 0 8px 24px rgba(36, 76, 78, 0.14);
```

Evite brilho, 3D, contorno extra ou filtros aplicados ao símbolo e ao wordmark.

---

## Shapes

Use raios generosos: 16px para cards e inputs, 24px para blocos de destaque e `999px` para pills e botões. Os contornos são suaves e funcionais; não misture formas rígidas com uma linguagem excessivamente tecnológica.

O símbolo pode ser usado sozinho em favicon, avatar ou espaços pequenos. Para a marca completa, use os SVGs ou PNGs oficiais e mantenha uma área livre ao redor equivalente, no mínimo, à altura visual do caroço.

---

## Components

### Botões

- **Primário:** fundo `#9EEA6C`, texto `#244C4E`, pill, peso 600. Use para a ação principal da tela.
- **Secundário:** superfície branca ou transparente, borda `#244C4E`, texto `#244C4E`.
- **Link:** `#58C411`, com indicação clara de hover e foco.
- **Estados:** escureça levemente a superfície ou adicione borda/foco; não dependa só de mudança de cor.

### Cards e formulários

- Cards: fundo branco, borda `#E2E7F1`, raio 16px e padding de 24–32px.
- Inputs: texto `#244C4E`, label claro, borda suave e outline de foco visível em verde-escuro.
- Feedback: mantenha mensagem e ícone explícitos; não há tokens públicos de erro/alerta no guia, portanto defina-os sem competir com a paleta de marca.

### Navegação

Use navegação curta e rótulos objetivos. O cabeçalho deve priorizar o nome/símbolo, os links essenciais e um único CTA de maior contraste.

---

## Do's and Don'ts

### Faça

- Use os logos oficiais em SVG ou PNG.
- Preserve a proporção e o espaço de respiro da marca.
- Escreva **AbacatePay** exatamente assim em texto corrido.
- Dê protagonismo ao benefício e à ação.
- Aplique Fustat nos títulos e Inter Tight no texto.
- Garanta contraste suficiente entre texto, botão e plano de fundo.
- Use verde-lima para ações e destaques realmente importantes.
- Mantenha cards e páginas arejados.

### Não faça

- Não redesenhe o abacate a partir de um print.
- Não estique, achate, rotacione ou crie perspectiva para o logo.
- Não recolora o símbolo, caroço ou wordmark.
- Não acrescente sombra, brilho, contorno, 3D ou filtro à marca.
- Não aplique a logo sem contraste suficiente.
- Não escreva “Abacatepay”, “abacatepay” ou “Abacate Pay”.
- Não use verde-lima para parágrafos longos.
- Não sugira uma parceria, selo ou certificação inexistente pelo uso da logo.

---

## Attribution

| Campo | Valor |
|---|---|
| Source | [AbacatePay Design](https://www.abacatepay.com/design) |
| Method | Public brand guide and public site CSS extraction |
| Extracted | 2026-09-10 |
| License | Design tokens extracted from publicly visible information. No affiliation with the brand. |

<!-- Source: https://designmd.app/brands/abacatepay · designmd.app -->
