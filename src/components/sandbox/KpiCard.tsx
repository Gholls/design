import type { Kpi } from '../../data/mock'
import { cardClass } from '../ui/styles'

export default function KpiCard({ kpi }: { kpi: Kpi }) {
  const positive = kpi.goodWhenDown ? kpi.delta < 0 : kpi.delta > 0
  const deltaClass = positive ? 'text-success bg-success/10' : 'text-danger bg-danger/10'
  const max = Math.max(...kpi.series)

  return (
    <section className={`${cardClass} p-4 md:p-5`}>
      <p className="text-xs font-medium text-muted">{kpi.label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <div>
          <p className="font-display text-2xl font-bold leading-none tabular-nums md:text-3xl">
            {kpi.value}
          </p>
          <span
            className={`mt-2.5 inline-flex items-center gap-1 rounded-badge px-2 py-0.5 text-xs font-semibold tabular-nums ${deltaClass}`}
          >
            {kpi.delta > 0 ? '↑' : '↓'} {Math.abs(kpi.delta).toFixed(1)}%
            <span className="font-normal opacity-70">环比</span>
          </span>
        </div>
        <div className="flex h-12 items-end gap-1" aria-hidden="true">
          {kpi.series.map((point, i) => (
            <span
              key={i}
              className={`w-1.5 rounded-sm md:w-2 ${
                i === kpi.series.length - 1 ? 'bg-primary' : 'bg-primary/25'
              }`}
              style={{ height: `${Math.round((point / max) * 100)}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
