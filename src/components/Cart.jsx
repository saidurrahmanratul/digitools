import { toast } from 'react-toastify'

export default function Cart({ cartItems, onRemove, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handleRemove = (item) => {
    onRemove(item.id)
    toast.info(`${item.name} removed from cart.`)
  }

  const handleCheckout = () => {
    onCheckout()
    toast.success('Checkout successful! Cart cleared.')
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 py-16 text-base">Your cart is empty. Add some products!</p>
        ) : (
          <>
            <div className="space-y-3">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <img src={`/assets/${item.icon}`} alt={item.name} className="w-12 h-12 rounded-xl object-contain bg-white p-1" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(item)}
                    className="text-red-500 font-semibold hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 pt-5 border-t border-gray-100">
              <span className="text-gray-500 text-base">Total:</span>
              <span className="text-2xl font-extrabold text-gray-900">${total}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full text-base font-semibold h-12"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  )
}
