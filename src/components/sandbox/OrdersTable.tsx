import { useMemo, useState } from 'react'
import { orders } from '../../data/mock'
import { cardClass } from '../ui/styles'
import StatusBadge from './StatusBadge'
import Pagination from './Pagination'

const PAGE_SIZE = 7

export default function OrdersTable() {
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(orders.length / PAGE_SIZE)
  const rows = useMemo(
    () => orders.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page],
  )

  return (
    <section className={`${cardClass} flex flex-col overflow-hidden`}>
      <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5 md:px-5">
        <div>
          <h2 className="font-display text-base font-bold">订单流水</h2>
          <p className="mt-0.5 text-xs text-muted">静态样例数据 · 徽章与行高均随 Token 实时变化</p>
        </div>
        <span className="rounded-badge border border-line bg-surface-alt px-2.5 py-1 font-mono text-xs text-muted tabular-nums">
          {orders.length} 条
        </span>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-alt text-left text-xs text-muted">
              <th className="px-4 py-2.5 font-medium tracking-wide md:px-5">单号</th>
              <th className="px-4 py-2.5 font-medium tracking-wide">客户</th>
              <th className="px-4 py-2.5 font-medium tracking-wide">套餐</th>
              <th className="px-4 py-2.5 text-right font-medium tracking-wide">席位</th>
              <th className="px-4 py-2.5 text-right font-medium tracking-wide">金额</th>
              <th className="px-4 py-2.5 font-medium tracking-wide">状态</th>
              <th className="px-4 py-2.5 text-right font-medium tracking-wide">更新时间</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="row-h border-t border-line hover:bg-surface-alt"
              >
                <td className="px-4 py-2 font-mono text-xs md:px-5">#{row.id}</td>
                <td className="px-4 py-2 font-medium">{row.customer}</td>
                <td className="px-4 py-2 text-muted">{row.plan}</td>
                <td className="px-4 py-2 text-right tabular-nums">{row.seats}</td>
                <td className="px-4 py-2 text-right font-semibold tabular-nums">
                  ¥{row.amount.toLocaleString('zh-CN')}
                </td>
                <td className="px-4 py-2">
                  <StatusBadge kind={row.status} label={row.statusLabel} />
                </td>
                <td className="px-4 py-2 text-right font-mono text-xs text-muted">{row.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 md:px-5">
        <p className="text-xs text-muted tabular-nums">
          第 {(page - 1) * PAGE_SIZE + 1}–{(page - 1) * PAGE_SIZE + rows.length} 条，共 {orders.length} 条
        </p>
        <Pagination page={page} pageCount={pageCount} onChange={setPage} />
      </footer>
    </section>
  )
}
