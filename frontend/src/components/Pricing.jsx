import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    desc: "/mo",
    features: [
      "3 Core Automations",
      "Email Support",
      "Basic CRM Integration",
    ],
    button: "Choose Plan",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$999",
    desc: "/mo",
    features: [
      "Unlimited Automations",
      "AI Chatbot Training",
      "Priority 24/7 Support",
      "Monthly Performance Audit",
    ],
    button: "Get Started Now",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "",
    features: [
      "Dedicated Architect",
      "Private Infrastructure",
      "Custom API Development",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#f3f4f6] lg:py-32 md:py-20 py-16">
      <div className="max-w-297 mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Transparent Investment Plans
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Simple, scalable pricing for businesses of all sizes.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 mt-12 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 bg-white shadow-sm transition duration-300
              ${
                plan.highlight
                  ? "border-2 border-blue-600 scale-105 shadow-lg hover:scale-110 hover:shadow-2xl"
                  : "hover:shadow-md hover:-translate-y-1"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Title */}
              <h3 className="text-gray-700 font-medium">{plan.name}</h3>

              {/* Price */}
              <div className="mt-3 mb-4">
                <span className="text-3xl font-bold text-gray-800">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm">
                  {plan.desc}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-2 rounded-lg text-sm transition
                ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;