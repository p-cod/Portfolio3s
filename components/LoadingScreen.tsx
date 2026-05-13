'use client'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 400)
          return 100
        }
        return p + 2
      })
    }, 20)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div
      id="loading-screen"
      style={{
        opacity: progress === 100 ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: progress === 100 ? 'none' : 'all',
      }}
    >
      <div className="text-center">
        <div className="mb-8">
          <span className="gradient-text" style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, letterSpacing: '0.2em' }}>
            DEV<span style={{ color: '#BC6FF1' }}>.</span>
          </span>
        </div>
        <div className="w-48 h-px bg-gray-800 mx-auto rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #52057B, #892CDC, #BC6FF1)',
              transition: 'width 0.02s linear',
            }}
          />
        </div>
        <p className="mt-4 text-xs tracking-widest" style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}>
          LOADING {progress}%
        </p>
      </div>
    </div>
  )
}
