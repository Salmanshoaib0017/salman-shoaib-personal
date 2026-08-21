import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react'
import { images, insightArticles, links } from '../data/siteData'

export function Insights() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker text-slate-300">Insights</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white text-balance sm:text-5xl lg:text-6xl">
                Market education for thoughtful Dubai real estate decisions
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Articles, analysis and educational content focused on Dubai property cycles, market fundamentals and investor strategy. Written by Salman Muhammad Shoaib.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="premium-solid-button" href={links.linktree} target="_blank" rel="noreferrer">
                  View all my links
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link className="premium-outline-button" to="/contact">
                  Request commentary
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.05] p-3">
              <img 
                src={images.training} 
                alt="Salman Muhammad Shoaib leading a real estate training session" 
                className="h-[520px] w-full rounded-[2rem] object-cover object-center" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#35506e]">Latest insights</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Articles and market analysis
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              In-depth articles exploring Dubai real estate market cycles, investor psychology and strategic decision-making. Each piece is written to help readers understand the market beyond headlines and hype.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {insightArticles.map((article) => (
              <article key={article.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
                <div className="bg-[#f8fafc] p-6">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#42617f]">
                    <span>{article.category}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/insights/${article.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#071323] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#10243c]"
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

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2.5rem] bg-[#f6f8fb] p-8 lg:p-12">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Want more insights and market commentary?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Salman shares regular market analysis, educational content and professional updates across his social platforms and link hub. Follow for ongoing insights on Dubai real estate cycles, investor strategy and market fundamentals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="premium-dark-button" href={links.linktree} target="_blank" rel="noreferrer">
                Open Salman's link hub
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link className="premium-light-button" to="/contact">
                Request a speaking engagement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
