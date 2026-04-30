import React from 'react'
import HeroSection from '../components/SuccessStories/herosection'
import CaseStudyCard from '../components/SuccessStories/CaseStudy'
import IndustryImpact from '../components/SuccessStories/IndustryImpact'
import RubousTransformation from '../components/SuccessStories/RubousTransformation'
import TrustedScalability from '../components/SuccessStories/TrustedScalability'
import CTASection from '../components/SuccessStories/CTASection'

const SuccessStories = () => {
	return (
		<div >
			<HeroSection />
			<CaseStudyCard />
			<IndustryImpact />
			<RubousTransformation />
			<TrustedScalability />
			<CTASection />
		</div>
	)
}

export default SuccessStories
