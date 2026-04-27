import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Solutions from './components/Solutions'
import Trusted from './components/Trusted'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Trusted />
     <Solutions />
     <ContactSection />
     <Pricing />
     <CTASection/>
     <Footer />
    </>
  )
}

export default App
