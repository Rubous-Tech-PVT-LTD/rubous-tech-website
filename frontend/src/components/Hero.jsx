import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: AI-Powered Inquiry Handling
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            Automate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-navy">Bookings</span> & <br />
            Reclaim Your Time
          </h1>
          
          <p className="text-lg text-navy/70 mb-10 max-w-lg leading-relaxed font-medium">
            Rubous Tech transforms your scheduling nightmare into a seamless, 
            autonomous workflow. Stop managing calendars and start scaling 
            your business with AI-driven booking automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary text-lg group">
              Get Started Free 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn btn-outline text-lg">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-navy/60 text-sm font-medium">
              <CheckCircle size={18} className="text-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2 text-navy/60 text-sm font-medium">
              <CheckCircle size={18} className="text-primary" />
              14-day free trial
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
            <img 
              src="/hero.png" 
              alt="Rubous Tech Dashboard" 
              className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass-card p-6 hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <CheckCircle className="text-navy" />
              </div>
              <div>
                <p className="text-sm font-bold">120+ Bookings</p>
                <p className="text-xs text-navy/60">Automated this week</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

