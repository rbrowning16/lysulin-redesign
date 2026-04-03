const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Type 2 Diabetic, 54',
    avatar: 'SM',
    color: 'bg-teal-400',
    stars: 5,
    text: "My A1C dropped from 7.8 to 6.9 in three months while taking Lysulin. My doctor was impressed. I have more energy and fewer afternoon crashes than I've had in years.",
  },
  {
    name: 'David R.',
    role: 'Pre-diabetic, 47',
    avatar: 'DR',
    color: 'bg-forest',
    stars: 5,
    text: "I was borderline pre-diabetic and wanted to try something natural before going on medication. After 60 days of Lysulin, my fasting glucose went from 108 to 94. Incredible.",
  },
  {
    name: 'Jennifer K.',
    role: 'Health-conscious, 39',
    avatar: 'JK',
    color: 'bg-teal-600',
    stars: 5,
    text: "No more 3pm energy crash. I used to need coffee or a snack every few hours. Now my energy is stable throughout the day. I didn't expect such a dramatic difference.",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">
            Real Results
          </p>
          <h2
            className="font-display font-bold text-forest mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Thousands of people have transformed their relationship with blood sugar using Lysulin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col gap-4"
            >
              <StarRating count={t.stars} />
              <p className="text-gray-700 leading-relaxed italic flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 items-center">
          {[
            { label: 'Verified Reviews', value: '2,400+' },
            { label: 'Average Rating', value: '4.9/5' },
            { label: 'Would Recommend', value: '97%' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display font-bold text-forest text-2xl">{item.value}</p>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
