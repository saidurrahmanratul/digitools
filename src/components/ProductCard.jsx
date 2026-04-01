import { Check } from 'lucide-react'
import { toast } from 'react-toastify'

const tagColors = {
  popular: 'bg-violet-100 text-violet-600',
  new: 'bg-blue-100 text-blue-600',
  'best seller': 'bg-orange-100 text-orange-600',
}

export default function ProductCard({ product, onAddToCart, inCart }) {
  const handleBuy = () => {
    if (inCart) return
    onAddToCart(product)
    toast.success(`${product.name} added to cart!`)
  }

  const periodLabel =
    product.period === 'monthly' ? '/mo' :
    product.period === 'yearly' ? '/yr' : ' One-Time'

  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative rounded-2xl">
      <div className="card-body p-6">
        <span className={`badge text-xs font-semibold absolute top-4 right-4 border-none px-3 py-2 ${tagColors[product.tagType] || 'bg-gray-100 text-gray-600'}`}>
          {product.tag}
        </span>
        <img src={`/assets/${product.icon}`} alt={product.name} className="w-12 h-12 mb-3 object-contain" />
        <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
        <div className="mt-3">
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <span className="text-gray-400 text-sm">{periodLabel}</span>
        </div>
        <ul className="mt-3 space-y-2">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <Check size={14} className="text-violet-500 shrink-0" /> {f}
            </li>
          ))}
        </ul>
        <button
          onClick={handleBuy}
          className={`btn w-full mt-5 rounded-full border-none text-white font-semibold ${inCart ? 'bg-green-500 cursor-default' : 'bg-violet-600 hover:bg-violet-700'}`}
        >
          {inCart ? 'Added to Cart ✓' : 'Buy Now'}
        </button>
      </div>
    </div>
  )
}
