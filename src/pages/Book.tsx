import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle2, ExternalLink, Layers, Target, TrendingUp, Users } from 'lucide-react'
import { bookInfo, bookLessons, bookReaders, images, links } from '../data/siteData'

export function Book() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="section-kicker text-slate-300">My book</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white text-balance sm:text-5xl lg:text-6xl">
                {bookInfo.title}
              </h1>
              <p className="mt-6 text-xl font-medium leading-8 text-slate-200">
                {bookInfo.subtitle}
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                A practical guide for investors, real estate professionals and anyone who wants to understand Dubai's property market beyond daily news and market noise.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="premium-solid-button" href={links.amazon} target="_blank" rel="noreferrer">
                  Buy Paperback
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a className="premium-outline-button" href={links.amazonKindle} target="_blank" rel="noreferrer">
                  Read on Kindle
                  <BookOpen className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm font-semibold text-slate-300">Publication details</p>
                <div className="mt-3 grid gap-2 text-sm text-slate-400">
                  <p><span className="font-medium text-slate-300">ISBN:</span> {bookInfo.isbn}</p>
                  <p><span className="font-medium text-slate-300">Published:</span> {bookInfo.publicationDate}</p>
                  <p><span className="font-medium text-slate-300">Formats:</span> {bookInfo.formats.join(', ')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-6 rounded-[3rem] bg-slate-300/10 blur-2xl" />
              <img 
                src={images.bookCover} 
                alt="Dubai Real Estate Beyond Headlines book cover" 
                className="relative mx-auto max-h-[640px] rounded-[2rem] border border-white/15 shadow-2xl shadow-black/50" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker text-[#35506e]">Why this book</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Written to help readers make better sense of Dubai's market
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              After more than eight years in Dubai real estate and over two decades in international sales, Salman recognized a gap: most investors and professionals were making decisions based on headlines, hype and short-term sentiment rather than market fundamentals, historical context and long-term strategy.
            </p>
            <p>
              <em>Dubai Real Estate Beyond Headlines</em> was written to fill that gap. It combines historical market cycles, investor psychology and practical market insights to help readers understand how Dubai's real estate market actually works—not just what the latest headline says.
            </p>
            <p>
              The book is not a sales pitch. It's an educational resource created to help investors make informed decisions, professionals provide better guidance, and anyone interested in Dubai real estate understand the market with greater clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-kicker text-[#35506e]\">Purpose</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Created to help readers understand market resilience, recovery and investment fundamentals
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              The book's purpose is to provide a structured framework for understanding Dubai's real estate market beyond daily news and market noise. It helps readers:
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Understand how Dubai\'s property market has evolved through historical cycles',
                'Recognize opportunities by focusing on long-term trends rather than short-term headlines',
                'Evaluate risk, opportunity and timing with discipline instead of speculation',
                'Make informed decisions based on data, context and market fundamentals',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#42617f]" />
                  <span className="text-base leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
            <img src={images.bookScene} alt="Open copy of Dubai Real Estate Beyond Headlines" className="h-[420px] w-full rounded-[2rem] object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker text-[#35506e]">Chapter themes</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Market cycles, history, recovery and investor lessons
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: TrendingUp,
                title: 'Historical Market Cycles',
                text: 'How Dubai\'s property market has evolved from the 2002 opening through the 2008 correction, recovery phases and post-COVID growth.',
              },
              {
                icon: Layers,
                title: 'Market Resilience',
                text: 'Why Dubai\'s real estate market has demonstrated remarkable resilience and what fundamentals drive long-term value.',
              },
              {
                icon: Users,
                title: 'Investor Psychology',
                text: 'How emotion, headlines and short-term sentiment influence decisions—and how to make choices based on strategy instead.',
              },
              {
                icon: Target,
                title: 'Investment Strategy',
                text: 'Practical frameworks for evaluating opportunity, risk and timing with discipline and long-term perspective.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/60">
                  <Icon className="h-7 w-7 text-[#42617f]" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#35506e]">What you'll discover</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              A framework for understanding cycles, psychology and opportunity
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Layers,
                title: 'Read the market with confidence',
                text: 'Understand how Dubai\'s property market has evolved over time and learn to recognize opportunities by focusing on long-term trends rather than short-term headlines.',
              },
              {
                icon: TrendingUp,
                title: 'Think like a seasoned investor',
                text: 'Learn how experienced investors evaluate opportunities, manage risk and make decisions using market fundamentals instead of emotion.',
              },
              {
                icon: Target,
                title: 'Become a better advisor',
                text: 'Strengthen your market knowledge, improve advisory conversations and develop a strategic approach that helps clients make informed decisions.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071323] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#071323] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="section-kicker text-slate-300">Key lessons</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Lessons designed for real decisions, not hype
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The book is structured to help readers move from market noise to clearer thinking, practical strategy and deeper confidence.
            </p>
          </div>
          <div className="grid gap-4">
            {bookLessons.map((lesson) => (
              <div key={lesson} className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-slate-300" />
                <p className="text-lg leading-7 text-slate-100">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="overflow-hidden rounded-[2.5rem] bg-[#f8fafc] p-6">
              <img 
                src={images.bookPortrait} 
                alt="Salman Muhammad Shoaib with the Dubai Real Estate Beyond Headlines book cover" 
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="section-kicker text-[#35506e]">Target readers</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Who should read this book?
              </h2>
              <div className="mt-8 grid gap-5">
                {bookReaders.map((reader) => (
                  <div key={reader.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
                    <Users className="h-5 w-5 text-[#42617f]" />
                    <h3 className="mt-4 text-xl font-semibold">{reader.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{reader.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker text-[#35506e]">About the author</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Salman Muhammad Shoaib
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Salman Muhammad Shoaib is a Dubai-based Real Estate Advisor, Author, Trainer, Speaker and Market Strategist with over two decades of international sales experience and more than eight years dedicated to Dubai's property market.
            </p>
            <p>
              As Chief Operating Officer at Aarika Real Estate, he helps investors make informed decisions through market analysis, education and strategic guidance. He is also passionate about mentoring and coaching the next generation of real estate professionals to lead with integrity and market expertise.
            </p>
            <p>
              <em>Dubai Real Estate Beyond Headlines</em> reflects his commitment to investor education and raising professional standards across the Dubai real estate industry.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a className="premium-dark-button" href={links.amazon} target="_blank" rel="noreferrer">
              Buy Paperback
              <ExternalLink className="h-4 w-4" />
            </a>
            <a className="premium-light-button" href={links.amazonKindle} target="_blank" rel="noreferrer">
              Read on Kindle
              <BookOpen className="h-4 w-4" />
            </a>
            <Link className="premium-light-button" to="/contact">
              Invite Salman to speak
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
