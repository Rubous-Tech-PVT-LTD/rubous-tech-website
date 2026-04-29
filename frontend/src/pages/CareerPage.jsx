import React from 'react'
import CareerHero from '../components/careers/CareerHero'
import WhyJoinUs from '../components/careers/WhyJoinUs'
import OurCulture from '../components/careers/OurCulture'
import OpenPositions from '../components/careers/OpenPosition'
import StartYourJourney from '../components/careers/StartJourney'

const CareerPage = () => {
    return (
        <div>
            <CareerHero />
            <WhyJoinUs />
            <OurCulture />
            <OpenPositions />
            <StartYourJourney />
        </div>
    )
}

export default CareerPage
