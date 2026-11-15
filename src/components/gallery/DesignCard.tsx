import type { IndexedDesign } from '../../types'
import { styleFromVars } from '../../lib/cssVars'
import { generatedUrl } from '../../lib/generated'

const SWATCH_ROLES = ['primary', 'accent', 'bg', 'surface', 'success', 'warning', 'danger'] as const
const PLATFORM_LABEL = { web: '网站', mobile: '移动端', desktop: '桌面端' } as const

interface DesignCardProps {
  design: IndexedDesign
  onViewSource: (design: IndexedDesign) => void
  onPreview: (design: IndexedDesign) => void
  onTag: (tag: string) => void
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
  const tags = d.tags.slice(0, 4)
  const swatches = SWATCH_ROLES.map((role) => d.roles[role]).filter((c, i, all) => all.indexOf(c) === i)

  return (
    <article className="g-card">
      <div className="g-card-top">
        <span className="g-card-platform">{PLATFORM_LABEL[d.platform]}</span>
        <span className={`g-card-state ${generated ? 'is-ok' : ''}`}>
          {generated ? '● 已生成' : '○ 待生成'}
        </span>
      </div>

      <div className="g-specimen" style={styleFromVars(d.vars)} aria-hidden="true">
        <span className="g-specimen-lines" />
        <span className="g-specimen-aa">Aa</span>
        <span className="g-specimen-sample">把你的产品，交给我们收尾。</span>
        <span className="g-specimen-btn">主操作</span>
        <span className="g-specimen-dots">
          {swatches.map((c, i) => (
            <i key={i} style={{ background: c }} />
          ))}
        </span>
        <span className="g-specimen-meta">TOKENS / {Object.keys(d.roles).length}</span>
      </div>

      <div className="g-card-body">
        <div className="g-card-title">
          <h3>{d.name}</h3>
          <span title="Density / Variance / Motion">{d.platform === 'mobile' ? 'iOS · ' : ''}D{d.metrics.density ?? '–'}·V{d.metrics.variance}·M{d.metrics.motion}</span>
        </div>
        <p className="g-card-summary">{d.summary}</p>
        <div className="g-card-tags">
          {tags.map((t) => (
            <button key={t} onClick={() => onTag(t)}>{t}</button>
          ))}
        </div>
      </div>

      <div className="g-card-actions">
        <button className="g-card-origin" onClick={() => onViewSource(design)} title="查看 DESIGN.md 原文">
          {d.source ? `${sourceHost(d.source)} ↗` : '内置基准'}
        </button>
        <div>
          <button className="g-card-link" onClick={() => onViewSource(design)}>规范</button>
          <button className="g-card-cta" onClick={() => onPreview(design)}>预览 →</button>
        </div>
      </div>
    </article>
  )
}
