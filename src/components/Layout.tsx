import { type ReactNode, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, BookOpen, Instagram, Linkedin, Mail, Menu, X, Youtube } from 'lucide-react'
import { links, navItems, socialLinks } from '../data/siteData'

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Salman Muhammad Shoaib | Dubai Real Estate Advisor, Author & Market Strategist',
    description: 'Dubai-based Real Estate Advisor, Author, Trainer, Speaker and Market Strategist. Chief Operating Officer at Aarika Real Estate with 20+ years international sales experience and 8+ years in Dubai real estate.',
  },
  '/about': {
    title: 'About Salman Muhammad Shoaib | Dubai Real Estate Advisor',
    description: 'Learn about Salman Muhammad Shoaib\'s journey from international sales to Dubai real estate leadership. Chief Operating Officer at Aarika Real Estate, published author and market strategist.',
  },
  '/my-book': {
    title: 'Dubai Real Estate Beyond Headlines | Salman Muhammad Shoaib',
    description: 'A Strategic Look at Market Resilience, Investor Confidence, and Dubai\'s Recovery. Understand Dubai\'s property market cycles, investor psychology and long-term fundamentals.',
  },
  '/insights': {
    title: 'Insights | Salman Muhammad Shoaib',
    description: 'Articles, analysis and educational content focused on Dubai property cycles, market fundamentals and investor strategy. Written by Salman Muhammad Shoaib.',
  },
  '/media': {
    title: 'Media | Salman Muhammad Shoaib',
    description: 'Press features, interviews and speaking engagements. Verified media coverage of Salman Muhammad Shoaib\'s work in Dubai real estate and investor education.',
  },
  '/contact': {
    title: 'Contact | Salman Muhammad Shoaib',
    description: 'Get in touch with Salman Muhammad Shoaib for property investment, speaking engagements, training requests, media enquiries or business collaborations.',
  },
}

function getPageMeta(pathname: string): { title: string; description: string } {
  if (pathname.startsWith('/insights/') && pathname !== '/insights') {
    return {
      title: 'Article | Salman Muhammad Shoaib',
      description: 'Read expert insights on Dubai real estate market cycles, investor education and strategic decision-making by Salman Muhammad Shoaib.',
    }
  }
  return pageMeta[pathname] ?? {
    title: 'Salman Muhammad Shoaib',
    description: 'Dubai Real Estate Advisor, Author, Trainer & Market Strategist',
  }
}

const socialIconMap: Record<string, ReactNode> = {
  Instagram: <Instagram className="h-4 w-4" />,
  LinkedIn: <Linkedin className="h-4 w-4" />,
  YouTube: <Youtube className="h-4 w-4" />,
  TikTok: <span className="text-[11px] font-bold tracking-tight">TT</span>,
}

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `rounded-full px-4 py-2 text-[0.8125rem] font-medium transition ${
    isActive
      ? 'bg-white text-[#071323] shadow-sm'
      : 'text-slate-200 hover:bg-white/10 hover:text-white'
  }`
}

export function Layout() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsOpen(false)
    const meta = getPageMeta(pathname)
    document.title = meta.title
    
    // Update meta description
    let descMeta = document.querySelector('meta[name="description"]')
    if (!descMeta) {
      descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      document.head.appendChild(descMeta)
    }
    descMeta.setAttribute('content', meta.description)
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://salmanshoaib.com${pathname}`)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-[#071323] text-slate-100">
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071323]/90 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3" aria-label="Salman Muhammad Shoaib home">
            <span className={`flex items-center justify-center rounded-full border border-slate-300/20 bg-white/95 text-[#071323] shadow-[0_0_35px_rgba(161,181,205,0.22)] transition-all duration-300 ${
              isScrolled ? 'h-9 w-9' : 'h-10 w-10'
            }`}>
              <BookOpen className="h-5 w-5" />
            </span>
            <span className="leading-tight hidden sm:block">
              <span className={`block font-display font-semibold tracking-wide text-white transition-all duration-300 ${
                isScrolled ? 'text-base' : 'text-lg'
              }`}>Salman Muhammad Shoaib</span>
              <span className="block text-[0.6875rem] uppercase tracking-[0.28em] text-slate-400">Real Estate Advisor • Author • Trainer</span>
            </span>
          </Link>

          <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-1 xl:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navLinkClass} end={item.href === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#071323] transition hover:bg-slate-200"
            >
              Contact Salman
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/contact"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-slate-300/60 hover:bg-white/10"
              aria-label="Contact Salman"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-slate-300/60 hover:bg-white/10"
              aria-label="Open menu"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 bg-[#071323] px-5 py-5 xl:hidden">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink key={item.href} to={item.href} className={navLinkClass} end={item.href === '/'}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-5">
              <Link className="premium-solid-button justify-center w-full" to="/contact">
                Contact Salman
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className={`pt-16 transition-all duration-300 ${isScrolled ? 'lg:pt-14' : 'lg:pt-16'}`}>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-[#050c16]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#071323]">
                  <BookOpen className="h-5 w-5" />
                </span>
                <span className="font-display text-xl font-semibold text-white">Salman Muhammad Shoaib</span>
              </Link>
              <p className="mt-6 text-sm leading-7 text-slate-400">
                Helping investors understand Dubai real estate through data, strategy and market insight. Based in Dubai and advising local and international clients.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-slate-300/60 hover:bg-white/10"
                    aria-label={social.label}
                  >
                    {socialIconMap[social.label] ?? social.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Navigation</h3>
              <div className="mt-5 grid gap-3">
                {navItems.map((item) => (
                  <Link key={item.href} to={item.href} className="text-sm text-slate-400 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Resources</h3>
              <div className="mt-5 grid gap-3">
                <a href={links.amazon} target="_blank" rel="noreferrer" className="text-sm text-slate-400 transition hover:text-white">
                  Buy the Book
                </a>
                <Link to="/media" className="text-sm text-slate-400 transition hover:text-white">
                  Media Enquiries
                </Link>
                <Link to="/insights" className="text-sm text-slate-400 transition hover:text-white">
                  Market Insights
                </Link>
                <a href={links.linktree} target="_blank" rel="noreferrer" className="text-sm text-slate-400 transition hover:text-white">
                  All Links
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Contact</h3>
              <div className="mt-5 grid gap-3 text-sm text-slate-400">
                <a className="transition hover:text-white" href={`mailto:${links.email}`}>
                  {links.email}
                </a>
                <a className="transition hover:text-white" href={links.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp: {links.phoneDisplay}
                </a>
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-slate-500">
              © 2026 Salman Muhammad Shoaib. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <Link to="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/disclaimer" className="transition hover:text-white">
                Website Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
