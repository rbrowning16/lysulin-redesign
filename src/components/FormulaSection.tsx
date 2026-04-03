const ingredients = [
  {
    name: 'Lysine',
    dose: '500mg',
    benefit: 'Blocks sugar-protein binding (glycation) to protect cells from damage',
    icon: '🔬',
  },
  {
    name: 'Vitamin C',
    dose: '500mg',
    benefit: 'Competes with glucose at receptor sites, reducing cellular sugar uptake',
    icon: '⚡',
  },
  {
    name: 'Zinc',
    dose: '15mg',
    benefit: 'Essential cofactor for insulin production and glucose metabolism',
    icon: '🛡️',
  },
  {
    name: 'Thiamine (B1)',
    dose: '100mg',
    benefit: 'Activates enzymes that break down glucose efficiently for clean energy',
    icon: '🔋',
  },
  {
    name: 'Chromium',
    dose: '200mcg',
    benefit: 'Enhances insulin sensitivity to help glucose enter cells properly',
    icon: '✨',
  },
]

export default function FormulaSection() {
  return (
    <section className="py-20 bg-mint-pale">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">
            The Solution
          </p>
          <h2
            className="font-display font-bold text-forest mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            A Formula Backed by Science,
            <br />
            Not Just Marketing
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Each ingredient in Lysulin was selected based on peer-reviewed clinical research — with
            precise dosages that actually match what was studied.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Ingredients list */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-forest text-xl">Lysulin's Active Formula</h3>
                <p className="text-gray-500 text-sm">5 synergistic ingredients, 1 powerful result</p>
              </div>
            </div>

            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-teal/30 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-mint flex items-center justify-center text-lg">
                  {ing.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-forest">{ing.name}</span>
                    <span className="text-xs font-semibold text-teal bg-teal-soft rounded-full px-2 py-0.5">
                      {ing.dose}
                    </span>
                    <svg className="w-4 h-4 text-forest ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm leading-snug">{ing.benefit}</p>
                </div>
              </div>
            ))}

            <div className="mt-2 p-4 bg-forest/5 rounded-xl border border-forest/10">
              <p className="text-forest text-sm font-medium text-center">
                🔬 All ingredients match exact clinical study dosages
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex flex-col items-center justify-center gap-6">
            {/* Large bottle display */}
            <div
              className="relative"
              style={{ filter: 'drop-shadow(0 24px 48px rgba(11,62,46,0.2))' }}
            >
              {/* Glowing circle behind bottle */}
              <div
                className="absolute inset-0 rounded-full m-auto"
                style={{
                  width: '280px',
                  height: '280px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, rgba(20,184,166,0) 70%)',
                }}
              />
              <img
                src="/images/bottle.png"
                alt="Lysulin bottle"
                className="relative z-10 mx-auto"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>

            {/* Scattered supplement bubbles */}
            <div className="absolute top-8 right-4 w-16 h-16 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-2xl animate-float" style={{ animationDelay: '0s' }}>
              💊
            </div>
            <div className="absolute top-20 left-4 w-14 h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-xl animate-float" style={{ animationDelay: '0.8s' }}>
              🧬
            </div>
            <div className="absolute bottom-24 right-2 w-14 h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-xl animate-float" style={{ animationDelay: '1.4s' }}>
              ⚗️
            </div>
            <div className="absolute bottom-12 left-6 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-lg animate-float" style={{ animationDelay: '0.4s' }}>
              🔬
            </div>

            {/* Badges */}
            <div className="flex gap-3 flex-wrap justify-center">
              {['Non-GMO', 'Gluten Free', 'Made in USA', 'GMP Certified'].map((badge) => (
                <span
                  key={badge}
                  className="bg-white text-forest font-semibold text-xs px-3 py-1.5 rounded-full border border-forest/20 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
