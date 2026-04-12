import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Calendar, 
  MessageCircle, 
  LayoutDashboard, 
  Globe, 
  Zap,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Automation",
    tagline: "Never miss a customer again with AI-powered chat automation",
    features: ["Website + WhatsApp chatbot", "Auto replies 24/7", "Lead capture automatically"],
    color: "blue"
  },
  {
    icon: Calendar,
    title: "Booking Automation System",
    tagline: "Convert messages into confirmed bookings instantly",
    features: ["Customer → Message → Booking auto-create", "Time slot selection", "Admin dashboard"],
    color: "purple"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    tagline: "Turn WhatsApp into your 24/7 sales machine",
    features: ["Auto replies", "Follow-ups", "Broadcast messages"],
    color: "green"
  },
  {
    icon: LayoutDashboard,
    title: "Lead Management Dashboard",
    tagline: "Manage and track every lead from one powerful dashboard",
    features: ["All leads in one place", "Status tracking", "Customer history"],
    color: "orange"
  },
  {
    icon: Globe,
    title: "Website & App Development",
    tagline: "Modern websites and apps built for growth",
    features: ["SaaS websites", "Business apps", "Custom dashboards"],
    color: "indigo"
  },
  {
    icon: Zap,
    title: "Business Automation (Core 🔥)",
    tagline: "Automate your business and save hours every day",
    features: ["Manual work → automated", "CRM + workflows", "Integration systems"],
    color: "yellow"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Core <br />
            <span className="text-primary">Automation Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy/60 font-medium"
          >
            We provide end-to-end automation solutions designed to help 
            modern businesses scale without the manual overhead.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-10 group hover:border-primary/30 relative overflow-hidden flex flex-col h-full ${service.title.includes('Core') ? 'ring-2 ring-yellow-400/50' : ''}`}
            >
              {/* Decorative Glow */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 bg-${service.color}-500/10 opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-${service.color}-500/15 flex items-center justify-center mb-8 text-${service.color}-600 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white/20`}>
                <service.icon size={28} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-primary font-bold text-sm mb-6 leading-relaxed">
                “{service.tagline}”
              </p>
              
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-navy/60 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
