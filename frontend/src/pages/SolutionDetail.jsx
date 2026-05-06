import React from 'react'
import CommunicationSection from '../components/SolutionDetail/CommunicationSection'
import IntelligentCapabilities from '../components/SolutionDetail/IntelligentCapabilities'
import ThreeSteps from '../components/SolutionDetail/Steps'
import QuantifiableResults from '../components/SolutionDetail/Results'
import BuiltForEveryScenario from '../components/SolutionDetail/Scenario'
import CommonQuestions from '../components/SolutionDetail/CommonQuestion'
import CTASection from '../components/SolutionDetail/CTASection'
import Hero from '../components/SolutionDetail/hero'


const SolutionDetail = () => {
    return (
        <>
          <Hero />
          <CommunicationSection />
          <IntelligentCapabilities />
          <ThreeSteps />
          <QuantifiableResults />
          <BuiltForEveryScenario />
          <CommonQuestions />
          <CTASection />
        </>
    )
}

export default SolutionDetail
