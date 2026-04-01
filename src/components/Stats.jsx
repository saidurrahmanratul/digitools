export default function Stats() {
  return (
    <section className="bg-violet-600 py-14 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center text-white divide-x divide-violet-400">
        <div className="px-4">
          <p className="text-4xl lg:text-5xl font-extrabold">50K+</p>
          <p className="text-violet-200 mt-2 text-sm">Active Users</p>
        </div>
        <div className="px-4">
          <p className="text-4xl lg:text-5xl font-extrabold">200+</p>
          <p className="text-violet-200 mt-2 text-sm">Premium Tools</p>
        </div>
        <div className="px-4">
          <p className="text-4xl lg:text-5xl font-extrabold">4.9</p>
          <p className="text-violet-200 mt-2 text-sm">Rating</p>
        </div>
      </div>
    </section>
  )
}
