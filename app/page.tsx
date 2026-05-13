'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Code2, Server, Layers, Zap } from 'lucide-react'
import Reveal from '@/components/Reveal'

const techStack = [
  { name: 'HTML5', icon: '🔶' },
  { name: 'CSS3', icon: '🔷' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'GSAP', icon: '🎬' },
  { name: 'Bootstrap', icon: '💜' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Vercel', icon: '◆' },
]

const projects = [
  {
    title: 'NexChat',
    url: 'https://nexchat-djvp.vercel.app/',
    tag: 'Real-Time Platform',
    description: 'A real-time chatting platform with authentication, Firebase backend, responsive UI and fast modern user experience.',
    features: ['Authentication', 'Real-time Messaging', 'Responsive UI', 'Firebase Backend'],
    color: '#892CDC',
  },
  {
    title: 'Sparkle Cleaning Services',
    url: 'https://sparkle-cleaning-service.pxxl.click',
    tag: 'Corporate Website',
    description: 'A professional corporate cleaning service website with modern UI, service showcases and strong business-focused branding.',
    features: ['Responsive Layouts', 'Modern UI', 'Service Showcase', 'Business Branding'],
    color: '#52057B',
  },
]

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '∞', label: 'Lines of Code' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Blobs */}
        <div className="blob" style={{ width: 600, height: 600, background: '#52057B', top: '-10%', left: '-15%', animation: 'float 8s ease-in-out infinite' }} />
        <div className="blob" style={{ width: 400, height: 400, background: '#892CDC', top: '20%', right: '-10%', animation: 'float 11s ease-in-out infinite reverse' }} />
        <div className="blob" style={{ width: 300, height: 300, background: '#BC6FF1', bottom: '10%', left: '30%', animation: 'float 9s ease-in-out infinite', opacity: 0.08 }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(188,111,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(188,111,241,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass"
            style={{ border: '1px solid rgba(188,111,241,0.3)' }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#BC6FF1' }} />
            <span className="text-xs tracking-widest" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            color: '#fff',
            marginBottom: '1.5rem',
          }}>
            Frontend Developer<br />
            <span className="gradient-text">Transitioning Into</span><br />
            Backend Engineering
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#888',
            maxWidth: '640px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            I build modern, scalable and visually stunning digital experiences
            with clean code and strong user experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-glow flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{
                background: 'linear-gradient(135deg, #52057B, #892CDC)',
                color: '#fff',
                fontFamily: 'DM Sans, sans-serif',
                border: '1px solid rgba(188,111,241,0.4)',
              }}
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-glow flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm glass"
              style={{
                color: '#BC6FF1',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Contact Me
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-5 text-center glass-hover">
                <div className="gradient-text" style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800 }}>
                  {s.value}
                </div>
                <div className="text-xs mt-1 tracking-wide" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(188,111,241,0.5), transparent)' }} />
          <span className="text-xs tracking-widest" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}>SCROLL</span>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest mb-3" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>TECHNOLOGIES</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#fff' }}>
                My Tech Stack
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 60}>
                <div className="glass glass-hover rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
                  <span style={{ fontSize: '2rem' }}>{tech.icon}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, color: '#ccc', fontSize: '0.9rem' }}>
                    {tech.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 px-6 relative">
        <div className="blob" style={{ width: 500, height: 500, background: '#52057B', bottom: '0', right: '-20%', opacity: 0.1 }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest mb-3" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>PORTFOLIO</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#fff' }}>
                Featured Projects
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="glass glass-hover rounded-3xl overflow-hidden group h-full flex flex-col">
                  {/* Preview card top */}
                  <div className="relative h-52 flex items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}>
                    <div className="absolute inset-0"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }} />
                    <div className="relative z-10 text-center px-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 glass"
                        style={{ border: `1px solid ${p.color}55` }}>
                        <span className="text-xs" style={{ color: p.color, fontFamily: 'DM Sans, sans-serif' }}>{p.tag}</span>
                      </div>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
                        {p.title}
                      </h3>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.features.map(f => (
                        <span key={f} className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: `${p.color}18`,
                            color: '#BC6FF1',
                            border: `1px solid ${p.color}30`,
                            fontFamily: 'DM Sans, sans-serif',
                          }}>
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                        style={{
                          background: 'linear-gradient(135deg, #52057B, #892CDC)',
                          color: '#fff',
                          fontFamily: 'DM Sans, sans-serif',
                        }}
                      >
                        Live Preview <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-24 px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="blob" style={{ width: 400, height: 400, background: '#892CDC', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.12 }} />
            <div className="relative z-10">
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
                Ready to build something <span className="gradient-text">extraordinary?</span>
              </h2>
              <p className="mb-8 text-sm" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                Let's collaborate and bring your vision to life.
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
                Start a Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
    }
  
