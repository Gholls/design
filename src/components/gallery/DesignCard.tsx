import type { Design } from '../../types'
import { styleFromVars } from '../../lib/cssVars'
import { buttonClass, cardClass } from '../ui/styles'

const SWATCH_ROLES = ['primary', 'accent', 'bg', 'surface', 'success', 'warning', 'danger'] as const

interface DesignCardProps {
  design: Design
  onViewSource: (design: Design) => void
  onPreview: (design: Design) => void
}

/** 预览区 = 迷你样板间：所有元素仅用 token 化工具类，局部变量注入即整套规范实时生效 */
function MiniSandbox() {
  return (
    <div className="bg-bg px-4 pb-4 pt-8">
      <div className="flex items-start justify-between">
        <div className="h-2 w-16 rounded-full bg-line" />
        <span className="font-display text-xl leading-none text-primary">Aa</span>
      </div>

      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <p className="font-display text-2xl font-bold leading-none tabular-nums">¥128.4k</p>
          <p className="mt-1.5 text-[11px] font-semibold tabular-nums text-success">↑ 12.4% MRR</p>
        </div>
        <div className="flex h-9 items-end gap-1" aria-hidden="true">
          {[35, 52, 44, 60, 55, 72, 88].map((h, i) => (
            <span
              key={i}
              className={`w-1.5 rounded-sm ${i === 6 ? 'bg-primary' : 'bg-primary/30'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-badge border border-success/40 bg-success/10 px-1.5 py-0.5 text-[10px] font-semibold text-success">
          <span className="h-1 w-1 rounded-full bg-current" />成功
        </span>
        <span className="inline-flex items-center gap-1 rounded-badge border border-warning/40 bg-warning/10 px-1.5 py-0.5 text-[10px] font-semibold text-warning">
          <span className="h-1 w-1 rounded-full bg-current" />待处理
        </span>
        <span className="inline-flex items-center gap-1 rounded-badge border border-danger/40 bg-danger/10 px-1.5 py-0.5 text-[10px] font-semibold text-danger">
          <span className="h-1 w-1 rounded-full bg-current" />异常
        </span>
      </div>

      <div className="mt-3 space-y-1.5" aria-hidden="true">
        <div className="flex items-center justify-between border-b border-line pb-1.5">
          <span className="h-1.5 w-20 rounded-full bg-line" />
          <span className="h-1.5 w-10 rounded-full bg-muted/40" />
        </div>
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-24 rounded-full bg-line" />
          <span className="h-1.5 w-12 rounded-full bg-muted/40" />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="rounded-control bg-primary px-2.5 py-1 text-[11px] font-semibold text-on-primary shadow-control">
          确认操作
        </span>
        <span className="rounded-control border border-line bg-surface px-2.5 py-1 text-[11px] font-medium">
          取消
        </span>
      </div>
    </div>
  )
}

export default function DesignCard({ design, onViewSource, onPreview }: DesignCardProps) {
  const d = design.design
  const isCommunity = d.source !== ''

  return (
    <article style={styleFromVars(d.vars)} className={`${cardClass} group flex flex-col overflow-hidden`}>
      <div className="relative border-b border-line">
        {isCommunity ? (
          <a
            href={d.source}
            target="_blank"
            rel="noreferrer"
            className="absolute left-3 top-3 z-10 rounded-badge border border-line bg-surface/85 px-2 py-0.5 font-mono text-[10px] text-muted backdrop-blur hover:text-ink"
          >
            designmd.app ↗
          </a>
        ) : (
          <span className="absolute left-3 top-3 z-10 rounded-badge border border-line bg-surface/85 px-2 py-0.5 font-mono text-[10px] text-muted">
            内置基准
          </span>
        )}
        <MiniSandbox />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="truncate font-display text-sm font-bold">{d.name}</h3>
          <span className="shrink-0 font-mono text-[10px] text-muted">
            {d.fontSizeBase} · ×{d.density} · {d.radius.card}
          </span>
        </div>

        <p className="line-clamp-2 text-xs leading-relaxed text-muted">{d.summary}</p>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1" title={SWATCH_ROLES.map((r) => `${r}: ${d.roles[r]}`).join('\n')}>
            {SWATCH_ROLES.map((role) => (
              <span
                key={role}
                className="h-4 w-4 rounded-full border border-line"
                style={{ backgroundColor: d.roles[role] }}
              />
            ))}
          </div>
          <div className="flex shrink-0 gap-1.5">
            <button
              onClick={() => onViewSource(design)}
              className={buttonClass('secondary', 'sm', 'stroke-control font-mono')}
              title="查看 DESIGN.md 原文"
            >
              {'</>'}
            </button>
            <button onClick={() => onPreview(design)} className={buttonClass('primary', 'sm')}>
              ⚡ 预览
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
