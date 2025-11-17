"use client";

import { useState } from "react";
import PublicPageContainer from "../ui/PublicPageContainer";
import { Partner, partners } from "@/constants/partnersData";
// import HeroSection from "./HeroSection";
import PartnersGrid from "./PartnersGrid";
import ImpactStats from "./ImpactStats";
import PartnerModal from "./PartnerModal";

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  // const [activeCategory, setActiveCategory] = useState("all");

  return (
    <PublicPageContainer>
      {/* <HeroSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} /> */}
      <PartnersGrid partners={partners} setSelectedPartner={setSelectedPartner} />
      <ImpactStats />
      <PartnerModal selectedPartner={selectedPartner} setSelectedPartner={setSelectedPartner} />
    </PublicPageContainer>
  );
}