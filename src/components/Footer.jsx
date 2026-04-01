export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-14 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="text-2xl font-bold text-white">DigiTools</span>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            {['Features', 'Pricing', 'Templates', 'Integrations'].map(l => (
              <li key={l}><a className="hover:text-white cursor-pointer transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {['About', 'Blog', 'Careers', 'Press'].map(l => (
              <li key={l}><a className="hover:text-white cursor-pointer transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            {['Documentation', 'Help Center', 'Community', 'Contact'].map(l => (
              <li key={l}><a className="hover:text-white cursor-pointer transition-colors">{l}</a></li>
            ))}
          </ul>
          <h4 className="text-white font-semibold mt-6 mb-3">Social Links</h4>
          <div className="flex gap-3">
            {[
              { label: 'f', title: 'Facebook' },
              { label: 'in', title: 'LinkedIn' },
              { label: 'x', title: 'Twitter' },
            ].map(s => (
              <div
                key={s.label}
                title={s.title}
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white hover:bg-violet-600 cursor-pointer transition-colors"
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between text-xs gap-2">
        <p>©2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-white cursor-pointer">Privacy Policy</a>
          <a className="hover:text-white cursor-pointer">Terms of Service</a>
          <a className="hover:text-white cursor-pointer">Contact</a>
        </div>
      </div>
    </footer>
  )
}
