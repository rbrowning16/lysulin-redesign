const stats = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '3', label: 'Patented Ingredients' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '15+', label: 'Years of Research' },
]

export default function StatsBar() {
  return (
    <section className="bg-forest py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-teal-light font-bold text-3xl font-display">{s.value}</p>
              <p className="text-mint/80 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
