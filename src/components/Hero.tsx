import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(105deg, #6db8b0 0%, #8ecec6 15%, #b8e4de 35%, #ddf2ee 55%, #f5fbfa 72%, #ffffff 85%)',
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-8 items-center py-20">

        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <p className="text-forest-mid font-semibold text-sm uppercase tracking-widest">
            Advanced Blood Sugar Support
          </p>

          <div>
            <h1
              className="font-display font-bold leading-[1.05] mb-3"
              style={{ color: '#0b3e2e', fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
            >
              Blood Sugar
              <br />
              <span style={{ color: '#126349' }}>Instability</span>
            </h1>
            <h2
              className="font-display font-semibold leading-snug mb-5"
              style={{ color: '#0b3e2e', fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)' }}
            >
              Affects More Than You Think
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md" style={{ fontSize: '1rem' }}>
              Lysulin combines clinically studied ingredients to help maintain healthy blood sugar,
              reduce glycation, and support lasting metabolic health.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="bg-forest text-white font-bold px-8 py-4 rounded-full text-base shadow-lg hover:bg-forest-mid transition-all"
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

          {/* Badges */}
          <div className="flex flex-wrap gap-5 mt-1">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-forest font-semibold text-sm">Clinically Studied</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-forest font-semibold text-sm">Patented Formula</span>
            </div>
          </div>
        </div>

        {/* Right: Bottle */}
        <div className="relative flex items-center justify-center" style={{ minHeight: '540px' }}>

          {/* Green swoosh — a simple curved arc shape on the right edge */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '70px',
              height: '420px',
              background: 'linear-gradient(180deg, #0d7a50 0%, #0a5c3a 50%, #063d26 100%)',
              borderRadius: '60px 0 0 60px',
              boxShadow: '-4px 0 20px rgba(11,62,46,0.2)',
              zIndex: 1,
            }}
          >
            {/* Shine on the swoosh */}
            <div style={{
              position: 'absolute',
              left: '8px',
              top: '10%',
              width: '12px',
              height: '60%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)',
              borderRadius: '10px',
            }} />
          </div>

          {/* Bottle — sits directly on the white background, no wrapper needed */}
          <div
            className="relative"
            style={{
              zIndex: 2,
              filter: 'drop-shadow(0 12px 28px rgba(11,62,46,0.12))',
            }}
          >
            <img
              src="/images/bottle.png"
              alt="Lysulin Blood Sugar Support Supplement"
              style={{ maxHeight: '500px', width: 'auto', display: 'block' }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
