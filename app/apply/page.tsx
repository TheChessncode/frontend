"use client";

import React from "react";
import {
  useApplicationForm,
  ApplicationFormData,
} from "./_hooks/useApplicationForm";
import { useEmailSubmission } from "./_hooks/useEmailSubmission";
import { ProgressIndicator } from "./_components/ProgressIndicator";
import { ApplicationStepsContainer } from "./_components/ApplicationStepsContainer";
import { SuccessView } from "./_components/SuccessView";

export default function ApplyPage() {
  const { form, currentStep, nextStep, prevStep, goToStep } =
    useApplicationForm();
  const { submitApplication, isSubmitting, success, error } =
    useEmailSubmission();

  const handleFinalSubmit = async (data: ApplicationFormData) => {
    await submitApplication(data);
  };

  if (success) {
    return <SuccessView />;
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl">
          ChessNcode Scholar Application
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Start your journey towards a high-bar tech career. Complete our
          rigorous 5-step application process to earn your spot.
        </p>
      </div>

      <ProgressIndicator currentStep={currentStep} totalSteps={6} />

      <ApplicationStepsContainer
        form={form}
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        goToStep={goToStep}
        isSubmitting={isSubmitting}
        error={error}
        onSubmit={handleFinalSubmit}
      />
    </div>
  );
}
