import React from 'react';
import { Check, Zap } from 'lucide-react';

const PricingCard = ({ tier, price, description, features, highlighted, delay }) => (
  <div 
    className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col fade-up ${highlighted ? 'bg-navy text-white shadow-2xl scale-105 z-10 border-4 border-primary' : 'bg-white text-navy border border-navy/10 hover:shadow-xl'}`}
    style={{ animationDelay: delay }}
  >
    {highlighted && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    
    <h3 className="text-xl font-bold mb-2">{tier}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">${price}</span>
      <span className={highlighted ? 'text-white/60' : 'text-navy/60'}>/month</span>
    </div>
    <p className={`text-sm mb-8 font-medium ${highlighted ? 'text-white/70' : 'text-navy/60'}`}>
      {description}
    </p>
    
    <div className="flex-grow space-y-4 mb-10">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className={`mt-1 p-0.5 rounded-full ${highlighted ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
            <Check size={14} />
          </div>
          <span className="text-sm font-medium">{feature}</span>
        </div>
      ))}
    </div>
    
    <button className={`btn w-full font-bold ${highlighted ? 'btn-primary' : 'btn-outline border-navy text-navy hover:bg-navy hover:text-white'}`}>
      Choose Plan
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      tier: 'Starter',
      price: '29',
      description: 'Perfect for freelancers and small business owners starting their journey.',
      features: [
        'Up to 100 bookings/mo',
        'Email scheduling',
        'Google Calendar integration',
        'Standard dashboard',
        'Email support'
      ],
      highlighted: false,
      delay: '0s'
    },
    {
      tier: 'Pro',
      price: '79',
      description: 'The ultimate tool for growing teams who need advanced automation.',
      features: [
        'Unlimited bookings',
        'AI Inquiry Handling',
        'Outlook & iCal Sync',
        'Advanced Analytics',
        'Priority 24/7 support',
        'Custom branding'
      ],
      highlighted: true,
      delay: '0.1s'
    },
    {
      tier: 'Enterprise',
      price: '199',
      description: 'Comprehensive features for large-scale operations and high-volume firms.',
      features: [
        'Multiple sub-accounts',
        'Custom API access',
        'Dedicated account manager',
        'SLA & Security audit',
        'On-site training',
        'Custom AI training'
      ],
      highlighted: false,
      delay: '0.2s'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-navy/60 font-medium">
            No hidden fees. Scale your booking automation as your business grows.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-20 text-center fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-4 rounded-3xl border-primary/20">
            <div className="flex items-center gap-2 font-bold px-4 py-1.5 bg-accent text-navy rounded-full text-xs">
              <Zap size={14} className="fill-current" />
              SPECIAL OFFER
            </div>
            <p className="font-semibold text-navy">
              Need more? <span className="text-primary underline cursor-pointer">Get a custom quote</span> for high-volume booking automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
