import type { Design } from '../../types'
import { styleFromVars } from '../../lib/cssVars'
import { buttonClass, cardClass } from '../ui/styles'

const SWATCH_ROLES = ['primary', 'accent', 'bg', 'surface', 'text', 'success', 'warning', 'danger'] as const

interface DesignCardProps {
  design: Design
  onViewSource: (design: Design) => void
  onPreview: (design: Design) => void
}

export default function DesignCard({ design, onViewSource, onPreview }: DesignCardProps) {
  const d = design.design

  return (
    /* 卡片根节点注入该规范的局部 --d-* 变量：卡内所有 token 化工具类自动套用该主题 */
    <article
      style={styleFromVars(d.vars)}
      className={`${cardClass} flex flex-col gap-4 p-5`}
    >
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold">{d.name}</h3>
          <p className="mt-0.5 font-mono text-[11px] text-muted">
            by {d.author} · designs/{design.slug}
            {d.warnings.length > 0 ? (
              <span title={d.warnings.join('\n')} className="ml-2 text-warning">
                ⚠ {d.warnings.length}
              </span>
            ) : null}
          </p>
        </div>
        <span className="font-display text-2xl leading-none text-primary" title="该主题字体与主色样例">
          Aa
        </span>
      </header>

      <p className="text-sm leading-relaxed text-muted">{d.summary}</p>

      <div className="flex flex-wrap gap-1">
        {d.tags.map((tag) => (
          <span key={tag} className="rounded-badge border border-line px-2 py-0.5 text-[11px] text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1.5" title="角色色解析结果（官方任意色卡名 → 样板间 13 角色）">
        {SWATCH_ROLES.map((role) => (
          <span
            key={role}
            title={`${role}: ${d.roles[role]}`}
            className="h-6 w-6 rounded-md border border-line stroke-control"
            style={{ backgroundColor: d.roles[role] }}
          />
        ))}
      </div>

      {/* 微型样板间：验证该 Token 组在真实控件上的观感 */}
      <div className="flex items-center justify-between gap-3 rounded-control border border-line bg-surface-alt px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="rounded-control bg-primary px-3 py-1.5 text-xs font-semibold text-on-primary shadow-control">
            确认操作
          </span>
          <span className="inline-flex items-center gap-1 rounded-badge border border-success/40 bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            运行中
          </span>
        </div>
        <span className="rounded-control border border-line bg-surface px-2.5 py-1 text-xs text-muted">
          搜索…
        </span>
      </div>

      <footer className="font-mono text-[11px] text-muted">
        {d.fontSizeBase} · radius {d.radius.card}/{d.radius.control} · density ×{d.density}
      </footer>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => onViewSource(design)}
          className={buttonClass('secondary', 'md', 'stroke-control')}
        >
          查看源码
        </button>
        <button onClick={() => onPreview(design)} className={buttonClass('primary', 'md')}>
          ⚡ 实时预览样板间
        </button>
      </div>
    </article>
  )
}
