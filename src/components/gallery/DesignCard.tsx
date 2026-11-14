import type { IndexedDesign } from '../../types'
import { styleFromVars } from '../../lib/cssVars'
import { generatedUrl } from '../../lib/generated'
import { buttonClass, cardClass } from '../ui/styles'

const SWATCH_ROLES = ['primary', 'accent', 'bg', 'surface', 'success', 'warning', 'danger'] as const

interface DesignCardProps {
  design: IndexedDesign
  onViewSource: (design: IndexedDesign) => void
  onPreview: (design: IndexedDesign) => void
  onTag: (tag: string) => void
}

/** Token 试装条：仅演示该规范的颜色/圆角/阴影气质，不是样板间（样板间由 agent 生成） */
function TokenFitting() {
  return (
    // 顶部留白避开绝对定位的来源/状态徽章，避免徽章压住「Aa」字样
    <div className="bg-bg px-4 pb-3.5 pt-10">
      <div className="flex items-center justify-between">
        <span className="rounded-control bg-primary px-3 py-1.5 text-xs font-semibold text-on-primary shadow-control">
          主操作
        </span>
        <span className="font-display text-xl leading-none text-primary">Aa</span>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-badge border border-success/40 bg-success/10 px-1.5 py-0.5 text-[10px] font-semibold text-success">
          <span className="h-1 w-1 rounded-full bg-current" />成功
        </span>
        <span className="inline-flex items-center gap-1 rounded-badge border border-warning/40 bg-warning/10 px-1.5 py-0.5 text-[10px] font-semibold text-warning">
          <span className="h-1 w-1 rounded-full bg-current" />警告
        </span>
        <span className="inline-flex items-center gap-1 rounded-badge border border-danger/40 bg-danger/10 px-1.5 py-0.5 text-[10px] font-semibold text-danger">
          <span className="h-1 w-1 rounded-full bg-current" />危险
        </span>
        <div className="ml-auto flex h-7 flex-1 items-end justify-end gap-1" aria-hidden="true">
          {[40, 62, 48, 75, 58, 90].map((h, i) => (
            <span
              key={i}
              className={`w-1.5 rounded-sm ${i === 5 ? 'bg-primary' : 'bg-primary/30'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function sourceHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return 'source'
  }
}

export default function DesignCard({ design, onViewSource, onPreview, onTag }: DesignCardProps) {
  const d = design.design
  const generated = generatedUrl(design.slug) !== null

  return (
    <article style={styleFromVars(d.vars)} className={`${cardClass} group flex flex-col overflow-hidden`}>
      <div className="relative border-b border-line">
        {d.source ? (
          <a
            href={d.source}
            target="_blank"
            rel="noreferrer"
            className="absolute left-3 top-3 z-10 rounded-badge border border-line bg-surface/85 px-2 py-0.5 font-mono text-[10px] text-muted backdrop-blur hover:text-ink"
          >
            {sourceHost(d.source)} ↗
          </a>
        ) : (
          <span className="absolute left-3 top-3 z-10 rounded-badge border border-line bg-surface/85 px-2 py-0.5 font-mono text-[10px] text-muted">
            内置基准
          </span>
        )}
        <span
          className={`absolute right-3 top-3 z-10 rounded-badge px-2 py-0.5 font-mono text-[10px] font-semibold ${
            generated
              ? 'border border-success/40 bg-success/10 text-success'
              : 'border border-line bg-surface/85 text-muted'
          }`}
        >
          {generated ? '● 已生成' : '○ 待生成'}
        </span>
        <TokenFitting />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 min-w-0 break-words font-display text-sm font-bold leading-snug">{d.name}</h3>
          <span className="shrink-0 font-mono text-[10px] text-muted">
            {d.platform === 'mobile' ? 'iOS · ' : ''}D{d.metrics.density ?? '–'} · V{d.metrics.variance} · M{d.metrics.motion}
          </span>
        </div>

        <p className="line-clamp-2 text-xs leading-relaxed text-muted">{d.summary}</p>

        <div className="flex flex-wrap gap-1">
          {d.tags.map((t) => (
            <button
              key={t}
              onClick={() => onTag(t)}
              className="cursor-pointer rounded-badge border border-line px-1.5 py-0.5 text-[10px] leading-none text-muted hover:border-primary hover:text-primary"
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1">
            {SWATCH_ROLES.map((role) => (
              <span
                key={role}
                title={`${role}: ${d.roles[role]}`}
                className="h-3.5 w-3.5 rounded-full border border-line"
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
