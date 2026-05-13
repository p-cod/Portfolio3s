'use client'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '@/components/Reveal'

const services = [
  {
    icon: '🏢',
    title: 'Corporate Websites',
    description: 'Professional multi-page business websites designed for brands, startups and organizations that need a strong online presence.',
    features: [
      '4-page responsive website',
      'Modern UI/UX design',
      'SEO optimization',
      'Fast performance',
      'Mobile responsive',
      'Contact forms',
      'Deployment included',
    ],
    price: 'From ₦250,000',
    color: '#892CDC',
    tag: 'MOST POPULAR',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Websites',
    description: 'Modern online stores with full business functionality — from product listings to checkout and order management.',
    features: [
      'Product management',
      'Admin dashboard',
      'Payment integration',
      'Authentication system',
      'Order tracking',
      'Cart & checkout',
      'Database integration',
      'Responsive storefront',
      'Performance optimization',
    ],
    price: '₦450,000 – ₦900,000',
    color: '#BC6FF1',
    tag: 'FULL STACK',
  },
  {
    icon: '⚙️',
    title: 'Custom Web Applications',
    description: 'Advanced tailored solutions for businesses and unique ideas requiring custom backend systems and complex interactions.',
    features: [
      'Custom backend systems',
      'REST / GraphQL APIs',
      'Authentication & security',
      'Dashboards & analytics',
      'Scalable architecture',
      'Complex UI interactions',
      'AI integrations',
    ],
    price: 'Custom Quote',
    color: '#52057B',
    tag: 'ENTERPRISE',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We discuss your goals, requirements and project scope in detail.' },
  { step: '02', title: 'Design', desc: 'Wireframes and UI mockups are crafted for your approval.' },
  { step: '03', title: 'Development', desc: 'Clean, scalable code is written with performance in mind.' },
  { step: '04', title: 'Launch', desc: 'Deployment, testing and handover — you\'re live!' },
]

export default function ServicesPage() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>

      {/* HEADER */}
      <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="blob" style={{ width: 500, height: 500, background: '#52057B', top: '-10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.15 }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-widest mb-4" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>WHAT I OFFER</p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>
              Services Built for <span className="gradient-text">Real Results</span>
            </h1>
            <p style={{ color: '#888', fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
              From sleek corporate sites to full-stack applications — I design and develop digital products that perform.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="glass glass-hover rounded-3xl p-8 flex flex-col h-full relative overflow-hidden">
                {s.tag && (
                  <div className="absolute top-5 right-5">
                    <span className="text-xs px-2.5 py-1 rounded-full tracking-wider"
                      style={{ background: `${s.color}22`, color: s.color, fontFamily: 'DM Sans, sans-serif', border: `1px solid ${s.color}40` }}>
                      {s.tag}
                    </span>
                  </div>
                )}

                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                  {s.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${s.color}22`, border: `1px solid ${s.color}40` }}>
                        <Check size={11} style={{ color: s.color }} />
                      </div>
                      <span className="text-sm" style={{ color: '#bbb', fontFamily: 'DM Sans, sans-serif' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6" style={{ borderTop: '1px solid rgba(188,111,241,0.1)' }}>
                  <div className="mb-4">
                    <span className="text-xs tracking-wide" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>STARTING FROM</span>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#BC6FF1', marginTop: '0.2rem' }}>
                      {s.price}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-glow w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium"
                    style={{
                      background: `linear-gradient(135deg, #52057B, ${s.color})`,
                      color: '#fff',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest mb-3" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>HOW IT WORKS</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff' }}>
                My Process
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="glass rounded-2xl p-6 text-center glass-hover relative">
                  <div className="text-4xl font-bold mb-4 gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {p.step}
                  </div>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                    {p.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#777', fontFamily: 'DM Sans, sans-serif' }}>
                    {p.desc}
                  </p>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px"
                      style={{ background: 'linear-gradient(90deg, #892CDC, transparent)' }} />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
              Not sure which service fits?
            </h2>
            <p className="mb-8" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
              Let's have a quick chat and figure out the best approach for your project.
            </p>
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{
                background: 'linear-gradient(135deg, #52057B, #892CDC)',
                color: '#fff',
                fontFamily: 'DM Sans, sans-serif',
                border: '1px solid rgba(188,111,241,0.4)',
              }}
            >
              Let's Talk <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
    }
  
