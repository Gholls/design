# 贡献一份 DESIGN.md

本项目采用 [Google Labs design.md](https://github.com/google-labs-code/design.md)
的官方格式（alpha）：**每套规范 = 一个自包含的 `designs/<slug>/DESIGN.md`**，
YAML 设计 Token（frontmatter 和/或文内 ` ```yaml ` 块）+ Markdown 散文说明。

[designmd.app](https://designmd.app/) 收录的 700+ 份社区规范可直接放入
`designs/<你的slug>/DESIGN.md`——解析器的角色兜底会尽力映射，但完整覆盖
下列角色色才能获得样板间最佳观感。

## 社区收录政策（designmd.app）

`designs/` 中的 7 份规范（minimalism-swiss-style、acrylic-fluent、de-stijl-abstrato、
8-bit-retro-terminal、cyber-tribal、dsgov、stone）收录自
[designmd.app](https://designmd.app/) 的公开库（上游：gitlab.com/fabriciotelles/vibe-styles，
DSGov 明确 CC0/MIT）。收录原则：

1. **原文 verbatim**——token 值与散文不改写，保持社区规范的真实性；
2. 仅注入一个 `gallery:` 块（order/author="designmd.app"/source 出处链接/tags）；
3. 违反官方 spec 导致 lint error 的最小兼容修正必须行内注释标明（现有唯一一处：
   stone 的 `rounded.circle: 50% → 9999px`）；
4. 角色解析器对真实数据做了三层容错：嵌套色卡分组扁平化（brand.primaryMain）、
   大小写/后缀别名匹配、以及基于亮度分布与 WCAG 对比度的兜底推导
   （详见 [src/lib/designMd.ts](../src/lib/designMd.ts)）。

## 收录清洗政策（针对 designmd.app 抓取件）

上游文件为社区生成，存在少量不符合官方 spec 的脏数据。为保证全库
`npm run design:lint` **0 error** 门禁，收录管线内置三级清洗
（`scripts/fetch-designmd.mjs` 的 sanitizeUpstream、`scripts/lint-autofix.mjs` v1/v2），
规则固定且完全披露：

1. 移除混入 YAML 值的 CSS 变量碎片（`fontFamily: serif --x: #FFF`）；
2. `rounded`/`typography` 非法单位：`'50%'→"9999px"`、裸 `0→"0px"/"0em"`、
   `%` 行高→无单位倍率（130%→1.3）、区间值取首值（4rem-8rem→4rem）、
   多段圆角取主值、非维度描述值删除该行；`linear-gradient` 值从 `colors`
   移出为顶层 `gradients` 扩展组。

除上述规则外**零改写**：token 取值与全部散文保持 verbatim。
`omitted`/`inherit` 类键值删除会丢失极少量信息，可在 designmd.app 原页核对。

## 文件结构（官方规范）

```md
---
version: alpha
name: My Theme
description: 一句话简介（画廊卡片展示它）
gallery:            # ← 样板间扩展组：仅画廊消费
  order: 6
  author: your-name
  tags: [tag1, tag2]
colors: {...}
typography: {...}
rounded: { sm, md, lg, full }
spacing: { base, xs, sm, md, lg, table-row }
shadows: {...}      # ← 样板间扩展组
strokes: {...}      # ← 样板间扩展组
components: {...}
---

## Overview …（章节顺序必须遵循官方规范）
## Colors / ## Typography / ## Layout / ## Elevation & Depth
## Shapes / ## Components / ## Do's and Don'ts
```

官方规范允许保留未知顶层键，`gallery` / `shadows` / `strokes` 即本项目的
样板间扩展组（lint 可能对后两者提示 token-like 警告，属预期，可忽略）。

## 样板间角色色（最佳映射名，亦支持别名/亮度推导）

| 角色 | 用途 | 常见别名 |
| --- | --- | --- |
| bg | 页面底色 | background / canvas / neutral |
| surface / surface-alt | 卡片 / 表头输入底 | card / panel / surface-variant |
| primary / primary-strong / on-primary | 主操作三件套 | brand / primary-hover / text-on-primary |
| accent | 次级强调 | tertiary / highlight / secondary |
| text / muted | 正文 / 辅助 | foreground / on-surface / meta / subtle |
| border | 分隔线 | line / outline / divider |
| success / warning / danger | 状态徽章 | positive / amber / error |

缺失的角色会按 `bg/text` 相对亮度自动推导（保证深色主题可读），但**不要**
依赖推导——显式定义才是规范。

## Typography 契约

解析器读取 `body-md`（正文：fontFamily/fontSize→基准字号）与 `h1`
（标题：fontWeight/letterSpacing→标题契约）。请至少定义这两级。

## rounded / spacing 契约

- 卡片圆角 ← `rounded.lg`，控件 ← `rounded.md`，徽章 ← `rounded.full`
- 全局密度 = `spacing.base`（px）÷ 16；行高 ← `spacing.table-row`

## 验收清单

- [ ] `npm run design:lint` 零 error（warning 尽量清零，官方 11 条规则含 WCAG AA 对比度）
- [ ] `npm run build` 通过，无需任何前端代码改动即出现在画廊
- [ ] 样板间状态徽章对比度 ≥ 4.5:1；`on-primary` 与 `primary` 组合可读
- [ ] 不引入网络字体依赖（纯静态离线）；fontFamily 写回退栈
- [ ] 散文章节按官方顺序；`Do's and Don'ts` 至少 3 条

## 生成产物契约（public/generated/）

样板间代码不来自本仓库提交者——它来自 **code agent**。流程：

1. `npm run generate` 合成任务文件 `prompts/tasks/<slug>.md`
   （= GOLDEN PROMPT + 你的 DESIGN.md）；
2. 交给任意 code agent 执行，产出**单个自包含 `index.html`**（零网络依赖、
   file:// 可运行、底部标注生成信息条）；
3. 产物提交到 `public/generated/<slug>/index.html`，构建后自动出现在画廊
   「● 已生成」并可预览；
4. 验收项：产物代码顶部须有「决策溯源注释」——写明哪些界面决策来自
   规范的哪一行（Token / components 指引 / 指标 / Do's & Don'ts）。

## 提交

```bash
npm install          # 首次（提供官方 linter）
npm run design:lint
git checkout -b design/my-theme
git add designs/my-theme/DESIGN.md
git commit -m "feat(designs): 新增 My Theme 规范"
```

一个 PR 只带一套主题。MIT 协议，提交即视为同意。
