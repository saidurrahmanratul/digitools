import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    sub: 'Perfect for getting started',
    price: 0,
    period: 'Month',
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    sub: 'Best for professionals',
    price: 29,
    period: 'Month',
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud Sync', 'Advanced analytics'],
    cta: 'Start Pro Trial',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    sub: 'For teams and businesses',
    price: 99,
    period: 'Month',
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-3 text-sm">Choose the plan that's right for you. Upgrade or downgrade any time.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 text-left relative ${plan.highlight ? 'bg-violet-600 text-white shadow-2xl' : 'bg-white border border-gray-100 shadow-sm'}`}
            >
              {plan.badge && (
                <span className="badge bg-orange-400 text-white border-none absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-3 text-xs font-semibold whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className={`text-sm mt-1 ${plan.highlight ? 'text-violet-200' : 'text-gray-400'}`}>{plan.sub}</p>
              <div className="mt-5 mb-6">
                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>${plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-violet-200' : 'text-gray-400'}`}>/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-7">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-violet-100' : 'text-gray-600'}`}>
                    <Check size={14} className={plan.highlight ? 'text-white shrink-0' : 'text-violet-500 shrink-0'} /> {f}
                  </li>
                ))}
              </ul>
              <button className={`btn w-full rounded-full border-none font-semibold ${plan.highlight ? 'bg-white text-violet-600 hover:bg-violet-50' : 'bg-violet-600 text-white hover:bg-violet-700'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
