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
        <h1 className="text-xl font-extrabold tracking-tight sm:text-5xl grad-txt">
          ChessNcode Scholar Application
        </h1>
        <p className="text-xs sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          You must be referred by <strong>Promoting Queens</strong>,{" "}
          <strong>FIDE affiliate,</strong> or a{" "}
          <strong>ChessNcode alumna</strong> Please confirm your referral source
          in Section 1. Applications without a valid referral will not be
          reviewed.
        </p>
      </div>

      <ProgressIndicator currentStep={currentStep} totalSteps={6} />
      <div className="">
        <p className="text-sm text-[var(--text-tertiary)] max-w-3xl mx-auto italic text-center mb-6">
          Please complete all sections honestly and in your own words, We are
          looking for motivation and mindset, not perfect answers.
        </p>

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
    </div>
  );
}
