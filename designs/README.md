# 贡献一套设计规范

design.gholl.com 的每套主题都是 `/designs/<slug>/` 目录下的两个文件：

```
designs/
└── my-theme/
    ├── tokens.json   # 结构化设计 Token（唯一影响渲染的文件）
    └── DESIGN.md     # 人类可读的规范说明（源码对照面板展示它）
```

无需改任何前端代码——应用通过 `import.meta.glob` 自动发现新目录。

## 1. 命名

- 目录名即 slug（小写字母 + 连字符），如 `ocean-breeze`。
- `meta.slug` 必须与目录名一致。

## 2. tokens.json 结构

| 分组 | 说明 | 必需 key |
| --- | --- | --- |
| `meta` | name / slug / order / author / summary / tags | 全部 |
| `colors` | 颜色 Token，任意 CSS 颜色值 | `bg` `surface` `surface-alt` `primary` `primary-strong` `on-primary` `accent` `text` `muted` `border` `success` `warning` `danger` |
| `typography` | 字体族与尺度 | `font-family-base` `font-family-display` `font-size-base` `letter-spacing` `heading-weight` |
| `rounded` | 圆角 | `card` `control` `badge` |
| `spacing` | 密度 | `scale`（全局缩放系数）`table-row`（行高） |
| `shadows` | 阴影 | `card` `control`（完整 box-shadow 值） |
| `strokes` | 描边宽度 | `card` `control` |

所有非 `meta` 分组的 key 会被引擎扁平化为 `--d-<group>-<key>` CSS 变量
注入 `<html>`，因此分组内可以按需追加新 key（前端未消费也无害）。

## 3. 验收标准（PR 检查表）

- [ ] `npm run build` 通过，无需任何代码改动即出现在画廊。
- [ ] 样板间表格状态徽章（success/warning/danger）文字对比度 ≥ 4.5:1。
- [ ] `on-primary` 与 `primary` 组合可读（深色主色配浅字，浅色主色配深字）。
- [ ] `DESIGN.md` 说明理念、配色表与适用场景（供「源码对照」阅读）。
- [ ] 不引入网络字体依赖（保持纯静态离线可跑）；font-family 用回退栈。

## 4. 提交

```bash
git checkout -b design/my-theme
# 添加 designs/my-theme/{tokens.json,DESIGN.md}
npm run build   # 本地验证
```

一个 PR 只带一套主题。MIT 协议，提交即视为同意。
