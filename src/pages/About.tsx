import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Building2, CheckCircle2, GraduationCap, Mic2, ShieldCheck, Users } from 'lucide-react'
import { images } from '../data/siteData'

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="order-2 lg:order-1">
              <p className="section-kicker text-slate-300">About Salman</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white text-balance sm:text-5xl lg:text-6xl">
                A career built on experience, trust and market clarity.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Salman Muhammad Shoaib is a Dubai-based Real Estate Advisor, Author, Trainer, Speaker and Market Strategist with over two decades of international sales experience and more than eight years dedicated to Dubai's property market.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.05]">
                <img 
                  src={images.about} 
                  alt="Original professional photograph of Salman Muhammad Shoaib" 
                  className="h-[520px] w-full object-cover object-[center_15%] sm:h-[600px] sm:object-[center_12%] lg:h-[640px] lg:object-[center_10%]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker text-[#35506e]">Journey into Dubai real estate</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            From international sales to Dubai market leadership
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Salman's career began with over two decades in international sales, building expertise in client relationships, market analysis and strategic decision-making across diverse markets and cultures.
            </p>
            <p>
              More than eight years ago, he brought that experience to Dubai's dynamic property market. Starting as a real estate advisor, he quickly recognized that Dubai's market required more than sales skills—it demanded deep understanding of market cycles, regulatory frameworks, investor psychology and long-term fundamentals.
            </p>
            <p>
              This foundation prepared him for the leadership roles he holds today: Chief Operating Officer at Aarika Real Estate, published author, trainer and market strategist helping investors and professionals navigate Dubai real estate with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker text-[#35506e]">Leadership and operational experience</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Chief Operating Officer at Aarika Real Estate
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              As Chief Operating Officer at Aarika Real Estate, Salman oversees operations, strategy and team development. His role combines market expertise with operational leadership, ensuring that clients receive informed guidance and that the team operates with integrity, professionalism and market knowledge.
            </p>
            <p>
              This leadership position reflects more than two decades of experience in sales, client relationships and market strategy. It also reflects his commitment to raising standards across the Dubai real estate industry through education, mentorship and ethical practice.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Building2,
                title: 'Operational Leadership',
                text: 'Overseeing strategy, operations and team development at Aarika Real Estate.',
              },
              {
                icon: Users,
                title: 'Team Development',
                text: 'Mentoring and training real estate professionals to lead with integrity and market expertise.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-6">
                  <Icon className="h-6 w-6 text-[#42617f]" />
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker text-[#35506e]">Advisor, trainer, speaker and author</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Multiple roles, one mission
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Salman's work extends beyond traditional real estate advisory. He is also an author, trainer, speaker and market strategist—roles that reflect his commitment to education, professional development and raising industry standards.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: 'Real Estate Advisor',
                text: 'Helping investors make informed decisions through market analysis, education and strategic guidance.',
              },
              {
                icon: GraduationCap,
                title: 'Trainer and Coach',
                text: 'Developing real estate professionals through training programs focused on market knowledge, integrity and client service.',
              },
              {
                icon: Mic2,
                title: 'Speaker and Commentator',
                text: 'Sharing market insights through speaking engagements, media features and educational content.',
              },
              {
                icon: BookOpen,
                title: 'Published Author',
                text: 'Author of Dubai Real Estate Beyond Headlines, a guide to understanding market cycles, investor psychology and long-term fundamentals.',
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
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker text-[#35506e]">Advisory philosophy</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Data over emotion. Strategy over speculation.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Salman's approach to real estate is grounded in a simple philosophy: decisions should be driven by data, context and long-term fundamentals—not by headlines, hype or short-term sentiment.
            </p>
            <p>
              This philosophy shapes every aspect of his work, from investor advisory to professional training. It reflects more than two decades of experience in sales and markets, and more than eight years of dedicated focus on Dubai's property market.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'Data over emotion',
                text: 'Reading trends, fundamentals and sentiment together before making major investment decisions.',
              },
              {
                title: 'Strategy over speculation',
                text: 'Evaluating opportunity, risk and timing with discipline instead of hype.',
              },
              {
                title: 'Education over pressure',
                text: 'Training professionals to advise with integrity, preparation and market knowledge.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071323] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker text-slate-300">Mission</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            To educate investors and develop better real estate professionals
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Salman's mission is to empower investors to navigate Dubai's real estate market with confidence, while fostering a new standard of knowledge, integrity and trust among industry professionals.
            </p>
            <p>
              This mission drives his work as an advisor, author, trainer and speaker. It reflects his belief that informed investors and well-trained professionals create a stronger, more sustainable real estate market—one built on fundamentals rather than speculation.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link to="/my-book" className="premium-solid-button">
              Read the book
              <BookOpen className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="premium-outline-button">
              Contact Salman
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
