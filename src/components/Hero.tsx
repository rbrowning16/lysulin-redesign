import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

interface Bubble {
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
}

function generateBubbles(count: number): Bubble[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    size: Math.random() * 18 + 8,
    duration: Math.random() * 8 + 7,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.4 + 0.2,
  }))
}

const BUBBLES = generateBubbles(22)

export default function Hero() {
  const bottleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bottleRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      el.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(110deg, #8ec5bc 0%, #a8d8d0 18%, #c8ecE6 40%, #e2f5f0 62%, #f0fbf8 80%, #f8fffe 100%)',
      }}
    >
      {/* Rising bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${b.x}%`,
              bottom: '-40px',
              width: `${b.size}px`,
              height: `${b.size}px`,
              opacity: b.opacity,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-forest-mid font-semibold text-sm uppercase tracking-widest mb-3">
              Advanced Blood Sugar Support
            </p>
            <h1
              className="font-display font-bold leading-[1.1] mb-4"
              style={{ color: '#0b3e2e', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
            >
              Blood Sugar
              <br />
              <span style={{ color: '#126349' }}>Instability</span>
            </h1>
            <h2
              className="font-display font-semibold leading-snug mb-5"
              style={{ color: '#0b3e2e', fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)' }}
            >
              Affects More Than You Think
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md" style={{ fontSize: '1.05rem' }}>
              Lysulin is a science-backed supplement with clinically studied ingredients that help
              maintain healthy blood sugar levels, reduce glycation, and support long-term metabolic health.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/80 shadow-sm">
              <span className="text-teal font-bold text-lg">✓</span>
              <span className="text-forest font-semibold text-sm">Clinically Studied</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/80 shadow-sm">
              <span className="text-teal font-bold text-lg">⊕</span>
              <span className="text-forest font-semibold text-sm">Patented Formula</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/80 shadow-sm">
              <span className="text-teal font-bold text-lg">★</span>
              <span className="text-forest font-semibold text-sm">Doctor Formulated</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="bg-forest text-white font-bold px-8 py-4 rounded-full text-base shadow-lg hover:bg-forest-mid transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Shop Now
            </Link>
            <a
              href="#how-it-works"
              className="border-2 border-forest text-forest font-bold px-8 py-4 rounded-full text-base hover:bg-forest hover:text-white transition-all"
            >
              How It Works
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-2">
              {['bg-teal-300', 'bg-green-300', 'bg-emerald-400', 'bg-teal-400'].map((c, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white`} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">Trusted by 10,000+ customers</p>
            </div>
          </div>
        </div>

        {/* Right: Bottle + Swoosh */}
        <div className="relative flex items-center justify-center min-h-[520px]">
          {/* 3D Swoosh SVG ribbon */}
          <svg
            viewBox="0 0 420 560"
            className="absolute inset-0 w-full h-full"
            style={{ filter: 'drop-shadow(0 12px 30px rgba(11,62,46,0.25))' }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="swooshBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0b7a4e" />
                <stop offset="40%" stopColor="#0f5c3a" />
                <stop offset="100%" stopColor="#062b1e" />
              </linearGradient>
              <linearGradient id="swooshHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1fb876" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1fb876" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="swooshShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Main ribbon body */}
            <path
              d="M 30 480
                 C 10 400, 60 300, 120 220
                 C 160 170, 200 140, 240 120
                 C 290 95, 340 100, 390 80
                 L 380 50
                 C 330 72, 278 66, 228 92
                 C 186 114, 145 145, 104 197
                 C 42 280, -8 385, 14 475
                 Z"
              fill="url(#swooshBody)"
            />
            {/* Highlight stripe (lighter top edge) */}
            <path
              d="M 30 480
                 C 10 400, 60 300, 120 220
                 C 160 170, 200 140, 240 120
                 C 290 95, 340 100, 390 80
                 L 385 68
                 C 336 88, 286 83, 236 108
                 C 194 130, 153 161, 112 212
                 C 52 294, 4 396, 22 478
                 Z"
              fill="url(#swooshHighlight)"
              opacity="0.5"
            />
            {/* Shadow stripe (darker bottom edge) */}
            <path
              d="M 14 475
                 C -8 385, 42 280, 104 197
                 C 145 145, 186 114, 228 92
                 L 220 80
                 C 176 102, 134 134, 92 188
                 C 28 273, -22 382, 2 475
                 Z"
              fill="url(#swooshShadow)"
            />
          </svg>

          {/* Floating decorative circles */}
          <div className="absolute top-12 right-12 w-5 h-5 rounded-full bg-teal/60 border border-white/50 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-24 left-16 w-3 h-3 rounded-full bg-teal-light/50 border border-white/50 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-28 right-16 w-4 h-4 rounded-full bg-mint/70 border border-white/50 animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-16 left-20 w-6 h-6 rounded-full bg-teal/40 border border-white/50 animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-40 right-8 w-2 h-2 rounded-full bg-teal-light/60" />
          <div className="absolute top-56 left-10 w-2 h-2 rounded-full bg-teal/50" />

          {/* Bottle */}
          <div
            ref={bottleRef}
            className="relative z-10 transition-transform duration-200"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '800px',
              filter: 'drop-shadow(0 20px 40px rgba(11,62,46,0.2))',
            }}
          >
            <img
              src="/images/bottle.png"
              alt="Lysulin Blood Sugar Support Supplement"
              className="w-auto"
              style={{ maxHeight: '460px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))' }}
      />
    </section>
  )
}
