"use client";

import PublicPageContainer from '@/components/ui/PublicPageContainer';
import CurriculumTimeline from './CurriculumTimeline';
import CurrentFocus from './CurrentFocus';
import HeroSection from './HeroSection';
import CertificationSection from './CertificationSection';

export default function ProjectsPage() {
  return (
    <PublicPageContainer>
      <HeroSection />
      <CurriculumTimeline />
      <CurrentFocus />
      <CertificationSection/>
    </PublicPageContainer>
  );
}