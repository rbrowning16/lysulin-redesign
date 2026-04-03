const problems = [
  {
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop',
    title: 'Energy Crashes',
    description:
      'Blood sugar spikes followed by crashes leave you exhausted, unfocused, and reaching for the next quick fix — creating a dangerous cycle.',
  },
  {
    img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80&auto=format&fit=crop',
    title: 'Stubborn Weight Gain',
    description:
      'Unstable blood sugar promotes fat storage, especially around the abdomen, and makes sustainable weight management nearly impossible.',
  },
  {
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80&auto=format&fit=crop',
    title: 'Long-Term Health Risks',
    description:
      'Chronically elevated blood sugar accelerates glycation — the process that damages proteins and tissues throughout your body over time.',
  },
]

export default function ProblemSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2
            className="font-display font-bold text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Why Blood Sugar Matters More
            <br />
            <span className="text-forest">Than You've Been Told</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Most people only think about blood sugar when diabetes is mentioned. But unstable
            glucose affects everyone — your energy, weight, mood, and longevity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-forest text-xl mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center bg-mint-light rounded-2xl p-10">
          <h3 className="font-display font-bold text-forest text-2xl mb-3">
            There's a Better Way
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Lysulin's clinically researched formula targets blood sugar at the cellular level,
            helping you break free from the glucose rollercoaster.
          </p>
          <a
            href="/shop"
            className="inline-block bg-forest text-white font-bold px-8 py-4 rounded-full hover:bg-forest-mid transition-colors shadow-lg"
          >
            Discover Lysulin
          </a>
        </div>
      </div>
    </section>
  )
}
