import Link from "next/link";

const plans = [
  {
    name: "FREE",
    price: "$0",
    description: "Perfect for casual users",
    features: [
      "5 conversions/day",
      "10MB uploads",
      "Basic formats",
      "Standard queue",
      "Watermarked exports"
    ],
    button: "Start Free",
    highlighted: false
  },

  {
    name: "PRO",
    price: "$12/mo",
    description: "Best for professionals",
    features: [
      "Unlimited conversions",
      "500MB uploads",
      "OCR support",
      "Merge & split PDFs",
      "Compress PDFs",
      "Priority processing",
      "AI conversion tools",
      "No watermark"
    ],
    button: "Upgrade to Pro",
    highlighted: true
  },

  {
    name: "BUSINESS",
    price: "$49/mo",
    description: "Built for teams & companies",
    features: [
      "Everything in Pro",
      "Team workspace",
      "Batch conversions",
      "API access",
      "Advanced analytics",
      "Shared cloud storage",
      "Faster infrastructure"
    ],
    button: "Choose Business",
    highlighted: false
  },

  {
    name: "ENTERPRISE",
    price: "Custom",
    description: "For large-scale organizations",
    features: [
      "Unlimited usage",
      "Dedicated infrastructure",
      "Custom integrations",
      "Priority SLA support",
      "Enterprise-grade security",
      "Dedicated account manager"
    ],
    button: "Contact Sales",
    highlighted: false
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h1
            className="
              text-5xl md:text-7xl
              font-black
              tracking-tight
              mb-6
              bg-gradient-to-r
              from-cyan-400
              via-indigo-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            Pricing Plans
          </h1>

          <p
            className="
              text-zinc-400
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Choose the perfect plan for your document conversion needs.
          </p>
        </div>

        {/* PRICING GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                rounded-3xl
                border
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                ${
                  plan.highlighted
                    ? "border-indigo-500 bg-indigo-500/10 shadow-indigo-500/20"
                    : "border-white/10 bg-white/5"
                }
              `}
            >
              {plan.highlighted && (
                <div
                  className="
                    absolute
                    top-4 right-4
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-indigo-500
                    text-white
                    font-semibold
                  "
                >
                  MOST POPULAR
                </div>
              )}

              <h2 className="text-3xl font-black mb-3">
                {plan.name}
              </h2>

              <div className="text-5xl font-black mb-4">
                {plan.price}
              </div>

              <p className="text-zinc-400 mb-8">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex items-center gap-3
                      text-zinc-300
                    "
                  >
                    <span className="text-cyan-400">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/dashboard"
                className={`
                  block
                  w-full
                  text-center
                  py-3
                  rounded-2xl
                  font-semibold
                  transition
                  ${
                    plan.highlighted
                      ? "bg-indigo-600 hover:bg-indigo-500"
                      : "bg-white/10 hover:bg-white/20"
                  }
                `}
              >
                {plan.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}