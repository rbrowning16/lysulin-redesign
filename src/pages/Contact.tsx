export default function Contact() {
  return (
    <div className="pt-16">
      <div className="bg-mint-pale py-16 text-center">
        <h1 className="font-display font-bold text-forest text-4xl mb-3">Contact Us</h1>
        <p className="text-gray-500 max-w-lg mx-auto">We'd love to hear from you.</p>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-bold text-forest text-2xl mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have a question about Lysulin? Our team typically responds within one business day.
          </p>
          <div className="flex flex-col gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <span className="text-teal text-lg">📧</span>
              <span>support@lysulin.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-teal text-lg">📞</span>
              <span>1-800-LYSULIN</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-teal text-lg">⏰</span>
              <span>Mon–Fri, 9am–5pm ET</span>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="bg-forest text-white font-bold py-3.5 rounded-full hover:bg-forest-mid transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
