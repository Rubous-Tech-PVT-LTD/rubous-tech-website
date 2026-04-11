import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Brain, Clock, BarChart3, Shield, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-8 hover:shadow-2xl transition-all duration-300 group"
  >
    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
      <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-navy/60 leading-relaxed font-medium">
      {description}
    </p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Automated Scheduling',
      description: 'Your business never sleeps. Our AI handles bookings around the clock, ensuring you never miss a client.',
      delay: 0
    },
    {
      icon: Brain,
      title: 'AI Inquiry Handling',
      description: 'Intelligent responses to common questions, qualifying leads before they ever touch your calendar.',
      delay: 0.1
    },
    {
      icon: Calendar,
      title: 'Seamless Calendar Sync',
      description: 'Bi-directional sync with Google, Outlook, and iCal. Say goodbye to double bookings forever.',
      delay: 0.2
    },
    {
      icon: BarChart3,
      title: 'Deep Analytics',
      description: 'Visualize your booking trends and conversion rates with high-fidelity, actionable reporting.',
      delay: 0.3
    },
    {
      icon: Zap,
      title: 'Instant Integrations',
      description: 'Connect with over 2,000+ apps via Zapier, Webflow, and our native REST API.',
      delay: 0.4
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 Type II compliant. Your and your clients\' data is encrypted and protected at every step.',
      delay: 0.5
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#236CF1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Features</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Automation to Scale Your Business</h2>
          <p className="text-lg text-navy/60 font-medium">
            Everything you need to automate your booking workflow and focus on what truly matters: your clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
