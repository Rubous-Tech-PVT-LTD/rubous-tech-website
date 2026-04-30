import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/utils/ScrollToTop'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import CareerPage from './pages/CareerPage'
import OurProcess from './pages/OurProcess'
import SuccessStories from './pages/SuccessStories'
import Blog from './pages/Blog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

function App() {

  return (
  <>
      <Navbar />
      <Routes>
<Route path='/' element={<LandingPage />} />
<Route path='/about' element={<AboutUs />} />
<Route path='/our-process' element={<OurProcess />} />
<Route path='/careers' element={<CareerPage />} />
<Route path='/case-studies' element={<SuccessStories />} />
<Route path='/blog' element={<Blog />} />
<Route path='/privacy' element={<PrivacyPolicy />} />
<Route path='/terms' element={<TermsAndConditions />} />
      </Routes>
      <Footer />
      <ScrollToTop />
</>
  )
}

export default App
