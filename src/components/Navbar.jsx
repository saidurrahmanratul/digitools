import { ShoppingCart } from 'lucide-react'

export default function Navbar({ cartCount }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar bg-white shadow-sm px-6 lg:px-16 sticky top-0 z-50">
      <div className="navbar-start">
        <span onClick={() => scrollTo('banner')} className="text-2xl font-bold text-violet-600 cursor-pointer">DigiTools</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 text-gray-600 font-medium">
          <li><a onClick={() => scrollTo('products')} className="hover:text-violet-600 cursor-pointer">Products</a></li>
          <li><a onClick={() => scrollTo('features')} className="hover:text-violet-600 cursor-pointer">Features</a></li>
          <li><a onClick={() => scrollTo('pricing')} className="hover:text-violet-600 cursor-pointer">Pricing</a></li>
          <li><a onClick={() => scrollTo('testimonials')} className="hover:text-violet-600 cursor-pointer">Testimonials</a></li>
          <li><a onClick={() => scrollTo('faq')} className="hover:text-violet-600 cursor-pointer">FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="indicator cursor-pointer" onClick={() => scrollTo('products')}>
          <ShoppingCart className="text-gray-600" size={22} />
          {cartCount > 0 && (
            <span className="badge badge-xs badge-primary indicator-item bg-violet-600 border-none text-white">{cartCount}</span>
          )}
        </div>
        <a className="text-gray-600 font-medium hover:text-violet-600 hidden sm:block cursor-pointer">Login</a>
        <button onClick={() => scrollTo('products')} className="btn btn-sm rounded-full bg-violet-600 border-none hover:bg-violet-700 text-white px-5">
          Get Started
        </button>
      </div>
    </nav>
  )
}
