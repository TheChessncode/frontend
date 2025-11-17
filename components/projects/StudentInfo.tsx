import { studentData } from "@/constants/projectsData";
import { motion } from "framer-motion";
import { Award, Target, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function StudentInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-[50px]  md:pt-0"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <motion.div
            className="w-24 h-24 rounded-2xl border-4 border-[var(--bg-primary)] shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={studentData.image}
              alt={"Elora"}
              width={500}
              height={500}
              className="w-full h-full rounded-xl object-center object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -top-2 -right-2 bg-[var(--success)] text-[var(--text-inverse)] p-1 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Award className="w-5 h-5" />
          </motion.div>
        </div>
        <div>
          <h1 className="text-[2xl] md:text-3xl font-bold text-white">
            {studentData.name}
          </h1>
          <p className="text-lg text-white font-semibold">
            {studentData.chessBackground}
          </p>
          <p className="text-white flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4" />
            Nigeria
          </p>
        </div>
      </div>

      <motion.blockquote
        className="text-xl italic text-white border-l-4 border-[var(--brand-primary)] pl-4 my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        &quot;{studentData.quote}&quot;
      </motion.blockquote>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <motion.div
          className="p-4 rounded-xl bg-[var(--bg-primary)] shadow-sm border border-[var(--border-primary)]"
          whileHover={{ scale: 1.05 }}
        >
          <Target className="w-8 h-8 text-[var(--success)] mb-2" />
          <h3 className="font-semibold text-[var(--text-primary)]">
            Current Goal
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            {studentData.currentGoal}
          </p>
        </motion.div>
        <motion.div
          className="p-4 rounded-xl bg-[var(--bg-primary)] shadow-sm border border-[var(--border-primary)]"
          whileHover={{ scale: 1.05 }}
        >
          <Calendar className="w-8 h-8 text-[var(--info)] mb-2" />
          <h3 className="font-semibold text-[var(--text-primary)]">
            Journey Started
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            {studentData.joined}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
