import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/aboutus/AboutHeader'
import StatsSection from '../components/aboutus/StatsSection'
import TheRubousJourney from '../components/aboutus/TheRubousJourney'
import MissionVision from '../components/aboutus/MissionVision'
import Values from '../components/aboutus/Values'
import WhyCompanies from '../components/aboutus/WhyCompanies'

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <AboutHeader/>
      <StatsSection/>
      <TheRubousJourney/>
      <MissionVision/>
      <Values/>
      <WhyCompanies/>
    </div>
  )
}

export default AboutUs
