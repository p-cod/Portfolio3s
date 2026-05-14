'use client'
import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto: preciouseyube59@gmail.com', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(188,111,241,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #52057B, #892CDC)' }}>
                <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '0.9rem', color: '#fff' }}>D</span>
              </div>
              <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
                DEV<span style={{ color: '#BC6FF1' }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
              Frontend developer transitioning into backend engineering. Building modern, scalable digital experiences.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 glass"
                  style={{ color: '#888' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = '#BC6FF1'
                    el.style.borderColor = 'rgba(188,111,241,0.4)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = '#888'
                    el.style.borderColor = 'rgba(188,111,241,0.15)'
                  }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-5" style={{ color: '#BC6FF1', fontFamily: 'Syne, sans-serif' }}>
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#BC6FF1' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#666' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-5" style={{ color: '#BC6FF1', fontFamily: 'Syne, sans-serif' }}>
              GET IN TOUCH
            </h4>
            <ul className="space-y-3">
              <li className="text-sm" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                📍 Nigeria
              </li>
              <li>
                <a href="mailto: preciouseyube59@gmail.com" className="text-sm transition-colors" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#BC6FF1' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#666' }}>
                  your@email.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347072065859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1.5 transition-colors"
                  style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#25D366' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#666' }}
                >
                  WhatsApp <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid rgba(188,111,241,0.08)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}>
              © {new Date().getFullYear()} Dev Portfolio. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}>
              Built with Next.js & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
