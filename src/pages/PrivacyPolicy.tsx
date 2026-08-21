import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="section-kicker text-slate-300">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white text-balance sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="mt-0 font-display text-3xl font-semibold tracking-[-0.02em]">Introduction</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              This Privacy Policy explains how Salman Muhammad Shoaib collects, uses, and protects your personal information when you visit this website or contact us directly.
            </p>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Information We Collect</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              We may collect the following information when you use our contact form or reach out directly:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="text-lg leading-8 text-slate-700">Name and contact details (email, phone number)</li>
              <li className="text-lg leading-8 text-slate-700">Enquiry type and message content</li>
              <li className="text-lg leading-8 text-slate-700">Any additional information you voluntarily provide</li>
            </ul>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">How We Use Your Information</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              Your information is used solely to:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="text-lg leading-8 text-slate-700">Respond to your enquiries and requests</li>
              <li className="text-lg leading-8 text-slate-700">Provide professional services you have requested</li>
              <li className="text-lg leading-8 text-slate-700">Communicate with you about real estate advisory, training, or speaking engagements</li>
            </ul>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Data Protection</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              We take appropriate security measures to protect your personal information. We do not sell, trade, or share your information with third parties except as necessary to respond to your enquiries or provide requested services.
            </p>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Your Rights</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              You have the right to:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="text-lg leading-8 text-slate-700">Request access to your personal information</li>
              <li className="text-lg leading-8 text-slate-700">Request correction or deletion of your information</li>
              <li className="text-lg leading-8 text-slate-700">Withdraw consent for data processing</li>
            </ul>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Contact Us</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              If you have any questions about this Privacy Policy or your personal information, please contact us through our contact page.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/" className="premium-light-button">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
