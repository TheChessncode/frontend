"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  ApplicationFormData,
  ApplicationStep,
} from "../_hooks/useApplicationForm";
import { motion, AnimatePresence } from "framer-motion";
import { StepPersonal } from "./StepPersonal";
import { StepProfessional } from "./StepProfessional";
import { StepFinancial } from "./StepFinancial";
import { StepSocialMedia } from "./StepSocialMedia";
import { StepVideoSubmission } from "./StepVideoSubmission";
import { StepReview } from "./StepReview";

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
    <StepProfessional
      key={2}
      form={form}
      onNext={nextStep}
      onPrev={prevStep}
    />,
    <StepFinancial key={3} form={form} onNext={nextStep} onPrev={prevStep} />,
    <StepSocialMedia key={4} form={form} onNext={nextStep} onPrev={prevStep} />,
    <StepVideoSubmission
      key={5}
      form={form}
      onNext={nextStep}
      onPrev={prevStep}
    />,
    <StepReview
      key={6}
      form={form}
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
          className="bg-[var(--bg-primary)]/80 backdrop-blur-sm border border-[var(--border-primary)] rounded-[2.5rem] p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-primary)]/20 to-transparent" />
          <div className="relative z-10">{steps[currentStep - 1]}</div>
        </motion.div>
      </AnimatePresence>
    </form>
  );
};
