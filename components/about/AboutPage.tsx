"use client";

import PublicPageContainer from '../ui/PublicPageContainer';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import FounderSection from './FounderSection';
import TimelineSection from './TimelineSection';
import CtaSection from './CtaSection';

export default function AboutPage() {
  return (
    <PublicPageContainer>
      <div className="min-h-screen bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]">
        <HeroSection />
        <MissionSection />
        <FounderSection />
        <TimelineSection />
        <CtaSection />
      </div>
    </PublicPageContainer>
  );
}