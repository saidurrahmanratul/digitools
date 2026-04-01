export default function CallToAction() {
  return (
    <section className="bg-violet-600 py-20 px-6 text-center text-white">
      <h2 className="text-3xl lg:text-4xl font-extrabold">Ready To Transform Your Workflow?</h2>
      <p className="text-violet-200 mt-3 max-w-lg mx-auto text-sm">
        Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
      </p>
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <button className="btn bg-white text-violet-600 hover:bg-violet-50 border-none rounded-full px-7 font-semibold">
          Explore Products
        </button>
        <button className="btn bg-transparent border-2 border-white text-white hover:bg-violet-700 hover:border-white rounded-full px-7 font-semibold">
          View Pricing
        </button>
      </div>
      <p className="text-violet-300 text-xs mt-6">14-day free trial • No credit card required • Cancel anytime</p>
    </section>
  )
}
