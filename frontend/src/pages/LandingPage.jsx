import React from 'react';
import Hero from '../components/Hero';
import Trusted from '../components/Trusted';
import Solutions from '../components/Solutions';
import ContactSection from '../components/ContactSection';
import Pricing from '../components/Pricing';
import CTASection from '../components/CTASection';


const LandingPage = () => {
  return (
    <>
      <Hero />
      <Trusted />
      <Solutions />
      <ContactSection />
      <Pricing />
      <CTASection />
    </>
  );
};

export default LandingPage;
