import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import MainSection from './components/MainSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prev => prev.some(i => i.id === product.id) ? prev : [...prev, product])
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }

  const clearCart = () => setCartItems([])

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection
        cartItems={cartItems}
        onAddToCart={addToCart}
        onRemove={removeFromCart}
        onCheckout={clearCart}
      />
      <Steps />
      <Pricing />
      <CallToAction />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  )
}
