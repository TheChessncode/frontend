import { interests } from '@/constants/contactData';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

interface InterestSelectorProps {
  activeInterest: string;
  setActiveInterest: React.Dispatch<React.SetStateAction<string>>;
}

export default function InterestSelector({ activeInterest, setActiveInterest }: InterestSelectorProps) {
  const handleInterestSelect = (interestId: string) => {
    setActiveInterest(interestId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="xl:col-span-1"
    >
      <div className="sticky top-24">
        <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-[10px] md:p-[15px]">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-[15px] flex items-center gap-[5px]">
            <Star className="w-6 h-6 text-[var(--brand-primary)]" />
            Your Interest
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((interest) => (
              <motion.button
                key={interest.id}
                onClick={() => handleInterestSelect(interest.id)}
                className={`w-full p-[2px] rounded-xl text-left transition-all border ${
                  activeInterest === interest.id
                    ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 shadow-lg'
                    : 'border-[var(--border-primary)] hover:border-[var(--brand-primary-light)]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-[1px]">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${interest.color}20` }}
                  >
                    <interest.icon
                      size={20}
                      style={{ color: interest.color }}
                    />
                  </div>
                  <span className="text-[14px] text-[var(--text-primary)]">
                    {interest.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
          {activeInterest && <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeInterest ? 1 : 0 }}
            className="mt-6 p-4 bg-[var(--success-light)] rounded-lg border border-[var(--success)]"
          >
            <p className="text-sm text-[var(--text-primary)] flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Great! Now let&apos;s get the details.
            </p>
          </motion.div>}
        </div>
      </div>
    </motion.div>
  );
}