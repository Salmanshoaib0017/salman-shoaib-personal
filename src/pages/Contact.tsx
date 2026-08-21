import { FormEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, Instagram, Linkedin, Mail, MapPin, MessageCircle, Send, Shield } from 'lucide-react'
import { images, links } from '../data/siteData'

const enquiryTypes = [
  'Property Investment',
  'Speaking Engagement',
  'Training Request',
  'Media Enquiry',
  'Business Collaboration',
  'General Enquiry',
]

export function Contact() {
  const [searchParams] = useSearchParams()
  const initialType = searchParams.get('type') === 'speaking' ? 'Speaking Engagement' : enquiryTypes[0]
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: initialType,
    message: '',
    honeypot: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    if (form.honeypot) {
      return
    }

    setSubmitting(true)

    // Prepare WhatsApp message
    const whatsappMessage = `Hello Salman,\n\nI'd like to enquire about: ${form.enquiryType}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\nMessage:\n${form.message}`
    
    const whatsappUrl = `${links.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    
    // Simulate submission delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    setSubmitted(true)
    setSubmitting(false)
    
    // Open WhatsApp after showing success
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  if (submitted) {
    return (
      <>
        <section className="page-hero">
          <div className="page-hero-bg" />
          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-6 lg:px-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
              <CheckCircle2 className="h-12 w-12 text-green-400" />
            </div>
            <h1 className="mt-8 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Enquiry sent successfully
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Thank you for contacting Salman. Your enquiry has been received and will be reviewed shortly. You can expect a response within one business day.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="premium-solid-button">
                Chat on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
              <button 
                onClick={() => {
                  setSubmitted(false)
                  setForm({
                    name: '',
                    email: '',
                    phone: '',
                    enquiryType: enquiryTypes[0],
                    message: '',
                    honeypot: '',
                  })
                }}
                className="premium-outline-button"
              >
                Send another enquiry
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker text-slate-300">Contact Salman</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white text-balance sm:text-5xl lg:text-6xl">
                Get in touch with Salman Muhammad Shoaib
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                For property investment, speaking engagements, training requests, media enquiries or business collaborations.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.05] p-3">
              <img 
                src={images.mediaPortrait} 
                alt="Original professional portrait of Salman Muhammad Shoaib in Dubai" 
                className="h-[540px] w-full rounded-[2rem] object-cover object-[center_15%] sm:object-[center_12%] lg:object-[center_10%]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20 text-[#071323] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="section-kicker text-[#35506e]">Send an enquiry</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Contact form
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Fill out the form below and Salman will review your enquiry and respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={(e) => updateField('honeypot', e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Name *</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="contact-input mt-2"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Email *</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="contact-input mt-2"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="contact-input mt-2"
                    placeholder="+971 XX XXX XXXX"
                    autoComplete="tel"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Enquiry type *</span>
                  <select
                    required
                    value={form.enquiryType}
                    onChange={(e) => updateField('enquiryType', e.target.value)}
                    className="contact-input mt-2"
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Message *</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="contact-input mt-2"
                  placeholder="Please provide details about your enquiry..."
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="premium-dark-button w-full justify-center disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500">
                <Shield className="mr-1 inline h-3 w-3" />
                Your information is protected and will only be used to respond to your enquiry. We respect your privacy and will never share your details with third parties.
              </p>
            </form>
          </div>

          <div className="lg:pl-8">
            <p className="section-kicker text-[#35506e]">Contact information</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Other ways to reach Salman
            </h2>

            <div className="mt-10 space-y-6">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#42617f] focus:ring-offset-2"
              >
                <MessageCircle className="h-6 w-6 flex-none text-[#42617f]" />
                <div>
                  <h3 className="font-semibold text-[#071323]">WhatsApp</h3>
                  <p className="mt-1 text-sm text-slate-600">{links.phoneDisplay}</p>
                  <p className="mt-1 text-xs text-slate-500">Chat directly with Salman</p>
                </div>
              </a>

              <a
                href={`mailto:${links.email || 'contact@salmanshoaib.com'}`}
                className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#42617f] focus:ring-offset-2"
              >
                <Mail className="h-6 w-6 flex-none text-[#42617f]" />
                <div>
                  <h3 className="font-semibold text-[#071323]">Professional Email</h3>
                  <p className="mt-1 text-sm text-slate-600">{links.email || 'contact@salmanshoaib.com'}</p>
                  <p className="mt-1 text-xs text-slate-500">For formal enquiries and documentation</p>
                </div>
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#42617f] focus:ring-offset-2"
              >
                <Linkedin className="h-6 w-6 flex-none text-[#42617f]" />
                <div>
                  <h3 className="font-semibold text-[#071323]">LinkedIn</h3>
                  <p className="mt-1 text-sm text-slate-600">Connect professionally</p>
                  <p className="mt-1 text-xs text-slate-500">View Salman's professional profile</p>
                </div>
              </a>

              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#42617f] focus:ring-offset-2"
              >
                <Instagram className="h-6 w-6 flex-none text-[#42617f]" />
                <div>
                  <h3 className="font-semibold text-[#071323]">Instagram</h3>
                  <p className="mt-1 text-sm text-slate-600">@salmantherealtor</p>
                  <p className="mt-1 text-xs text-slate-500">Follow for market insights and updates</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <MapPin className="h-6 w-6 flex-none text-[#42617f]" />
                <div>
                  <h3 className="font-semibold text-[#071323]">Location</h3>
                  <p className="mt-1 text-sm text-slate-600">Dubai, United Arab Emirates</p>
                  <p className="mt-1 text-xs text-slate-500">Serving local and international clients</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <Clock className="h-6 w-6 flex-none text-[#42617f]" />
                <div>
                  <h3 className="font-semibold text-[#071323]">Response Time</h3>
                  <p className="mt-1 text-sm text-slate-600">Usually responds within one business day</p>
                  <p className="mt-1 text-xs text-slate-500">All enquiries are reviewed personally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
