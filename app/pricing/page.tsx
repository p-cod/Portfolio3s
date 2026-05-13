'use client'
import Link from 'next/link'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import Reveal from '@/components/Reveal'

const plans = [
  {
    title: 'Corporate Website',
    price: '₦250,000',
    period: 'one-time',
    description: 'Perfect for businesses, startups and organizations needing a clean professional web presence.',
    features: [
      '4 pages (Home, About, Services, Contact)',
      'Fully responsive design',
      'SEO setup & optimization',
      'Deployment on Vercel',
      'Contact form integration',
      'Performance optimization',
      '1 round of revisions',
    ],
    cta: 'Get Started',
    popular: false,
    color: '#892CDC',
  },
  {
    title: 'E-Commerce Website',
    price: '₦450,000',
    priceTo: '₦900,000',
    period: 'project',
    description: 'Full-featured online store with everything you need to run a modern digital business.',
    features: [
      'Admin dashboard',
      'Payment gateway integration',
      'Product management system',
      'User authentication',
      'Order tracking system',
      'Cart & checkout flow',
      'Database setup',
      'Fully responsive storefront',
      'Performance optimization',
      '2 rounds of revisions',
    ],
    cta: 'Get Started',
    popular: true,
    color: '#BC6FF1',
  },
  {
    title: 'Custom Application',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solutions for complex projects, unique ideas and enterprise-grade requirements.',
    features: [
      'Custom backend architecture',
      'REST / GraphQL APIs',
      'Authentication & security',
      'Custom dashboards',
      'AI integrations (if needed)',
      'Scalable cloud infrastructure',
      'Custom user workflows',
      'Unlimited revisions',
      'Priority support',
    ],
    cta: 'Discuss Project',
    popular: false,
    color: '#52057B',
  },
]

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Corporate sites: 1–2 weeks. E-commerce: 3–5 weeks. Custom apps vary by complexity. Timelines are discussed during onboarding.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Bank transfer (Nigerian banks), Opay, and other mobile money solutions. A 50% deposit is required before work begins.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes — basic support and bug fixes are included for 2 weeks post-launch. Extended maintenance plans are available.',
  },
  {
    q: 'Can you work with existing designs?',
    a: 'Absolutely. If you have a Figma or Adobe XD design, I can develop it exactly as designed.',
  },
]

export default function PricingPage() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>

      {/* HEADER */}
      <section className="relative pt-40 pb-16 px-6 text-center overflow-hidden">
        <div className="blob" style={{ width: 500, height: 500, background: '#52057B', top: '-5%', left: '50%', transform: 'translateX(-50%)', opacity: 0.15 }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-widest mb-4" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>PRICING</p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p style={{ color: '#888', fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Clear, fair pricing with no hidden fees. All prices are in Nigerian Naira.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 100}>
              <div
                className={`glass rounded-3xl p-8 flex flex-col relative overflow-hidden transition-all duration-500 ${plan.popular ? 'glass-hover' : 'glass-hover'}`}
                style={{
                  border: plan.popular ? '1px solid rgba(188,111,241,0.5)' : '1px solid rgba(188,111,241,0.15)',
                  boxShadow: plan.popular ? '0 0 40px rgba(188,111,241,0.15)' : 'none',
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                    style={{ background: 'linear-gradient(90deg, #52057B, #892CDC, #BC6FF1)' }} />
                )}
                {plan.popular && (
                  <div className="inline-block px-3 py-1 rounded-full text-xs mb-4 self-start"
                    style={{ background: 'rgba(188,111,241,0.15)', color: '#BC6FF1', border: '1px solid rgba(188,111,241,0.3)', fontFamily: 'DM Sans, sans-serif' }}>
                    MOST POPULAR
                  </div>
                )}

                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {plan.title}
                </h3>
                <p className="text-xs mb-6 leading-relaxed" style={{ color: '#777', fontFamily: 'DM Sans, sans-serif' }}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
                      {plan.price}
                    </span>
                    {plan.priceTo && (
                      <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 600, color: '#888', marginBottom: '0.15rem' }}>
                        {' – '}{plan.priceTo}
                      </span>
                    )}
                  </div>
                  <span className="text-xs tracking-wide" style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${plan.color}22`, border: `1px solid ${plan.color}40` }}>
                        <Check size={11} style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm" style={{ color: '#bbb', fontFamily: 'DM Sans, sans-serif' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?plan=${encodeURIComponent(plan.title)}`}
                  className="btn-glow w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold"
                  style={{
                    background: plan.popular
                      ? 'linear-gradient(135deg, #52057B, #892CDC)'
                      : 'rgba(188,111,241,0.08)',
                    color: plan.popular ? '#fff' : '#BC6FF1',
                    border: plan.popular ? 'none' : '1px solid rgba(188,111,241,0.25)',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {plan.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageCircle size={18} style={{ color: '#25D366' }} />
              <span className="text-sm font-medium" style={{ color: '#25D366', fontFamily: 'DM Sans, sans-serif' }}>Quick response via WhatsApp</span>
            </div>
            <p className="text-sm mb-4" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
              Not sure which plan to pick? Message me and we'll figure out the best fit together.
            </p>
            <a
              href="https://wa.me/2347072065859?text=Hello%2C%20I'm%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs tracking-widest mb-3" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>FAQ</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#fff' }}>
                Common Questions
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="glass glass-hover rounded-2xl p-6">
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, color: '#fff', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    {faq.q}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
    }
    
