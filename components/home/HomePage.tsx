import React from 'react'
import PublicPageContainer from '../ui/PublicPageContainer'
import HeroSection from './HeroSection'
import PartnershipSection from './PartnershipSection'
import StudentJourneySection from './StudentJourneySection'

export default function HomePage() {
  return (
    <PublicPageContainer>
        <HeroSection/>
        <StudentJourneySection/>
        <PartnershipSection/>
    </PublicPageContainer>
  )
}
