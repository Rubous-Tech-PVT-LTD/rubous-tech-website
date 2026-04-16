// Dummy comment to trigger deployment build
import React from 'react';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage />} />
<Route path='/about' element={<AboutUs/>}/>
</Routes>
      </BrowserRouter>

  );
}

export default App;
