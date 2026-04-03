import { Link } from 'react-router-dom'

export default function Subscribe() {
  return (
    <div className="pt-16">
      <div className="bg-mint-pale py-16 text-center">
        <h1 className="font-display font-bold text-forest text-4xl mb-3">Subscribe & Save</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Never run out. Save 15% every month. Cancel anytime.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-forest p-8 text-white text-center">
            <p className="font-semibold text-teal-light text-sm uppercase tracking-widest mb-2">Subscription Plan</p>
            <h2 className="font-display font-bold text-3xl mb-1">Lysulin Monthly</h2>
            <div className="flex items-baseline justify-center gap-2 mt-4">
              <span className="text-5xl font-bold">$38.95</span>
              <span className="text-white/70">/month</span>
            </div>
            <p className="text-teal-light text-sm mt-2">Save $6.00 vs. one-time purchase</p>
          </div>
          <div className="p-8">
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              {[
                '60 capsules delivered monthly',
                'Free standard shipping',
                '15% off every order',
                'Skip or cancel anytime',
                'Priority customer support',
                '90-day money-back guarantee',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-teal flex-shrink-0 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/shop"
              className="block text-center bg-forest text-white font-bold py-4 rounded-full hover:bg-forest-mid transition-colors shadow-lg mb-4"
            >
              Start My Subscription
            </Link>
            <p className="text-center text-gray-400 text-xs">
              No commitment. Cancel or pause anytime before your next shipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
