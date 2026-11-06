import { blogPosts, pricingPlans } from '../../../data/mock'
import { buttonClass, cardClass } from '../../ui/styles'

export default function ContentPage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-xl font-bold">内容页面</h2>
        <p className="mt-0.5 text-sm text-muted">排版样张、定价表与博客卡片——验证规范在「内容侧」的表现力</p>
      </div>

      <section className={`${cardClass} p-5 md:p-8`}>
        <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">Typography Specimen</h3>
        <div className="mt-4 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h1 className="font-display text-3xl font-bold">设计是沉默的语言</h1>
            <h2 className="font-display text-2xl font-bold">Design as silent language</h2>
            <h3 className="font-display text-lg font-bold">同一份样板间 / 十二套人格</h3>
            <h4 className="text-base font-semibold">语义化 Token · 实时注入 · 零刷新</h4>
            <p className="text-sm leading-6 text-muted">
              正文 14px / 行高 1.5。一段双语混排的文字用来检验字体回退栈：The quick brown fox jumps over the lazy dog.
              0123456789 —— 数字应当使用 tabular-nums 以保持对齐。
            </p>
            <p className="text-xs text-muted">辅助说明文字（caption），用于元数据与脚注。</p>
            <div className="flex gap-2 pt-1">
              <span className="rounded-control bg-surface-alt px-2 py-1 font-mono text-xs text-accent">colors.primary</span>
              <code className="rounded-control bg-ink px-2 py-1 font-mono text-xs text-bg">npm run design:lint</code>
            </div>
          </div>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-primary pl-4 text-sm leading-6 italic">
              「规范的价值不在于限制创造，而在于让一千次微小的决定保持同一种气质。」
              <footer className="mt-2 text-xs not-italic text-muted">— 样板间设计手记</footer>
            </blockquote>
            <ul className="list-inside space-y-1.5 text-sm">
              <li className="flex gap-2">
                <span className="text-success">✓</span> Do：主色只留给每屏最重要的动作
              </li>
              <li className="flex gap-2">
                <span className="text-success">✓</span> Do：状态徽章保持 4.5:1 以上对比度
              </li>
              <li className="flex gap-2">
                <span className="text-danger">✕</span> Don't：在同屏混用两种圆角语言
              </li>
            </ul>
            <p className="text-sm leading-7">
              行内链接示例：本套规范收录自{' '}
              <a href="https://designmd.app/" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary">
                designmd.app
              </a>
              ，其原始 YAML Token 可在源码对照抽屉中查看。
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-display text-sm font-bold">定价 Pricing</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`${cardClass} relative flex flex-col p-5 ${plan.highlight ? 'border-primary ring-2 ring-primary/20' : ''}`}
            >
              {plan.highlight ? (
                <span className="absolute -top-2.5 left-4 rounded-badge bg-primary px-2 py-0.5 text-[10px] font-bold text-on-primary">
                  最受欢迎
                </span>
              ) : null}
              <p className="text-sm font-bold">{plan.name}</p>
              <p className="mt-0.5 text-xs text-muted">{plan.pitch}</p>
              <p className="mt-4 font-display text-3xl font-bold tabular-nums">
                {plan.price}
                <span className="ml-1 text-xs font-normal text-muted">{plan.period}</span>
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={buttonClass(plan.highlight ? 'primary' : 'secondary', 'md', 'mt-5 w-full stroke-control')}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-display text-sm font-bold">博客 Writing</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className={`${cardClass} flex flex-col p-5 hover:shadow-card`}>
              <div className="flex items-center justify-between">
                <span className="rounded-badge border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                  {post.tag}
                </span>
                <span className="font-mono text-[11px] text-muted tabular-nums">{post.date}</span>
              </div>
              <h4 className="mt-3 font-display text-base leading-snug font-bold">{post.title}</h4>
              <p className="mt-2 flex-1 text-xs leading-5 text-muted">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-xs text-muted">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
                  {post.author[0].toUpperCase()}
                </span>
                {post.author}
                <span className="ml-auto tabular-nums">{post.minutes} min 阅读</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
