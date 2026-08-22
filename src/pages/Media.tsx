import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react'
import { images, galleryImages } from '../data/siteData'

const pressFeatures = [
  {
    publication: 'Estate Magazine',
    headline: 'Salman Muhammad Shoaib Builds Trust Beyond Dubai Property Sales',
    summary: 'Feature article highlighting Salman\'s approach to building trust and credibility in Dubai\'s real estate market through education and transparency.',
    date: '2026',
    image: images.mediaFeature,
    url: 'https://estatemagazine.ae/salman-muhammad-shoaib-builds-trust-beyond-dubai/',
    buttonText: 'Read Full Feature',
  },
  {
    publication: 'Gulf Press',
    headline: 'The Story Behind Dubai Real Estate Beyond Headlines: Salman Muhammad Shoaib\'s Mission to Educate Investors',
    summary: 'Feature article covering the launch of Salman\'s book and his mission to educate investors about Dubai\'s real estate market cycles and fundamentals.',
    date: '2026',
    image: images.mediaGulfPress,
    url: 'https://gulfpress.net/real-estate/the-story-behind-dubai-real-estate-beyond-headlines-salman-muhammad-shoaibs-mission-to-educate-investors/',
    buttonText: 'Read Full Feature',
  },
  {
    publication: 'CoverGenix',
    headline: 'Why Context Matters More Than Headlines: Salman Muhammad Shoaib on Smarter Dubai Property Decisions',
    summary: 'Comprehensive interview discussing the importance of market context, data-driven decisions, and long-term investment strategy in Dubai real estate.',
    date: 'July 30, 2026',
    image: images.covergenix,
    url: '#', // TODO: Add CoverGenix article URL when available
    buttonText: 'Read Full Article',
  },
]

const interviewsVideos = [
  {
    title: 'Market Insights Interview',
    summary: 'Professional interview discussing Dubai real estate trends, investor education and market strategy.',
    date: '2026',
    image: images.mediaFeature,
    url: '#',
  },
]

const speakingEvents = [
  {
    title: 'The Leaders - LinkedIn Feature',
    summary: 'Recognition by The World Leaders on LinkedIn for driving real estate excellence and professional leadership in Dubai\'s property market.',
    date: '2026',
    image: images.mediaSquare,
    url: 'https://www.linkedin.com/posts/the-world-leaders_salman-muhammad-shoaib-driving-real-estate-activity-7486345626541211648-SSNY',
    buttonText: 'View LinkedIn Feature',
  },
  {
    title: 'Aarika Real Estate Open House',
    summary: 'Client meeting during an Aarika Real Estate open house, discussing property information and documents with prospective buyers.',
    date: '2026',
    image: images.clientMeeting,
    url: '#',
    buttonText: 'View Photo',
  },
]

export function Media() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker text-slate-300">Media</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white text-balance sm:text-5xl lg:text-6xl">
                Press features, interviews and speaking engagements
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                A professional media archive featuring verified press coverage, interviews, videos and speaking appearances. All content sourced from Salman's official media presence.
              </p>
              <Link to="/contact" className="premium-solid-button mt-8 w-fit">
                Media enquiries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={images.mediaPortrait} 
                alt="Original portrait photograph of Salman Muhammad Shoaib" 
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[center_15%] sm:object-[center_12%] lg:object-[center_10%]" 
              />
              <img 
                src={images.mediaGulfPress} 
                alt="Gulf Press feature for Dubai Real Estate Beyond Headlines" 
                className="mt-12 aspect-[4/5] w-full rounded-[2rem] object-contain bg-[#f8fafc] p-4" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#35506e]">Press features</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Published articles and press coverage
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Verified press features covering Salman's work in Dubai real estate, investor education and his published book.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {pressFeatures.map((feature) => (
              <article key={feature.headline} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
                <div className="bg-[#f8fafc] p-8">
                  <img 
                    src={feature.image} 
                    alt={feature.headline} 
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#42617f]">
                    <span className="rounded-full bg-[#071323] px-3 py-1 text-white">{feature.publication}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
                    {feature.headline}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {feature.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{feature.date}</span>
                    </div>
                    {feature.url !== '#' && (
                      <a 
                        href={feature.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#071323] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#10243c]"
                      >
                        {feature.buttonText || 'View Feature'}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#35506e]">Interviews & videos</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Media interviews and video features
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Professional interviews and video content featuring Salman's insights on Dubai real estate, market strategy and investor education.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {interviewsVideos.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fafc]">
                <div className="bg-[#f8fafc] p-8">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                    </div>
                    {item.url !== '#' && (
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#071323] hover:underline"
                      >
                        Watch Interview
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#35506e]">Speaking & events</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Speaking engagements and client meetings
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Professional speaking appearances, client meetings and industry events focused on investor education and real estate professional development.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {speakingEvents.map((event) => (
              <article key={event.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
                <div className="bg-[#f8fafc] p-8">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold leading-tight">
                    {event.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {event.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{event.date}</span>
                    </div>
                    {event.url !== '#' && (
                      <a 
                        href={event.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#071323] hover:underline"
                      >
                        {event.buttonText || 'View Event'}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#35506e]">Professional gallery</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Professional moments and achievements
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              A curated collection of professional photographs highlighting speaking engagements, authorship, business partnerships, open houses, deal closings and achievements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, index) => (
              <div 
                key={index}
                className={`overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-md ${
                  img.priority === 'high' ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#f8fafc]">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-[#071323]">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2.5rem] bg-white p-8 lg:p-12">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Looking for media assets or speaking engagements?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              For press enquiries, interview requests, speaking opportunities or media assets, please contact Salman directly. All media requests are reviewed and responded to professionally.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="premium-dark-button">
                Submit media enquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
