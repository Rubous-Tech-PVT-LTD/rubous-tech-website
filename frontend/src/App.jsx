// Dummy comment to trigger deployment build
import React from 'react';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ScrollToTop from './utils/ScrollToTop';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-background text-slate-100 selection:bg-primary/20 selection:text-primary">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
