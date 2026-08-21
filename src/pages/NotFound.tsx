import { Link } from 'react-router-dom'
import { ArrowRight, Home, Search } from 'lucide-react'

export function NotFound() {
  return (
    <section className="page-hero min-h-[70vh]">
      <div className="page-hero-bg" />
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
          <Search className="h-12 w-12 text-slate-300" />
        </div>
        <p className="mt-8 section-kicker text-slate-400">404 - Page Not Found</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
          This page doesn't exist
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="premium-solid-button">
            <Home className="h-4 w-4" />
            Back to Homepage
          </Link>
          <Link to="/insights" className="premium-outline-button">
            Browse Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <Link to="/about" className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.08]">
            <h3 className="font-display text-xl font-semibold text-white">About Salman</h3>
            <p className="mt-2 text-sm text-slate-400">Learn about his journey and expertise</p>
          </Link>
          <Link to="/my-book" className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.08]">
            <h3 className="font-display text-xl font-semibold text-white">The Book</h3>
            <p className="mt-2 text-sm text-slate-400">Dubai Real Estate Beyond Headlines</p>
          </Link>
          <Link to="/contact" className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.08]">
            <h3 className="font-display text-xl font-semibold text-white">Contact</h3>
            <p className="mt-2 text-sm text-slate-400">Get in touch with Salman</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
