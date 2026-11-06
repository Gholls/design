import { useState } from 'react'
import { heatmap, heatmapDays, funnel, revenueSeries, topProducts, trafficSources } from '../../../data/mock'
import { buttonClass, cardClass } from '../../ui/styles'

const TONE_BG: Record<string, string> = {
  primary: 'var(--d-colors-primary, #2563eb)',
  accent: 'var(--d-colors-accent, #7c3aed)',
  success: 'var(--d-colors-success, #16a34a)',
  warning: 'var(--d-colors-warning, #d97706)',
}

export default function AnalyticsPage() {
  const [range, setRange] = useState<'7d' | '30d' | '12m'>('12m')

  const series = range === '12m' ? revenueSeries : revenueSeries.slice(range === '30d' ? 5 : 8)
  const max = Math.max(...series.map((s) => s.value))
  const donut = trafficSources.reduce<{ css: string; stops: number }>(
    (acc, src, i) => {
      const from = acc.stops
      const to = from + src.share
      const next = acc.css + `${TONE_BG[src.tone]} ${from}% ${to}%${i < trafficSources.length - 1 ? ',' : ''}`
      return { css: next, stops: to }
    },
    { css: '', stops: 0 },
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold">分析图表</h2>
          <p className="mt-0.5 text-sm text-muted">纯 CSS/SVG 渲染——图表配色全部取自当前规范的 Token 变量</p>
        </div>
        <div className="flex rounded-control border border-line p-0.5">
          {(
            [
              ['7d', '7 天'],
              ['30d', '30 天'],
              ['12m', '12 个月'],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setRange(value)}
              className={`cursor-pointer rounded-[calc(var(--d-rounded-control,8px)-3px)] px-3 py-1 text-xs font-medium ${
                range === value ? 'bg-primary text-on-primary shadow-control' : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <section className={`${cardClass} p-4 md:p-5 xl:col-span-2`}>
          <h3 className="font-display text-sm font-bold">MRR 趋势（¥ 千元）</h3>
          <div className="mt-4 flex h-52 items-end gap-2 md:gap-3" role="img" aria-label="MRR 柱状图">
            {series.map((s, i) => (
              <div key={s.label} className="group flex min-w-0 flex-1 flex-col items-center justify-end gap-1.5 self-stretch">
                <span className="rounded-badge bg-surface-alt px-1.5 py-0.5 font-mono text-[10px] text-muted opacity-0 tabular-nums group-hover:opacity-100">
                  {s.value}
                </span>
                <div
                  className={`w-full rounded-t-control transition-all ${i === series.length - 1 ? 'bg-primary' : 'bg-primary/40 group-hover:bg-primary/70'}`}
                  style={{ height: `${(s.value / max) * 100}%` }}
                />
                <span className="truncate text-[10px] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`${cardClass} p-4 md:p-5`}>
          <h3 className="font-display text-sm font-bold">流量来源</h3>
          <div className="mt-4 flex items-center gap-5">
            <div
              className="relative h-36 w-36 shrink-0 rounded-full"
              style={{ background: `conic-gradient(${donut.css})` }}
              role="img"
              aria-label="流量来源占比"
            >
              <div className="absolute inset-3 grid place-items-center rounded-full bg-surface">
                <div className="text-center">
                  <p className="font-display text-xl font-bold tabular-nums">18.4k</p>
                  <p className="text-[10px] text-muted">月访问</p>
                </div>
              </div>
            </div>
            <ul className="min-w-0 space-y-2.5 text-sm">
              {trafficSources.map((src) => (
                <li key={src.name} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: TONE_BG[src.tone] }} />
                  <span className="min-w-0 flex-1 truncate text-muted">{src.name}</span>
                  <span className="font-semibold tabular-nums">{src.share}%</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${cardClass} p-4 md:p-5`}>
          <h3 className="font-display text-sm font-bold">转化漏斗</h3>
          <div className="mt-4 space-y-2">
            {funnel.map((step, i) => (
              <div key={step.stage} className="flex items-center gap-3">
                <span className="w-10 shrink-0 text-xs text-muted">{step.stage}</span>
                <div className="h-8 min-w-0 flex-1">
                  <div
                    className="flex h-full items-center rounded-control px-2.5 font-mono text-[11px] text-on-primary tabular-nums transition-all"
                    style={{
                      width: `${step.value}%`,
                      minWidth: '3.5rem',
                      background: `color-mix(in srgb, var(--d-colors-primary, #2563eb) ${85 - i * 15}%, var(--d-colors-surface, #fff))`,
                    }}
                  >
                    {step.value}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${cardClass} p-4 md:p-5`}>
          <h3 className="font-display text-sm font-bold">活跃热力（星期 × 时段）</h3>
          <div className="mt-4 grid gap-1" style={{ gridTemplateColumns: 'auto repeat(12, 1fr)' }}>
            {heatmap.map((row, r) => (
              <FragmentRow key={r} day={heatmapDays[r]} values={row} />
            ))}
            <span />
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className="text-center font-mono text-[9px] text-muted">
                {i + 8}
              </span>
            ))}
          </div>
        </section>

        <section className={`${cardClass} overflow-hidden`}>
          <h3 className="font-display text-sm font-bold px-4 pt-4 md:px-5">Top 5 产品线</h3>
          <ul className="mt-2 divide-y divide-line text-sm">
            {topProducts.map((p) => (
              <li key={p.name} className="flex items-center gap-3 px-4 py-3 md:px-5">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{p.name}</p>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-line">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${p.share}%` }} />
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted tabular-nums">{p.revenue}</span>
                <span className={`w-10 shrink-0 text-right text-xs font-semibold tabular-nums ${p.trend.startsWith('-') ? 'text-danger' : 'text-success'}`}>
                  {p.trend}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-line px-4 py-3 md:px-5">
            <button className={buttonClass('secondary', 'sm', 'stroke-control')}>查看完整报表</button>
          </div>
        </section>
      </div>
    </div>
  )
}

function FragmentRow({ day, values }: { day: string; values: number[] }) {
  return (
    <>
      <span className="flex items-center pr-1 font-mono text-[9px] text-muted">{day}</span>
      {values.map((v, i) => (
        <span
          key={i}
          title={`${day} ${i + 8}:00 · ${Math.round(v * 100)}%`}
          className="h-6 rounded-[3px] hover:ring-1 hover:ring-primary"
          style={{
            background: `color-mix(in srgb, var(--d-colors-primary, #2563eb) ${Math.round(v * 92)}%, var(--d-colors-surface-alt, #f1f5f9))`,
          }}
        />
      ))}
    </>
  )
}
