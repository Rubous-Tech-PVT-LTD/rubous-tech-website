import React, { useState, useEffect } from "react";

const Pricing = () => {
  const [pricingData, setPricingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState('india');

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await fetch('/api/pricing');
        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
        }
        const data = await response.json();
        setPricingData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#f3f4f6] lg:py-32 md:py-20 py-16">
        <div className="max-w-297 container 2xl:max-w-360 mx-auto px-6 text-center">
          <div className="text-gray-500">Loading pricing data...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#f3f4f6] lg:py-32 md:py-20 py-16">
        <div className="max-w-297 container 2xl:max-w-360 mx-auto px-6 text-center">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }

  if (!pricingData || !pricingData.markets || pricingData.markets.length === 0) {
    return (
      <section className="bg-[#f3f4f6] lg:py-32 md:py-20 py-16">
        <div className="max-w-297 container 2xl:max-w-360 mx-auto px-6 text-center">
          <div className="text-gray-500">No pricing data available</div>
        </div>
      </section>
    );
  }

  const currentMarket = pricingData.markets.find(market => market.id === selectedMarket) || pricingData.markets[0];
  const plans = currentMarket?.plans || [];

  return (
    <section id="pricing" className="bg-[#f3f4f6] lg:py-32 md:py-20 py-16">
      <div className="max-w-297 container 2xl:max-w-360 mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Transparent Investment Plans
        </h2>
        <p className="text-gray-500 text-sm mt-5">
          Simple, scalable pricing for businesses of all sizes.
        </p>
        {/* Market Selector Dropdown */}
        <div className="flex justify-center mb-8 mt-5">
          <div className="relative inline-block">
            <select
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="appearance-none px-6 pr-10 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <option value="india" className="text-gray-700">India Pricing</option>
              <option value="international" className="text-gray-700">International Pricing</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>



        {/* Cards */}
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 mt-12 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 bg-white shadow-sm transition duration-300
              ${(plan.name.toLowerCase() === 'growth' && (plan.popular || plan.highlight))
                  ? "border-2 border-blue-600 bg-blue-50 scale-105 shadow-lg hover:scale-110 hover:shadow-2xl"
                  : "hover:shadow-md hover:-translate-y-1"
                }`}
            >
              {/* Most Popular Badge */}
              {plan.highlight || plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Title */}
              <h3 className="text-gray-700 font-medium">{plan.name}</h3>

              {/* Price */}
              <div className="mt-3 mb-4">
                <span className="text-3xl font-bold text-gray-800">
                  {plan.priceLabel}
                </span>
                <span className="text-gray-500 text-sm">
                  {plan.currency === 'INR' ? '/project' : '/project'}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {plan.features && plan.features.slice(0, 3).map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-2 rounded-lg text-sm transition ${plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  }`}
                onClick={() => {
                  if (plan.name.toLowerCase() === 'starter') {
                    window.location.href = 'mailto:info@rubous-tech.com?subject=Starter%20Plan%20Inquiry';
                  } else if (plan.name.toLowerCase() === 'premium') {
                    window.location.href = 'mailto:sales@rubous-tech.com?subject=Premium%20Plan%20Inquiry';
                  } else {
                    window.location.href = '/contact';
                  }
                }}
              >
                {plan.name === 'Premium' ? 'Contact Sales' : plan.name === 'Starter' ? 'Get Started' : 'Get Started Now'}
              </button>
            </div>

          ))}
        </div>
        {currentMarket.note && (
          <p className="text-gray-500 text-sm mt-10 mb-8">
            {currentMarket.note}
          </p>)}

      </div>

    </section>
  );
}

export default Pricing;