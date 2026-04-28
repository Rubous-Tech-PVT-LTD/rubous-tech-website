import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Solutions from './components/Solutions'
import Trusted from './components/Trusted'
import Career from './components/careers/Career'
import AboutHeader from './components/aboutus/AboutHeader'
import StatsSection from './components/aboutus/StatsSection'
import TheRubousJourney from './components/aboutus/TheRubousJourney'
import MissionVision from './components/aboutus/MissionVision'
import Values from './components/aboutus/Values'
import WhyCompanies from './components/aboutus/WhyCompanies'
import { Navigate, Route, Routes } from 'react-router-dom'
import OurProcess from './pages/OurProcess'

const HomePage = () => (
  <>
    <Hero />
    <Trusted />
    <Solutions />
    <ContactSection />
    <Pricing />
    <CTASection />
    <Footer />
  </>
)

const ServicesPage = () => (
  <>
    <Solutions />
    <Footer />
  </>
)

const PricingPage = () => (
  <>
    <OurProcess />
  </>
)

const AboutPage = () => (
  <>
    <AboutHeader />
    <StatsSection />
    <TheRubousJourney />
    <MissionVision />
    <Values />
    <WhyCompanies />
    <Footer />
  </>
)

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        
        <Route path='/careers' element={<Career />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/about' element={<AboutPage />} />
  
      </Routes>
    </>
  )
}

export default App
