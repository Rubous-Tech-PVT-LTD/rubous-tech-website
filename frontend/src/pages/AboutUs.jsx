import React from 'react'
import AboutHeader from '../components/aboutus/AboutHeader'
import StatsSection from '../components/aboutus/StatsSection'
import OurMission from '../components/aboutus/OurMission'
import KeyFeatures from '../components/aboutus/KeyFeatures'
import MeetVisionaries from '../components/aboutus/MeetVisionaries'
import AboutCta from '../components/aboutus/AboutCta'


const AboutUs = () => {
  return (
    <div>
      <AboutHeader />
      <StatsSection />
      <OurMission />
      <KeyFeatures />
      <MeetVisionaries />
      <AboutCta />
    </div>
  )
}

export default AboutUs
