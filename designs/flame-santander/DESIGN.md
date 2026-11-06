---
version: alpha
name: "Flame"
website: "https://www.santander.com.br"
description: >-
  Design system global do Santander nascido no Brasil em 2019 e lançado
  mundialmente em abril de 2021. Santander Red #EC0000 (Pantone 485C) com rampa
  de vermelhos nomeados por cidades globais do banco — de Lisbon #FBF1EA a
  London #990000 —, céu #DEEDF2 como secundária e motion tokens com propósito
  definido: informar, guiar ou celebrar. Mais de 1.780 componentes reutilizáveis.
colors:
  primary: "#EC0000"
  primary-hover: "#CC0000"
  primary-pressed: "#990000"
  red-madrid: "#EA6F5D"
  red-rio: "#F5DECF"
  red-lisbon: "#FBF1EA"
  sky: "#DEEDF2"
  ink: "#000000"
  canvas: "#FFFFFF"
typography:
  headline:
    fontFamily: "Santander Headline, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: "1.15"
  title:
    fontFamily: "Santander Text, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
  body:
    fontFamily: "Santander Text, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5"
  micro:
    fontFamily: "Santander Text, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"

gallery:
  order: 1671
  author: "designmd.app"
  source: "https://designmd.app/brands/flame-santander"
  tags: ["真实品牌"]
---

## Overview

**Flame** é o design system global do **Santander**, batizado em referência à chama do logotipo — a chama que emite luz, calor e humanidade sobre uma plataforma oval sólida. Nasceu em 2019 como iniciativa do Santander Brasil e, em abril de 2021, tornou-se o núcleo do **Santander Design Ecosystem**, propondo padrões globais que respeitam as especificidades de cada país — incluindo o tom de voz que fala ao usuário brasileiro.

A documentação pública foi anunciada pelo banco em outubro de 2020 como gesto de reciprocidade: "muitos de nós aprendemos graças a empresas generosas (Apple, Google, IBM, Microsoft, Shopify) que compartilharam seu trabalho; agora cabe a nós dar nossa contribuição". Hoje o sistema carrega mais de **1.780 componentes reutilizáveis**, biblioteca de ícones, ilustrador automático, templates múltiplos e guias detalhadas de acessibilidade.

### Características-chave

- **Santander Red** `{colors.primary}` (#EC0000, Pantone 485C) como cor dominante de marca e ação
- Rampa de vermelhos nomeados pelas cidades-sede do banco — profundidade cromática sem sair da família
- Céu `{colors.sky}` (#DEEDF2) como cor secundária tecnológica e fresca
- **Motion tokens com propósito**: cada movimento informar, guiar ou celebrar — nunca decorativo
- Manifesto de design institucional: banco **simples, pessoal e justo**
- Migração Flame 3 → Flame 4 concluída no Brasil em 2024, consolidando bibliotecas Sketch mobile/desktop numa única library Figma responsiva usada em 12 países

## Colors

A paleta evoluiu junto com o logo: o vermeno ficou mais intenso, o branco entrou como secundário de luz e simplicidade, e o céu completou o trio primário com matizes azulados de caráter tecnológico.

### Primários

| Token | Hex | Pantone | Papel |
|---|---|---|---|
| `{colors.primary}` | #EC0000 | 485 C "Santander Red" | Marca, CTAs, energia |
| `{colors.canvas}` | #FFFFFF | — | Luz e simplicidade |
| `{colors.sky}` | #DEEDF2 | 649 C "Cielo" | Caráter tecnológico e fresco |

### Rampa de vermelhos (nomeadas por cidade)

| Token | Hex | Pantone | Uso |
|---|---|---|---|
| `{colors.red-lisbon}` | #FBF1EA | 9021 C | Fundos sutis quentes |
| `{colors.red-rio}` | #F5DECF | 4031 C | Superfícies de proximidade |
| `{colors.red-madrid}` | #EA6F5D | 2030 C | Destaques intermediários |
| `{colors.primary-hover}` | #CC0000 | 3620 C "Boston" | Hover/estados ativos |
| `{colors.primary-pressed}` | #990000 | 7622 C "London" | Pressed, profundidade |

Neutros: preto `{colors.ink}` #000000 completa os primários.

## Typography

Famílias proprietárias **Santander Text** (interface, corpo, dados) e **Santander Headline** (títulos e comunicação), usadas em todos os pontos de contato digitais dos 12 mercados.

| Token | Família | Uso |
|---|---|---|
| `{typography.headline}` | Santander Headline 700 | Hero e títulos de campanha |
| `{typography.title}` | Santander Text 700 | Títulos de seção e card |
| `{typography.body}` | Santander Text 400 | Corpo padrão |
| `{typography.micro}` | Santander Text 400 | Legal, metadados |

## Layout

Grid responsivo unificado pós-Flame 4: uma única library Figma com variáveis de breakpoints substituiu as antigas bibliotecas separadas de Web, Android e iOS, aumentando em ~50% a velocidade de entrega de design e eliminando custos de licença Sketch.

## Elevation & Depth

Elevação discreta para cards flutuantes e sheets; a hierarquia primária vem do contraste vermelho-sobre-branco e das faixas céu. Sombras curtas e neutras.

## Shapes

Componentes com cantos arredondados moderados (8–24px); CTAs principais com radius pleno nos apps móveis. A chama do símbolo define o clear space modular (retícula 28×28) usado também na geometria de ícones.

## Components

Mais de 1.780 componentes reutilizáveis documentados globalmente, incluindo biblioteca de ícones, ilustrador automático e templates por jornada. Destaque do sistema: **motion tokens padronizados** — escala, opacidade e tempo pré-definidos por função/tamanho do componente, com "anchor point" definindo a origem da animação (Tooltip e Dialog compartilham os mesmos tokens mudando apenas a âncora). Loaders foram redesenhados globalmente a partir de proposta vinda do Brasil.

## Do's and Don'ts

**Do** usar a rampa de vermelhos por profundidade: Lisboa para fundos, Madrid para destaques, Boston/London para estados interativos.

**Do** dar propósito a todo movimento — se não informa, guia ou celebra, não anima.

**Do** equilibrar os três primários: vermelho intenso demais cansa; céu respira a página.

**Don't** introduzir cores fora das famílias vermelho/céu/neutro.

**Don't** animar sem anchor point definido — a origem do movimento é parte da gramática.

**Don't** aplicar Santander Headline em corpo de texto ou Text em display de campanha.

## Known Gaps

- Escala tipográfica numérica completa e tokens de spacing oficiais não são públicos — valores aqui são aproximações documentais a partir de capturas de produto
- Rampas semânticas de feedback (success/warning/info) seguem o padrão global mas não foram enumeradas nas fontes públicas acessíveis
- Documentação interativa oficial (InVision DSM) exige autenticação desde 2023

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [Guia de Marca Santander (PDF oficial)](https://www.santander.com/content/dam/santander-com/es/documentos/marca-santander/Guia_Marca_060520_en.pdf) |
| Anúncio público | [santander.com — Flame documentation release](https://www.santander.com/en/stories/santander-releases-documentation-about-new-design-system-flame) |
| Catálogo | [Design Systems Brasileiros — Flame](https://designsystemsbrasileiros.com/flame-design-system/) |
| Case Brasil 2024 | adrianoricci.com/santanderflame4 · remenezes.com.br/flame-design-system |
| Method | Public documentation |
| Date | 2026-08-21 |

<!-- Source: https://designmd.app/brands/flame-santander · designmd.app -->
