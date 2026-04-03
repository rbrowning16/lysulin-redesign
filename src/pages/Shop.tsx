import Products from '../components/Products'

export default function Shop() {
  return (
    <div className="pt-16">
      <div className="bg-mint-pale py-16 text-center">
        <h1 className="font-display font-bold text-forest text-4xl mb-3">Shop Lysulin</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Free shipping on orders over $49. 90-day money-back guarantee.
        </p>
      </div>
      <Products />
    </div>
  )
}
