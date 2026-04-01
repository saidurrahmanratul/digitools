export default function Banner() {
  return (
    <section id="banner" className="bg-white px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-violet-100">
            ✨ New: AI-Powered Tools Available
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Supercharge Your<br />Digital Workflow
          </h1>
          <p className="text-gray-500 mb-2 text-base">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <p className="text-gray-500 mb-8 text-base">Explore Products</p>
          <div className="flex gap-4 flex-wrap">
            <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-6">
              Explore Products
            </button>
            <button className="btn bg-white border border-gray-200 text-gray-700 rounded-full px-6 gap-2 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">
              <img src="/assets/Play.png" alt="play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/banner.png" alt="Banner" className="max-w-sm lg:max-w-md w-full rounded-2xl" />
        </div>
      </div>
    </section>
  )
}
