import React from "react";
import PublicPageContainer from "../ui/PublicPageContainer";
import HeroSection from "./HeroSection";
import PartnershipSection from "./PartnershipSection";
import StudentJourneySection from "./StudentJourneySection";
import InstagramReelsSection from "./InstagramReelsSection";

export default function HomePage() {
  return (
    <PublicPageContainer>
      <HeroSection />
      <StudentJourneySection />
      <InstagramReelsSection />
      <PartnershipSection />
    </PublicPageContainer>
  );
}
