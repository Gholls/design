import { useMemo, useState } from 'react'
import { orders, type OrderRow } from '../../../data/mock'
import type { StatusKind } from '../../../types'
import { buttonClass, cardClass, fieldClass } from '../../ui/styles'
import StatusBadge from '../StatusBadge'
import Pagination from '../Pagination'
import Checkbox from '../Checkbox'

type SortKey = 'seats' | 'amount' | 'updatedAt'

const PAGE_SIZE = 12

export default function DataPage() {
  const [rows, setRows] = useState<OrderRow[]>(orders)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<'all' | StatusKind>('all')
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: 'updatedAt', dir: -1 })
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set())

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = rows.filter(
      (r) =>
        (status === 'all' || r.status === status) &&
        (!q || `${r.id}${r.customer}${r.plan}`.toLowerCase().includes(q)),
    )
    return [...list].sort((a, b) => {
      const va = sort.key === 'updatedAt' ? a.updatedAt : a[sort.key]
      const vb = sort.key === 'updatedAt' ? b.updatedAt : b[sort.key]
      return (va > vb ? 1 : va < vb ? -1 : 0) * sort.dir
    })
  }, [rows, query, status, sort])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)
  const pageRows = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
  const allChecked = pageRows.length > 0 && pageRows.every((r) => selected.has(r.id))

  const toggleSort = (key: SortKey) =>
    setSort((prev) => (prev.key === key ? { key, dir: prev.dir === 1 ? -1 : 1 } : { key, dir: -1 }))

  const toggleRow = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const toggleAll = () =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (allChecked) pageRows.forEach((r) => next.delete(r.id))
      else pageRows.forEach((r) => next.add(r.id))
      return next
    })

  const removeSelected = () => {
    setRows((prev) => prev.filter((r) => !selected.has(r.id)))
    setSelected(new Set())
  }

  const th = (label: string, key?: SortKey, numeric = false) => (
    <th className={`px-3 py-2.5 text-xs font-medium tracking-wide ${numeric ? 'text-right' : 'text-left'}`}>
      {key ? (
        <button
          onClick={() => toggleSort(key)}
          className={`inline-flex cursor-pointer items-center gap-1 hover:text-ink ${sort.key === key ? 'text-primary' : ''}`}
        >
          {label}
          <span className="text-[10px]">{sort.key === key ? (sort.dir === 1 ? '▲' : '▼') : '↕'}</span>
        </button>
      ) : (
        label
      )}
    </th>
  )

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-xl font-bold">数据表格</h2>
        <p className="mt-0.5 text-sm text-muted">搜索、状态筛选、多列排序、行选择与批量操作、分页</p>
      </div>

      <section className={`${cardClass} overflow-hidden`}>
        <div className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-2.5 md:px-4">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(1)
            }}
            placeholder="搜索单号 / 客户 / 套餐…"
            className={`${fieldClass} !w-52`}
          />
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as typeof status)
              setPage(1)
            }}
            className={`${fieldClass} !w-32 cursor-pointer`}
          >
            <option value="all">全部状态</option>
            <option value="success">已支付</option>
            <option value="info">处理中</option>
            <option value="warning">待支付</option>
            <option value="danger">已退款</option>
          </select>
          <span className="ml-auto font-mono text-[11px] text-muted tabular-nums">
            {filtered.length} / {orders.length} 条
          </span>
          <button className={buttonClass('secondary', 'sm', 'stroke-control')}>导出 CSV</button>
        </div>

        {selected.size > 0 ? (
          <div className="rise-in flex flex-wrap items-center gap-3 border-b border-line bg-primary/8 px-3 py-2 text-sm md:px-4">
            <span className="font-semibold text-primary">已选 {selected.size} 项</span>
            <button className={buttonClass('ghost', 'sm')}>归档</button>
            <button onClick={removeSelected} className={buttonClass('danger', 'sm')}>
              删除
            </button>
            <button onClick={() => setSelected(new Set())} className={`${buttonClass('ghost', 'sm')} ml-auto`}>
              取消选择
            </button>
          </div>
        ) : null}

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="row-h bg-surface-alt text-left text-muted">
                <th className="w-10 px-3 md:px-4">
                  <Checkbox
                    checked={allChecked}
                    indeterminate={!allChecked && pageRows.some((r) => selected.has(r.id))}
                    onChange={toggleAll}
                  />
                </th>
                {th('单号')}
                {th('客户')}
                {th('套餐')}
                {th('席位', 'seats', true)}
                {th('金额', 'amount', true)}
                {th('状态')}
                {th('更新时间', 'updatedAt', true)}
              </tr>
            </thead>
            <tbody>
              {pageRows.map((row) => (
                <tr
                  key={row.id}
                  className={`row-h border-t border-line hover:bg-surface-alt ${selected.has(row.id) ? 'bg-primary/8' : ''}`}
                >
                  <td className="px-3 md:px-4">
                    <Checkbox checked={selected.has(row.id)} onChange={() => toggleRow(row.id)} />
                  </td>
                  <td className="px-3 py-2 font-mono text-xs md:px-4">#{row.id}</td>
                  <td className="px-3 py-2 font-medium md:px-4">{row.customer}</td>
                  <td className="px-3 py-2 text-muted md:px-4">{row.plan}</td>
                  <td className="px-3 py-2 text-right tabular-nums md:px-4">{row.seats}</td>
                  <td className="px-3 py-2 text-right font-semibold tabular-nums md:px-4">
                    ¥{row.amount.toLocaleString('zh-CN')}
                  </td>
                  <td className="px-3 py-2 md:px-4">
                    <StatusBadge kind={row.status} label={row.statusLabel} />
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-xs text-muted md:px-4">{row.updatedAt}</td>
                </tr>
              ))}
              {pageRows.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-14 text-center">
                    <p className="text-sm font-semibold">没有匹配的订单</p>
                    <p className="mt-1 text-xs text-muted">调整搜索关键词或状态筛选后重试</p>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-3 py-2.5 md:px-4">
          <p className="text-xs text-muted tabular-nums">
            第 {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} 条
          </p>
          <Pagination page={safePage} pageCount={pageCount} onChange={setPage} />
        </footer>
      </section>
    </div>
  )
}
