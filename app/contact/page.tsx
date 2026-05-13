'use client'
import { useState } from 'react'
import { ArrowRight, MessageCircle, Mail, MapPin, Send } from 'lucide-react'
import Reveal from '@/components/Reveal'

const socials = [
  { name: 'GitHub', href: 'https://github.com', icon: '⌥' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  { name: 'Twitter / X', href: 'https://twitter.com', icon: '✕' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello, I'm ${form.name} and I'm interested in working with you.\n\nService: ${form.service || 'Not specified'}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.open(`https://wa.me/2347072065859?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const canSubmit = form.name && form.message

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>

      {/* HEADER */}
      <section className="relative pt-40 pb-16 px-6 text-center overflow-hidden">
        <div className="blob" style={{ width: 500, height: 500, background: '#52057B', top: '-5%', left: '50%', transform: 'translateX(-50%)', opacity: 0.15 }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-widest mb-4" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>CONTACT</p>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>
              Let's <span className="gradient-text">Work Together</span>
            </h1>
            <p style={{ color: '#888', fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Have a project in mind? Fill the form or reach out directly. I usually respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* LEFT — info */}
          <div className="md:col-span-2 space-y-6">
            <Reveal>
              <div className="glass glass-hover rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(188,111,241,0.15)' }}>
                  <MapPin size={18} style={{ color: '#BC6FF1' }} />
                </div>
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                  Location
                </h4>
                <p className="text-sm" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>Nigeria 🇳🇬</p>
                <p className="text-xs mt-1" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>Open to remote work worldwide</p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="glass glass-hover rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(188,111,241,0.15)' }}>
                  <Mail size={18} style={{ color: '#BC6FF1' }} />
                </div>
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                  Email
                </h4>
                <a href="mailto:your@email.com" className="text-sm transition-colors"
                  style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>
                  your@email.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <a
                href="https://wa.me/2347072065859?text=Hello%2C%20I'm%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow flex items-center gap-3 rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(37,211,102,0.15), rgba(18,140,126,0.15))',
                  border: '1px solid rgba(37,211,102,0.25)',
                  display: 'flex',
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37,211,102,0.2)' }}>
                  <MessageCircle size={18} style={{ color: '#25D366' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>
                    WhatsApp
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: '#25D366', fontFamily: 'DM Sans, sans-serif' }}>
                    Chat directly →
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={180}>
              <div className="glass rounded-2xl p-6">
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  Socials
                </h4>
                <div className="space-y-3">
                  {socials.map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm transition-colors group"
                      style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <span className="text-base">{s.icon}</span>
                      <span className="group-hover:text-purple-light transition-colors" style={{ color: 'inherit' }}>{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — form */}
          <div className="md:col-span-3">
            <Reveal delay={60}>
              <div className="glass rounded-3xl p-8">
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
                  Send a Message
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-wide mb-2" style={{ color: '#777', fontFamily: 'DM Sans, sans-serif' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wide mb-2" style={{ color: '#777', fontFamily: 'DM Sans, sans-serif' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wide mb-2" style={{ color: '#777', fontFamily: 'DM Sans, sans-serif' }}>
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="input-field w-full px-4 py-3 rounded-xl text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <option value="">Select a service...</option>
                      <option value="Corporate Website">Corporate Website</option>
                      <option value="E-Commerce Website">E-Commerce Website</option>
                      <option value="Custom Web Application">Custom Web Application</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wide mb-2" style={{ color: '#777', fontFamily: 'DM Sans, sans-serif' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="btn-glow w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    style={{
                      background: canSubmit ? 'linear-gradient(135deg, #52057B, #892CDC)' : 'rgba(255,255,255,0.05)',
                      color: canSubmit ? '#fff' : '#555',
                      fontFamily: 'DM Sans, sans-serif',
                      cursor: canSubmit ? 'none' : 'not-allowed',
                    }}
                  >
                    {sent ? '✓ Opening WhatsApp...' : (
                      <>Send via WhatsApp <Send size={14} /></>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}>
                    Clicking send will open WhatsApp with your message pre-filled.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
      }
      
