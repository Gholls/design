---
version: alpha
name: Candy Glass
description: 糖果玻璃：暖桃底色、玫红主调、超大圆角与有色阴影，活泼但不失层次的生长型产品语言。
gallery:
  order: 4
  author: gholl
  tags: ["消费品牌", "明亮", "大圆角", "柔和"]
colors:
  bg: "#fff7ed"
  surface: "#ffffff"
  surface-alt: "#fffaf3"
  primary: "#ec4899"
  primary-strong: "#db2777"
  on-primary: "#ffffff"
  accent: "#8b5cf6"
  text: "#451a33"
  muted: "#a1698a"
  border: "#fbcfe8"
  success: "#10b981"
  warning: "#f59e0b"
  danger: "#f43f5e"
typography:
  body-md:
    fontFamily: "'Avenir Next', 'Nunito', 'PingFang SC', ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  h1:
    fontFamily: "'Avenir Next', 'Nunito', 'PingFang SC', ui-sans-serif, system-ui, sans-serif"
    fontSize: 30px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.005em
rounded:
  sm: 12px
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  base: 17px
  xs: 6px
  sm: 10px
  md: 16px
  lg: 32px
  table-row: 46px
shadows:
  card: "0 12px 32px rgb(236 72 153 / 0.16)"
  control: "0 4px 12px rgb(236 72 153 / 0.22)"
strokes:
  card: 1px
  control: 1px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px
  input-field:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  page-shell:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
  table-header:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
  divider:
    backgroundColor: "{colors.border}"
  meta-dot:
    backgroundColor: "{colors.muted}"
  accent-dot:
    backgroundColor: "{colors.accent}"
  status-dot-success:
    backgroundColor: "{colors.success}"
  status-dot-warning:
    backgroundColor: "{colors.warning}"
  status-dot-danger:
    backgroundColor: "{colors.danger}"
---

# Candy Glass

> 把「快乐」做成可维护的 Token：有色阴影 + 大圆角 + 暖底。

## Overview

生长/社区/创作者类产品常用的亲和语言。关键约束：活泼必须仍然可扫读——
所有灰色都带同一支品红色相，避免画面「脏」。

- Density: 3/10 — Airy
- Variance: 5/10 — Expressive
- Motion: 8/10 — Energetic

## Colors

页面底用暖桃 `#fff7ed`，卡片仍是纯白，靠有色阴影分离层级。
`text` 是带红相的深紫黑，`border` 是粉色细线——没有一处纯灰。

## Typography

圆体优先（Avenir Next / Nunito），标题 800 超粗才有糖果的厚实感。
基准 15px，字距几乎不动。

## Layout

base 17px、行高 46px，友好松快的表格节奏；留白比数据后台慷慨一档。

## Elevation & Depth

阴影不再是黑色，而是主色的稀释版（这是本主题的灵魂）：
card 阴影 32px 模糊的粉色弥散，control 阴影是小而浓的玫红。

## Shapes

卡片 24px、控件 16px——全场最圆；圆角是本主题的识别核心。

## Components

主按钮玫红实底白字，hover 加深并向下沉（阴影收拢）；
次级动作交给紫色 accent。

## Do's and Don'ts

- Do 让所有中性色携带同一支红相
- Don't 使用黑色阴影
- Don't 在同一视图混用细线描边与有色阴影两种分层手段
