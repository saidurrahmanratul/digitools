const steps = [
  {
    icon: '/assets/user.png',
    num: '01',
    title: 'Create Account',
    desc: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    icon: '/assets/package.png',
    num: '02',
    title: 'Choose Products',
    desc: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    icon: '/assets/rocket.png',
    num: '03',
    title: 'Start Creating',
    desc: 'Download and start using your premium tools immediately.',
  },
]

export default function Steps() {
  return (
    <section id="features" className="py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-3 text-sm">Start using premium digital tools in minutes, not hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-violet-50 flex items-center justify-center">
                  <img src={step.icon} alt={step.title} className="w-9 h-9 object-contain" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center font-bold">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
