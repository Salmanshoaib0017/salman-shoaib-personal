import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { insightArticles, images } from '../data/siteData'

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = insightArticles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="page-hero min-h-[70vh]">
        <div className="page-hero-bg" />
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-6 lg:px-8">
          <p className="section-kicker text-slate-300">Article not found</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            This article is not available.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Return to the Insights page to browse all articles.
          </p>
          <Link to="/insights" className="premium-solid-button mt-8">
            Back to Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    )
  }

  const relatedArticles = insightArticles.filter((a) => a.slug !== slug).slice(0, 2)

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Insights
          </Link>
          <div className="mt-8">
            <p className="section-kicker text-slate-300">{article.category}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white text-balance sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Salman Muhammad Shoaib</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#f8fafc] p-8">
            <img 
              src={article.image} 
              alt={article.title} 
              className="h-auto w-full object-contain" 
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="mt-12 mb-6 font-display text-3xl font-semibold tracking-[-0.02em] text-[#071323]">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="mt-8 mb-4 font-display text-2xl font-semibold tracking-[-0.02em] text-[#071323]">
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }
              if (paragraph.includes('**') && paragraph.includes(':')) {
                const parts = paragraph.split('**')
                return (
                  <p key={index} className="mb-6 text-lg leading-8 text-slate-700">
                    <strong className="font-semibold text-[#071323]">{parts[1]}</strong>
                    {parts[2]}
                  </p>
                )
              }
              if (paragraph.startsWith('- **')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- **'))
                return (
                  <ul key={index} className="mb-6 space-y-3">
                    {items.map((item, i) => {
                      const parts = item.replace('- **', '').split('**: ')
                      return (
                        <li key={i} className="text-lg leading-8 text-slate-700">
                          <strong className="font-semibold text-[#071323]">{parts[0]}:</strong> {parts[1]}
                        </li>
                      )
                    })}
                  </ul>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n').filter(line => line.match(/^\d+\./))
                return (
                  <ol key={index} className="mb-6 space-y-3 list-decimal list-inside">
                    {items.map((item, i) => {
                      const text = item.replace(/^\d+\.\s*/, '')
                      const parts = text.split('**')
                      return (
                        <li key={i} className="text-lg leading-8 text-slate-700">
                          {parts.length > 1 ? (
                            <>
                              <strong className="font-semibold text-[#071323]">{parts[1]}</strong>
                              {parts[2]}
                            </>
                          ) : (
                            text
                          )}
                        </li>
                      )
                    })}
                  </ol>
                )
              }
              return (
                <p key={index} className="mb-6 text-lg leading-8 text-slate-700">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-16 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
            <div className="flex items-start gap-4">
              <img 
                src={images.about} 
                alt="Salman Muhammad Shoaib" 
                className="h-16 w-16 rounded-full object-cover object-[center_15%]"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-xl font-semibold">About the Author</h3>
                <p className="mt-1 text-sm font-medium text-[#42617f]">Salman Muhammad Shoaib</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Dubai-based Real Estate Advisor, Author, Trainer, Speaker and Market Strategist with over two decades of international sales experience and more than eight years dedicated to Dubai's property market. Chief Operating Officer at Aarika Real Estate and author of <em>Dubai Real Estate Beyond Headlines</em>.
                </p>
                <div className="mt-4 flex gap-3">
                  <Link to="/about" className="text-sm font-semibold text-[#071323] hover:underline">
                    Learn more about Salman
                  </Link>
                  <Link to="/contact" className="text-sm font-semibold text-[#071323] hover:underline">
                    Contact Salman
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Related insights
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {relatedArticles.map((related) => (
                <article key={related.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fafc]">
                  <div className="bg-[#f8fafc] p-6">
                    <img 
                      src={related.image} 
                      alt={related.title} 
                      className="h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#42617f]">
                      <span>{related.category}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
                      {related.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {related.excerpt}
                    </p>
                    <Link 
                      to={`/insights/${related.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071323] hover:underline"
                    >
                      Read Insight
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
