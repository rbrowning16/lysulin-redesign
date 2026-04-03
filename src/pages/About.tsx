export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-mint-pale py-16 text-center">
        <h1 className="font-display font-bold text-forest text-4xl mb-3">About Lysulin</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          A science-first approach to blood sugar health.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg">
          <h2 className="font-display font-bold text-forest text-3xl mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lysulin was founded by Dr. John Burd, a biochemist who spent decades studying the
            molecular mechanisms of blood sugar dysfunction. After witnessing family members struggle
            with the consequences of unmanaged glucose levels, he set out to create a solution
            backed by rigorous science — not marketing hype.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The result is Lysulin: a patented, clinically researched formula that combines five
            synergistic nutrients at doses proven effective in peer-reviewed studies. Every batch is
            manufactured in an FDA-registered, GMP-certified facility right here in the United States.
          </p>
          <h2 className="font-display font-bold text-forest text-3xl mb-6 mt-12">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We believe everyone deserves access to effective, research-validated tools for metabolic
            health — not vague promises or underdosed "proprietary blends." Lysulin is our commitment
            to transparency, efficacy, and your long-term wellbeing.
          </p>
        </div>
      </div>
    </div>
  )
}
