import { Link } from 'react-router-dom'

const links = {
  Product: [
    { label: 'Shop', to: '/shop' },
    { label: 'Subscribe & Save', to: '/subscribe' },
    { label: 'How It Works', to: '/#how-it-works' },
    { label: 'Ingredients', to: '/about' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Blog', to: '/blog' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Refund Policy', to: '/refunds' },
    { label: 'Accessibility', to: '/accessibility' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-display font-bold text-xl">Lysulin</span>
            </div>
            <p className="text-mint/70 text-sm leading-relaxed mb-6">
              Science-backed blood sugar support for a healthier, more energetic life.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'twitter'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal transition-colors flex items-center justify-center"
                  aria-label={platform}
                >
                  <span className="text-xs font-bold uppercase">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-mint/80 mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-mint/60 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="max-w-md">
            <h4 className="font-display font-bold text-lg mb-2">Stay Informed</h4>
            <p className="text-mint/60 text-sm mb-4">
              Get research updates, health tips, and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-teal transition-colors"
              />
              <button
                type="submit"
                className="bg-teal hover:bg-teal-light text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-mint/50 text-xs">
          <p>© {new Date().getFullYear()} Lysulin. All rights reserved.</p>
          <p className="max-w-lg text-center md:text-right">
            * These statements have not been evaluated by the Food and Drug Administration. This
            product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}
