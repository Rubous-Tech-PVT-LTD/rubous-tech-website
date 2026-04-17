// Dummy comment to trigger deployment build
import React from 'react';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path='/about' element={<AboutUs/>}/>
  <Route path='/careers' element={<Careers/>}/>
</Routes>
      </BrowserRouter>

  );
}

export default App;
