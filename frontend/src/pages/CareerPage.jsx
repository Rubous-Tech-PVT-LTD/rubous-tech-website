import React, { useEffect } from 'react'
import CareerHero from '../components/careers/CareerHero'
import WhyJoinUs from '../components/careers/WhyJoinUs'
import OurCulture from '../components/careers/OurCulture'
import OpenPositions from '../components/careers/OpenPosition'
import CTASection from '../components/careers/CTASection'


const CareerPage = () => {
 

    return (
        <div>
            <CareerHero />
            <WhyJoinUs />
            <OurCulture />
            <OpenPositions />
            <CTASection />
            
        </div>
    )
}

export default CareerPage
