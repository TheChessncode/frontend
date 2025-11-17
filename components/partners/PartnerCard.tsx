import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Partner } from "@/constants/partnersData";

interface PartnerCardProps {
  partner: Partner;
  index: number;
  setSelectedPartner: (partner: Partner) => void;
}

export default function PartnerCard({ partner, index, setSelectedPartner }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        delay: index * 0.1 
      }}
      onClick={() => setSelectedPartner(partner)}
      className="group cursor-pointer bg-[var(--bg-primary)] rounded-3xl p-6 border border-[var(--border-primary)] hover:border-[var(--brand-primary)] transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-light)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <motion.div 
          className="flex items-center gap-4 mb-4"
          whileHover={{ x: 5 }}
        >
          <div className="w-16 h-16 bg-[var(--bg-secondary)] rounded-2xl flex items-center justify-center p-3 border border-[var(--border-primary)] group-hover:border-[var(--brand-primary)] transition-colors duration-500">
            <img 
              src={partner.logoUrl} 
              alt={partner.partnerName}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors duration-300 truncate">
              {partner.partnerName}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mt-1 line-clamp-2">
              {partner.description}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {partner.stats.map((stat, statIndex) => (
            <motion.div 
              key={stat.title}
              className="text-center p-3 bg-[var(--bg-secondary)] rounded-xl group-hover:bg-[var(--bg-tertiary)] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: statIndex * 0.1 + 0.5 }}
            >
              <div className="text-lg font-bold text-[var(--brand-primary)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--text-tertiary)] leading-tight">
                {stat.title}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex items-center justify-between pt-4 border-t border-[var(--border-primary)]"
          whileHover={{ x: 3 }}
        >
          <span className="text-sm text-[var(--brand-primary)] font-semibold">
            Learn more
          </span>
          <motion.div
            whileHover={{ x: 3, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ExternalLink className="w-4 h-4 text-[var(--brand-primary)]" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}