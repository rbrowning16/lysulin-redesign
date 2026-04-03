import { useState } from 'react'

const faqs = [
  {
    q: 'How does Lysulin work?',
    a: 'Lysulin works through three key mechanisms: (1) Lysine competes with glucose at protein binding sites, reducing glycation; (2) Vitamin C competes with glucose at cellular receptors, reducing uptake; (3) Zinc, Thiamine, and Chromium enhance insulin function and glucose metabolism.',
  },
  {
    q: 'When will I see results?',
    a: 'Many customers report improved energy and fewer sugar cravings within 2–4 weeks. Measurable changes in fasting blood glucose or A1C typically appear within 60–90 days of consistent daily use.',
  },
  {
    q: 'Is Lysulin safe to take with my medication?',
    a: 'Lysulin contains well-tolerated nutrients at clinically studied doses. However, if you take diabetes medications or other prescriptions, please consult your healthcare provider before starting Lysulin, as improved blood sugar control may require medication adjustments.',
  },
  {
    q: 'How many capsules do I take per day?',
    a: 'The recommended dose is 2 capsules twice daily (4 capsules total), taken with meals. Each bottle contains 60 capsules — a 15-day supply at full dosage, or 30-day supply at 2 capsules/day.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 90-day, no-questions-asked money-back guarantee. If you\'re not satisfied for any reason, contact us within 90 days of purchase for a full refund.',
  },
  {
    q: 'Is Lysulin suitable for vegetarians/vegans?',
    a: 'Yes. Lysulin capsules are made from vegetable cellulose and contain no animal-derived ingredients.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-forest group-hover:text-teal transition-colors">{q}</span>
        <svg
          className={`w-5 h-5 text-teal flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed text-sm">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="pt-16">
      <div className="bg-mint-pale py-16 text-center">
        <h1 className="font-display font-bold text-forest text-4xl mb-3">Frequently Asked Questions</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to know about Lysulin.
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </div>
  )
}
