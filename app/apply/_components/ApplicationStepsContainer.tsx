"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  ApplicationFormData,
  ApplicationStep,
} from "../_hooks/useApplicationForm";
import { motion, AnimatePresence } from "framer-motion";
import { StepPersonal } from "./StepPersonal";
import { StepChess } from "./StepChess";
import { StepTech } from "./StepTech";
import { StepCommitment } from "./StepCommitment";
import { StepReview } from "./StepReview";
import { StepDeclaration } from "./StepDeclaration";

interface ContainerProps {
  form: UseFormReturn<ApplicationFormData>;
  currentStep: ApplicationStep;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: ApplicationStep) => void;
  isSubmitting: boolean;
  error: string | null;
  onSubmit: (data: ApplicationFormData) => void;
}

export const ApplicationStepsContainer = ({
  form,
  currentStep,
  nextStep,
  prevStep,
  goToStep,
  isSubmitting,
  error,
  onSubmit,
}: ContainerProps) => {
  const steps = [
    <StepPersonal key={1} form={form} onNext={nextStep} onPrev={prevStep} />,
    <StepChess key={2} form={form} onNext={nextStep} onPrev={prevStep} />,
    <StepTech key={3} form={form} onNext={nextStep} onPrev={prevStep} />,
    <StepCommitment key={4} form={form} onNext={nextStep} onPrev={prevStep} />,
    <StepDeclaration key={5} form={form} onNext={nextStep} onPrev={prevStep} />,
    <StepReview
      key={6}
      form={form}
      onNext={() => {}} // Not used in last step
      onPrev={prevStep}
      onEdit={goToStep}
      isSubmitting={isSubmitting}
      error={error}
    />,
  ];

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.02, y: -10 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="bg-[var(--bg-primary)]/80 backdrop-blur-sm border border-[var(--border-primary)] rounded-[1.5rem] p-4 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-primary)]/20 to-transparent" />
          <div className="relative z-10">{steps[currentStep - 1]}</div>
        </motion.div>
      </AnimatePresence>
    </form>
  );
};
