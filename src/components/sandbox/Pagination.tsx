interface PaginationProps {
  page: number
  pageCount: number
  onChange: (page: number) => void
}

const btn =
  'flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-control border px-2 text-xs font-medium'

export default function Pagination({ page, pageCount, onChange }: PaginationProps) {
  return (
    <nav className="flex items-center gap-1.5" aria-label="分页">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className={`${btn} border-line bg-surface text-muted hover:bg-surface-alt disabled:cursor-not-allowed disabled:opacity-40`}
      >
        ‹
      </button>
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          aria-current={n === page ? 'page' : undefined}
          className={`${btn} ${
            n === page
              ? 'border-transparent bg-primary text-on-primary shadow-control'
              : 'border-line bg-surface text-muted hover:bg-surface-alt'
          }`}
        >
          {n}
        </button>
      ))}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === pageCount}
        className={`${btn} border-line bg-surface text-muted hover:bg-surface-alt disabled:cursor-not-allowed disabled:opacity-40`}
      >
        ›
      </button>
    </nav>
  )
}
