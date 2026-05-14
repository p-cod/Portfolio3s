'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

const timeline = [
  {
    year: '2022',
    title: 'Started Frontend Development',
    desc: 'Learned HTML, CSS and JavaScript fundamentals. Built first static websites and gained confidence in web development.',
  },
  {
    year: '2023',
    title: 'Advanced Frontend Skills',
    desc: 'Mastered React, Next.js, GSAP animations and responsive design. Delivered multiple client projects.',
  },
  {
    year: '2024',
    title: 'Backend Exploration Begins',
    desc: 'Started learning Node.js, Firebase, REST APIs and databases. Began building full-stack applications.',
  },
  {
    year: '2025',
    title: 'Full-Stack Transition',
    desc: 'Building scalable applications combining strong UI skills with robust backend architecture.',
  },
]

const skills = [
  { name: 'HTML & CSS', level: 95, color: '#BC6FF1' },
  { name: 'JavaScript', level: 90, color: '#892CDC' },
  { name: 'Next.js / React', level: 88, color: '#BC6FF1' },
  { name: 'GSAP / Framer Motion', level: 82, color: '#892CDC' },
  { name: 'Firebase', level: 75, color: '#BC6FF1' },
  { name: 'Node.js', level: 65, color: '#52057B' },
  { name: 'REST APIs', level: 72, color: '#892CDC' },
  { name: 'Tailwind CSS', level: 92, color: '#BC6FF1' },
]

const values = [
  { icon: '✨', title: 'Clean Code', desc: 'Every line has a purpose. Readable, maintainable and scalable by design.' },
  { icon: '🚀', title: 'Performance', desc: 'Fast-loading, optimized experiences that keep users engaged.' },
  { icon: '🎨', title: 'Design Sensibility', desc: 'Strong visual instincts paired with pixel-precise implementation.' },
  { icon: '🔒', title: 'Reliability', desc: 'Delivering projects on time with clear communication throughout.' },
]

export default function AboutPage() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>

      {/* HEADER */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="blob" style={{ width: 600, height: 600, background: '#52057B', top: '-20%', right: '-10%', opacity: 0.12 }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-xs tracking-widest mb-4" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>ABOUT ME</p>
                <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  Crafting the Web,<br />
                  <span className="gradient-text">Front to Back</span>
                </h1>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                  With over 2 years of frontend development experience, I've built everything from sleek landing pages to full real-time web applications. My journey started with HTML & CSS and evolved into mastering JavaScript, React, and Next.js.
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                  I'm now actively transitioning into backend engineering — learning server-side architecture, APIs, and databases to become a complete full-stack developer. My goal is to build products that are both beautiful and robust.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#BC6FF1' }} />
                  <span className="text-xs tracking-wide" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>
                    Based in Nigeria · Open to Remote Work
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Avatar placeholder */}
            <Reveal delay={150}>
              <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #52057B, #892CDC, #BC6FF1)',
                    filter: 'blur(30px)',
                    opacity: 0.4,
                  }} />
                <div className="relative z-10 w-full h-full rounded-3xl glass flex items-center justify-center overflow-hidden"
                  style={{ border: '1px solid rgba(188,111,241,0.3)' }}>
                  <div className="text-center p-8">
                    <img src="/photo.jpg.png"" alt="Profile" className="w-full h-full object-cover rounded-3xl" />
                    <p className="text-xs mt-1" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}>
                      Replace with an &lt;Image /&gt; component
                    </p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-medium"
                  style={{ color: '#BC6FF1', border: '1px solid rgba(188,111,241,0.3)', fontFamily: 'DM Sans, sans-serif', background: '#000' }}>
                  2+ Yrs Exp
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-medium"
                  style={{ color: '#BC6FF1', border: '1px solid rgba(188,111,241,0.3)', fontFamily: 'DM Sans, sans-serif', background: '#000' }}>
                  🇳🇬 Nigeria
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="glass glass-hover rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                  {v.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: '#777', fontFamily: 'DM Sans, sans-serif' }}>
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs tracking-widest mb-3" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>PROFICIENCIES</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff' }}>
                Technical Skills
              </h2>
            </div>
          </Reveal>

          <div className="space-y-5">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 60}>
                <div className="glass rounded-xl p-5">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium" style={{ color: '#ccc', fontFamily: 'DM Sans, sans-serif' }}>{skill.name}</span>
                    <span className="text-sm font-semibold gradient-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, #52057B, ${skill.color})`,
                        transition: 'width 1s ease',
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs tracking-widest mb-3" style={{ color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>JOURNEY</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff' }}>
                My Timeline
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, #892CDC, transparent)' }} />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #52057B, #892CDC)', border: '2px solid #BC6FF1' }}>
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="glass glass-hover rounded-2xl p-5 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{ background: 'rgba(188,111,241,0.15)', color: '#BC6FF1', fontFamily: 'DM Sans, sans-serif' }}>
                          {item.year}
                        </span>
                        <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
              Let's build something <span className="gradient-text">great together</span>
            </h2>
            <p className="mb-8" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
              I'm open to freelance projects, collaborations and full-time opportunities.
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
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
  }
  
