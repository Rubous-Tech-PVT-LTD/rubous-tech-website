import React, { useState, useEffect } from 'react';
import { Check, Zap, Globe, MapPin } from 'lucide-react';

const PricingCard = ({ plan, currency, delay }) => (
  <div 
    className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col fade-up ${plan.popular ? 'bg-navy text-slate-100 shadow-2xl scale-105 z-10 border-4 border-primary' : 'glass-card text-slate-100 border border-primary/10 hover:shadow-xl'}`}
    style={{ animationDelay: delay }}
  >
    {plan.popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    
    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold">{plan.priceLabel}</span>
      {!plan.priceLabel.includes('/') && <span className={plan.popular ? 'text-white/60' : 'text-navy/60'}> /project</span>}
    </div>
    <p className={`text-sm mb-8 font-medium ${plan.popular ? 'text-white/70' : 'text-navy/60'}`}>
      {plan.bestFor}
    </p>
    
    <div className="flex-grow space-y-4 mb-10">
      {/* Dynamic features based on plan type if we had them, otherwise use defaults */}
      <div className="flex items-start gap-3">
        <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
          <Check size={14} />
        </div>
        <span className="text-sm font-medium">Full AI Customization</span>
      </div>
      <div className="flex items-start gap-3">
        <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
          <Check size={14} />
        </div>
        <span className="text-sm font-medium">Priority Support</span>
      </div>
      <div className="flex items-start gap-3">
        <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
          <Check size={14} />
        </div>
        <span className="text-sm font-medium">Scalable Infrastructure</span>
      </div>
    </div>
    
    <button className={`btn w-full font-bold ${plan.popular ? 'btn-primary' : 'btn-outline border-navy text-navy hover:bg-navy hover:text-white'}`}>
      Get Quote
    </button>
  </div>
);

const Pricing = () => {
  const [market, setMarket] = useState('international');
  const [pricingData, setPricingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await fetch('/api/pricing');
        const result = await response.json();
        if (result.success) {
          setPricingData(result.data);
        }
      } catch (error) {
        console.error('Error fetching pricing:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  const activeMarket = pricingData?.markets?.find(m => m.id === market);

  return (
    <section id="pricing" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-navy/60 font-medium mb-10">
            No hidden fees. Choose the plan that fits your current business scale.
          </p>

          {/* Market Toggle */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <button 
              onClick={() => setMarket('india')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all ${market === 'india' ? 'bg-primary text-white shadow-lg' : 'glass-card text-slate-300 border border-white/10'}`}
            >
              <MapPin size={18} />
              India
            </button>
            <button 
              onClick={() => setMarket('international')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all ${market === 'international' ? 'bg-primary text-white shadow-lg' : 'glass-card text-slate-300 border border-white/10'}`}
            >
              <Globe size={18} />
              International
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activeMarket?.plans.map((plan, index) => (
              <PricingCard 
                key={plan.id} 
                plan={plan} 
                currency={activeMarket.currency}
                delay={`${index * 0.1}s`} 
              />
            ))}
          </div>
        )}

        {/* Note / Disclaimer */}
        <div className="mt-20 text-center fade-up">
          <p className="text-sm text-navy/50 font-medium max-w-2xl mx-auto">
            {pricingData?.note || "Pricing may vary depending on project scope and requirements. Final cost will be confirmed after technical discovery."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
