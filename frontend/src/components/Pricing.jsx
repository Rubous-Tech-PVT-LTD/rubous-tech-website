import React, { useEffect, useMemo, useState } from 'react';
import { Check, Zap, Loader2, AlertCircle, Globe, MapPin } from 'lucide-react';

const PricingCard = ({ name, priceLabel, bestFor, popular, delay }) => (
  <div 
    className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col fade-up ${popular ? 'bg-navy text-white shadow-2xl scale-105 z-10 border-4 border-primary' : 'glass-card text-slate-100 border border-primary/10 hover:shadow-xl'}`}
    style={{ animationDelay: delay }}
  >
    {popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">{priceLabel}</span>
    </div>
    <p className={`text-sm mb-8 font-medium ${popular ? 'text-white/70' : 'text-navy/60'}`}>
      {bestFor}
    </p>
    
    <div className="flex-grow space-y-4 mb-10">
      <div className="flex items-start gap-3">
        <div className={`mt-1 p-0.5 rounded-full ${popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
          <Check size={14} />
        </div>
        <span className="text-sm font-medium">Custom quote based on project scope</span>
      </div>
      <div className="flex items-start gap-3">
        <div className={`mt-1 p-0.5 rounded-full ${popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
          <Check size={14} />
        </div>
        <span className="text-sm font-medium">Discovery call and roadmap included</span>
      </div>
    </div>
    
    <button className={`btn w-full font-bold ${popular ? 'btn-primary' : 'btn-outline border-navy text-navy hover:bg-navy hover:text-white'}`}>
      Choose Plan
    </button>
  </div>
);

const Pricing = () => {
  const [markets, setMarkets] = useState([]);
  const [selectedMarketId, setSelectedMarketId] = useState('india');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        setLoading(true);
        setError('');

        // Use relative path to leverage Vercel proxy in production
        const response = await fetch('/api/pricing');
        const payload = await response.json();

        if (!response.ok || !payload.success) {
          throw new Error(payload.message || 'Failed to fetch pricing');
        }

        const marketList = Array.isArray(payload.data?.markets) ? payload.data.markets : [];
        setMarkets(marketList);

        if (marketList.length > 0) {
          // Keep preference if it still exists, else fall back to the first market
          setSelectedMarketId((currentSelectedMarketId) =>
            marketList.find(m => m.id === currentSelectedMarketId)
              ? currentSelectedMarketId
              : marketList[0].id
          );
        }
      } catch (fetchError) {
        setError(fetchError.message || 'Failed to fetch pricing');
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  const selectedMarket = useMemo(
    () => markets.find((market) => market.id === selectedMarketId) || markets[0],
    [markets, selectedMarketId]
  );

  return (
    <section id="pricing" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-navy/60 font-medium mb-10">
            No hidden fees. Choose the plan that fits your current business scale.
          </p>
        </div>

        {loading ? (
          <div className="max-w-6xl mx-auto py-16 flex items-center justify-center gap-3 text-navy/60">
            <Loader2 size={20} className="animate-spin" />
            <span className="font-semibold text-white">Loading pricing...</span>
          </div>
        ) : error ? (
          <div className="max-w-3xl mx-auto p-5 rounded-2xl border border-red-200 bg-red-50 text-red-700 flex items-center gap-3">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        ) : selectedMarket ? (
          <>
            <div className="flex justify-center mb-8">
              <div className="inline-flex gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm">
                {markets.map((market) => (
                  <button
                    key={market.id}
                    type="button"
                    onClick={() => setSelectedMarketId(market.id)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${selectedMarketId === market.id ? 'bg-primary text-white shadow-lg' : 'text-slate-300 hover:text-white'}`}
                  >
                    {market.id === 'india' ? <MapPin size={16}/> : <Globe size={16}/>}
                    {market.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                Currency: {selectedMarket.currency}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {selectedMarket.plans.map((plan, index) => (
                <PricingCard key={plan.id || index} {...plan} delay={`${index * 0.1}s`} />
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-3xl mx-auto p-5 rounded-2xl border border-white/10 bg-white/5 text-slate-400 text-center">
            No pricing data found.
          </div>
        )}

        <div className="mt-20 text-center fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-4 rounded-3xl border-primary/20">
            <div className="flex items-center gap-2 font-bold px-4 py-1.5 bg-accent text-navy rounded-full text-xs">
              <Zap size={14} className="fill-current" />
              SPECIAL OFFER
            </div>
            <p className="font-semibold text-white">
              Need more? <span className="text-primary underline cursor-pointer">Get a custom quote</span> for high-volume booking automation.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center fade-up">
          <p className="text-sm text-slate-500 font-medium max-w-2xl mx-auto">
            Pricing may vary depending on project scope and requirements. Final cost will be confirmed after technical discovery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
