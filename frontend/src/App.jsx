import Footer from './components/Footer'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'

function App() {

  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
<Route path='/' element={<LandingPage />} />
<Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />  
    </BrowserRouter >

  )
}

export default App
