import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Disclaimer() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="section-kicker text-slate-300">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white text-balance sm:text-5xl lg:text-6xl">
            Website Disclaimer
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="mt-0 font-display text-3xl font-semibold tracking-[-0.02em]">General Information</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              The information provided on this website is for general informational and educational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
            </p>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Real Estate Advice</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              The content on this website, including articles, insights, and market commentary, is provided for educational purposes and should not be considered as personalized investment advice. Real estate markets are subject to change, and past performance does not guarantee future results.
            </p>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              Before making any real estate investment decisions, you should:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="text-lg leading-8 text-slate-700">Conduct your own research and due diligence</li>
              <li className="text-lg leading-8 text-slate-700">Consult with qualified financial and legal advisors</li>
              <li className="text-lg leading-8 text-slate-700">Consider your personal financial situation and risk tolerance</li>
              <li className="text-lg leading-8 text-slate-700">Seek professional advice specific to your circumstances</li>
            </ul>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Market Information</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              Market data, statistics, and analysis presented on this website are based on publicly available information and professional experience. Market conditions can change rapidly, and we cannot guarantee the accuracy or timeliness of all market information.
            </p>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">External Links</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              This website may contain links to external websites, including Amazon, social media platforms, and other third-party sites. We are not responsible for the content, accuracy, or practices of these external sites. Accessing external links is at your own risk.
            </p>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Professional Services</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              Any professional services, including real estate advisory, training, or speaking engagements, are provided under separate terms and conditions agreed upon directly with clients. Information on this website does not constitute a binding offer of services.
            </p>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Limitation of Liability</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              In no event will Salman Muhammad Shoaib be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of this website or reliance on any information provided herein.
            </p>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Changes to This Disclaimer</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              We reserve the right to update or modify this disclaimer at any time without prior notice. Your continued use of the website following any changes indicates your acceptance of the new terms.
            </p>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.02em]">Contact</h2>
            <p className="mb-6 text-lg leading-8 text-slate-700">
              If you have any questions about this disclaimer, please contact us through our contact page.
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
