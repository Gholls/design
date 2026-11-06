import { activity, kpis, topProducts } from '../../../data/mock'
import { cardClass } from '../../ui/styles'
import KpiCard from '../KpiCard'
import NotificationsPanel from '../NotificationsPanel'
import StatusBadge from '../StatusBadge'

export default function OverviewPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-bold">概览</h2>
        <p className="mt-0.5 text-sm text-muted">关键指标、协作动态与收入构成——所有元素共用同一组 CSS 变量</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>

      <section className="grid items-start gap-5 xl:grid-cols-3">
        <div className="space-y-5 xl:col-span-2">
          <div className={`${cardClass} p-4 md:p-5`}>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-bold">团队动态</h3>
              <span className="font-mono text-[11px] text-muted">最近 2 天</span>
            </div>
            <ul className="mt-3 space-y-1">
              {activity.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-control px-2.5 py-2 hover:bg-surface-alt"
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                      item.kind === 'danger' ? 'bg-danger/15 text-danger' : 'bg-primary/15 text-primary'
                    }`}
                  >
                    {item.actor === 'CI' || item.actor === '监控' ? '⌾' : item.actor[0]}
                  </span>
                  <p className="min-w-0 flex-1 truncate text-sm">
                    <span className="font-semibold">{item.actor}</span>
                    <span className="text-muted"> {item.action} </span>
                    <span className="font-medium text-primary">{item.target}</span>
                  </p>
                  <span className="shrink-0 font-mono text-[11px] text-muted">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardClass} p-4 md:p-5`}>
            <h3 className="font-display text-base font-bold">收入构成</h3>
            <ul className="mt-4 space-y-3.5">
              {topProducts.map((product) => (
                <li key={product.name}>
                  <div className="flex items-baseline justify-between gap-2 text-sm">
                    <span className="font-medium">{product.name}</span>
                    <span className="tabular-nums text-muted">
                      {product.revenue}{' '}
                      <span className={product.trend.startsWith('-') ? 'text-danger' : 'text-success'}>
                        {product.trend}
                      </span>
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${product.share}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          <NotificationsPanel />
          <div className={`${cardClass} p-4 md:p-5`}>
            <h3 className="font-display text-sm font-bold">部署状态</h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              {[
                ['main · production', 'success', '在线'],
                ['canary · 5% 流量', 'info', '灰度中'],
                ['preview #231', 'warning', '构建排队'],
              ].map(([env, kind, label]) => (
                <li key={env} className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-muted">{env}</span>
                  <StatusBadge kind={kind as 'success' | 'info' | 'warning'} label={label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
