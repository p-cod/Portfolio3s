'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(188,111,241,0.1)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #52057B, #892CDC)' }}>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '0.9rem', color: '#fff' }}>D</span>
          </div>
          <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', color: '#fff', letterSpacing: '0.05em' }}>
            DEV<span style={{ color: '#BC6FF1' }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm tracking-wide transition-colors duration-200 relative group"
                style={{
                  color: pathname === l.href ? '#BC6FF1' : '#aaa',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                }}
              >
                {l.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    width: pathname === l.href ? '100%' : '0%',
                    background: 'linear-gradient(90deg, #892CDC, #BC6FF1)',
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:flex btn-glow items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
          style={{
            background: 'linear-gradient(135deg, #52057B, #892CDC)',
            color: '#fff',
            fontFamily: 'DM Sans, sans-serif',
            border: '1px solid rgba(188,111,241,0.3)',
          }}
        >
          Hire Me
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white"
          style={{ cursor: 'none' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: open ? '400px' : '0',
          background: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: open ? '1px solid rgba(188,111,241,0.1)' : 'none',
        }}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm py-2 transition-colors"
                style={{
                  color: pathname === l.href ? '#BC6FF1' : '#aaa',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium mt-2"
              style={{
                background: 'linear-gradient(135deg, #52057B, #892CDC)',
                color: '#fff',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
        }
          
