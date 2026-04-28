import Footer from './components/Footer'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import CareerPage from './pages/CareerPage'

function App() {

  return (
  <>
      <Navbar />
      <Routes>
<Route path='/' element={<LandingPage />} />
<Route path='/about' element={<AboutUs />} />
<Route path='/careers' element={<CareerPage />} />
      </Routes>
      <Footer />  
</>
  )
}

export default App
