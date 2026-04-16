import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/aboutus/AboutHeader'
import StatsSection from '../components/aboutus/StatsSection'
import TheRobousJourney from '../components/aboutus/TheRobousJourney'
import MissionVision from '../components/aboutus/MissionVission'
import Values from '../components/aboutus/Values'
import WhyCompanies from '../components/aboutus/WhyCompanies'

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <AboutHeader/>
      <StatsSection/>
      <TheRobousJourney/>
      <MissionVision/>
      <Values/>
      <WhyCompanies/>
    </div>
  )
}

export default AboutUs
