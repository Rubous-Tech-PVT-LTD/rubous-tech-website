import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BookingForm from '../components/BookingForm';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import AIProcessingMarquee from '../components/AIProcessingMarquee';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AIProcessingMarquee />
        <Features />
        
        {/* Booking Section */}
        <section id="book" className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Automation</h2>
              <p className="text-lg text-slate-300 font-medium">
                Select a time below to see our AI booking system in action. 
                Experience how seamless your calendar management could be.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <BookingForm />
            </motion.div>
          </div>
        </section>

        {/* Simple Trust Section */}
        <section className="py-20 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-10">Trusted by modern firms worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-bold">TechFlow</span>
              <span className="text-2xl font-bold">NexusAI</span>
              <span className="text-2xl font-bold">CloudScale</span>
              <span className="text-2xl font-bold">Vertex</span>
            </div>
          </div>
        </section>

        <Pricing />
        
        {/* CTA Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-navy rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Automate Your Bookings?</h2>
                <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                  Join thousands of businesses that have scaled their operations 
                  by reclaiming over 20 hours a week with Rubous Tech.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="btn btn-primary text-lg px-10">
                    Get Started Now
                  </button>
                  <button className="btn btn-outline border-white text-white hover:bg-white hover:text-navy text-lg px-10">
                    Schedule a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
