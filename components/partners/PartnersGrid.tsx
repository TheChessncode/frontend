import { motion } from "framer-motion";
import { Partner } from "@/constants/partnersData";
import PartnerCard from "./PartnerCard";

interface PartnersGridProps {
  partners: Partner[];
  setSelectedPartner: (partner: Partner) => void;
}

export default function PartnersGrid({ partners, setSelectedPartner }: PartnersGridProps) {
  return (
    <section className="relative py-20 px-4" id="partners">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)] bg-clip-text text-transparent">
              Featured Partnerships
            </span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Discover the incredible organizations we&apos;re proud to collaborate with in driving meaningful change.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {partners.map((partner, index) => (
            <PartnerCard key={partner.partnerName} partner={partner} index={index} setSelectedPartner={setSelectedPartner} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}