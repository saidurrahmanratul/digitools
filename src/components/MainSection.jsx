import { useState } from 'react'
import products from '../products.json'
import ProductCard from './ProductCard'
import Cart from './Cart'

export default function MainSection({ cartItems, onAddToCart, onRemove, onCheckout }) {
  const [activeTab, setActiveTab] = useState('products')

  return (
    <section id="products" className="py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Premium Digital Tools</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          <div className="flex justify-center gap-1 mt-7 bg-gray-100 rounded-full p-1 w-fit mx-auto">
            <button
              onClick={() => setActiveTab('products')}
              className={`btn btn-sm rounded-full px-6 border-none font-semibold transition-all ${activeTab === 'products' ? 'bg-violet-600 text-white shadow' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`btn btn-sm rounded-full px-6 border-none font-semibold transition-all ${activeTab === 'cart' ? 'bg-violet-600 text-white shadow' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                inCart={cartItems.some(i => i.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <Cart cartItems={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
        )}
      </div>
    </section>
  )
}
