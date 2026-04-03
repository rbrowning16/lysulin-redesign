import { Link } from 'react-router-dom'

const products = [
  {
    name: 'Lysulin Original',
    subtitle: '60 Capsules — 1 Month Supply',
    price: '$44.95',
    priceNote: 'or $38.95/mo with Subscribe & Save',
    badge: 'Most Popular',
    badgeColor: 'bg-teal text-white',
    features: ['1,000mg Lysine', '1,000mg Vitamin C', '15mg Zinc', '30mg Thiamine', '200mcg Chromium'],
    img: '/images/bottle.png',
    primary: true,
  },
  {
    name: 'Lysulin 3-Pack',
    subtitle: '180 Capsules — 3 Month Supply',
    price: '$119.95',
    priceNote: 'Save $14.90 vs. single bottle',
    badge: 'Best Value',
    badgeColor: 'bg-forest text-white',
    features: ['3 Full Bottles', 'Free Shipping', 'Priority Support', '90-Day Money Back', 'Bulk Savings'],
    img: '/images/bottle.png',
    primary: false,
  },
]

export default function Products() {
  return (
    <section className="py-20 bg-mint-pale">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">
            Shop Lysulin
          </p>
          <h2
            className="font-display font-bold text-forest mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Choose Your Supply
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Free shipping on all orders over $49. 90-day money-back guarantee on every purchase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {products.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl overflow-hidden shadow-lg border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${
                p.primary ? 'border-teal' : 'border-gray-200 bg-white'
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${p.badgeColor}`}>
                {p.badge}
              </div>

              <div className={`p-8 ${p.primary ? 'bg-gradient-to-b from-teal-soft to-white' : 'bg-white'}`}>
                {/* Bottle image */}
                <div className="flex justify-center mb-6">
                  <img src={p.img} alt={p.name} className="h-36 object-contain" />
                </div>

                <h3 className="font-display font-bold text-forest text-2xl mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.subtitle}</p>

                <div className="mb-6">
                  <span className="font-bold text-forest text-3xl">{p.price}</span>
                  <p className="text-sm text-gray-500 mt-1">{p.priceNote}</p>
                </div>

                <ul className="flex flex-col gap-2 mb-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-teal flex-shrink-0 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/shop"
                  className={`block text-center font-bold py-3.5 rounded-full transition-all text-sm ${
                    p.primary
                      ? 'bg-forest text-white hover:bg-forest-mid shadow-lg hover:shadow-xl'
                      : 'bg-forest/10 text-forest hover:bg-forest hover:text-white border border-forest/20'
                  }`}
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-4 shadow-sm border border-gray-100">
            <svg className="w-8 h-8 text-forest flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div className="text-left">
              <p className="font-bold text-forest text-sm">90-Day Money-Back Guarantee</p>
              <p className="text-gray-500 text-xs">Not happy? We'll refund you. No questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
