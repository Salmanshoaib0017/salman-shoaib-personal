import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Mic2,
  Newspaper,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'
import { credibilityPoints, expertiseAreas, images, insightPillars, links, mediaItems } from '../data/siteData'

const iconMap = [ShieldCheck, BarChart3, GraduationCap, Mic2]

export function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#071323]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(118,151,191,0.24),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.10),transparent_28%),linear-gradient(135deg,#071323_0%,#0b1a2d_52%,#050b14_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#f6f8fb] to-transparent" />

        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-300/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
              <Sparkles className="h-4 w-4 text-slate-300" />
              Dubai Real Estate • Investor Education • Leadership
            </div>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white text-balance sm:text-6xl lg:text-7xl">
              Salman Muhammad Shoaib
            </h1>
            <p className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
              Dubai Real Estate Advisor, Author, Trainer & Market Strategist
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Helping investors understand Dubai real estate through data, strategy and market insight.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="premium-solid-button">
                Speak with Salman
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/my-book" className="premium-outline-button">
                Explore the Book
                <BookOpen className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {['Data-led advisory', 'Investor education', 'Market cycles'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-slate-200">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-slate-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] border border-white/10 bg-white/[0.03]" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#0b1728] shadow-2xl shadow-black/40">
              <img
                src={images.hero}
                alt="Original portrait photograph of Salman Muhammad Shoaib"
                className="h-[520px] w-full object-cover object-[center_20%] sm:h-[560px] sm:object-[center_15%] lg:h-[600px] lg:object-[center_10%]"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071323]/95 via-[#071323]/35 to-transparent p-7">
                <div className="max-w-sm rounded-3xl border border-white/15 bg-[#071323]/80 p-5 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Advisory philosophy</p>
                  <p className="mt-3 text-lg font-medium leading-7 text-white">
                    Knowledge before investment, strategy before decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker text-[#35506e]">Professional introduction</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
                A trusted voice for investors who want to understand Dubai beyond the headlines.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Salman Muhammad Shoaib is a Dubai-based Real Estate Advisor, Trainer, Author and Market Strategist with over eight years of experience in Dubai's property market and more than two decades in international sales.
              </p>
              <p>
                As Chief Operating Officer at Aarika Real Estate, he helps investors make informed decisions through market analysis, education and strategic guidance. He is also the author of <em>Dubai Real Estate Beyond Headlines</em>, a book created to help readers understand market resilience, cycles and investment fundamentals.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {credibilityPoints.map((point) => (
              <div key={point} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
                <CheckCircle2 className="h-5 w-5 text-[#42617f]" />
                <p className="mt-4 text-base font-medium leading-7 text-slate-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#35506e]">Advisory philosophy</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Knowledge before investment, strategy before decisions.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Salman's approach is education-first, not pressure-first. He helps investors and professionals understand market cycles, read data with context, and make decisions with clarity instead of speculation.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BarChart3,
                title: 'Data over emotion',
                text: 'Read trends, fundamentals and sentiment together before making major investment decisions.',
              },
              {
                icon: ShieldCheck,
                title: 'Strategy over speculation',
                text: 'Help clients evaluate opportunity, risk and timing with discipline instead of hype.',
              },
              {
                icon: GraduationCap,
                title: 'Education over pressure',
                text: 'Train real estate professionals to advise with integrity, preparation and market knowledge.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7">
                  <Icon className="h-7 w-7 text-[#42617f]" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#dce6f2]" />
            <img
              src={images.bookCover}
              alt="Dubai Real Estate Beyond Headlines book cover"
              className="relative mx-auto max-h-[560px] rounded-[2rem] border border-slate-200 object-cover shadow-2xl shadow-slate-400/30"
              loading="lazy"
            />
          </div>
          <div>
            <p className="section-kicker text-[#35506e]">Featured book</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Dubai Real Estate Beyond Headlines
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              More than a book, it is a practical guide for investors, real estate professionals and anyone who wants to understand Dubai's property market beyond daily news and market noise.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Historical market cycles', 'Investor psychology', 'Practical strategy'].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f3f6fa] p-4 text-sm font-semibold text-[#223a55]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="premium-dark-button" href={links.amazon} target="_blank" rel="noreferrer">
                Buy on Amazon
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link className="premium-light-button" to="/my-book">
                Read book details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071323] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker text-slate-300">Market insight</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Education-led content for investors and real estate professionals.
              </h2>
            </div>
            <Link to="/insights" className="premium-outline-button w-fit">
              View insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {insightPillars.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{item.category}</p>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker text-[#35506e]">Media & publications</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Featured work and media-ready assets.
              </h2>
            </div>
            <Link to="/media" className="premium-light-button w-fit">
              Visit media page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {mediaItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fafc]">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="block">
                    <div className="bg-[#f8fafc] p-6">
                      <img src={item.image} alt={item.title} className="h-auto w-full object-contain" loading="lazy" />
                    </div>
                  </a>
                ) : (
                  <div className="bg-[#f8fafc] p-6">
                    <img src={item.image} alt={item.title} className="h-auto w-full object-contain" loading="lazy" />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42617f]">{item.type}</p>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  {item.url && (
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#071323] hover:underline"
                    >
                      Read Full Feature
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#35506e]">Speaking & training</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Investor education and professional development
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Salman delivers speaking engagements, training sessions and educational programs focused on Dubai real estate expertise, market fundamentals and professional leadership.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: 'Investor Education',
                text: 'Educational sessions helping investors understand Dubai\'s real estate market, cycles and long-term fundamentals.',
              },
              {
                icon: Users,
                title: 'Real Estate Professional Training',
                text: 'Training programs for brokers and agents focused on market knowledge, client service and professional standards.',
              },
              {
                icon: TrendingUp,
                title: 'Market-Cycle Understanding',
                text: 'Sessions on reading market cycles, recognizing opportunities and making decisions based on data rather than headlines.',
              },
              {
                icon: ShieldCheck,
                title: 'Advisory Skills',
                text: 'Developing advisory capabilities that prioritize client education, integrity and long-term value creation.',
              },
              {
                icon: Building2,
                title: 'Leadership & Team Development',
                text: 'Leadership training for real estate teams focused on operational excellence, mentorship and professional growth.',
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

          <div className="mt-12">
            <Link to="/contact?type=speaking" className="premium-dark-button">
              Speaking & Training Enquiries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#071323] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="section-kicker text-slate-300">Contact Salman</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              For investor enquiries, media requests, speaking opportunities or professional collaborations.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Start with a clear conversation about your goals, audience or market question.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link to="/contact" className="premium-solid-button justify-center">
              Send an enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={links.linktree} target="_blank" rel="noreferrer" className="premium-outline-button justify-center">
              View all links
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
