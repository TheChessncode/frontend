"use client";

import React from "react";
import { ApplicationTextArea } from "./FormFields";
import { StepNavigation } from "./StepNavigation";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "../_hooks/useApplicationForm";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void;
  onPrev: () => void;
}

export const StepProfessional = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const stepFields = [
    "careerAspiration",
    "techSkillsInterest",
    "communityContribution",
  ] as const;

  const watchedValues = form.watch(stepFields);
  const isStepValid = stepFields.every((fieldName, index) => {
    const value = watchedValues[index];
    const isPresent =
      typeof value === "string" ? value.trim().length > 0 : Boolean(value);
    const { invalid } = form.getFieldState(fieldName, form.formState);
    return isPresent && !invalid;
  });

  const handleNext = () => {
    void (async () => {
      const isValid = await form.trigger(stepFields, { shouldFocus: true });
      if (isValid) onNext();
    })();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Professional Aspirations
        </h2>
        <p className="text-[var(--text-secondary)]">
          Tell us about your tech journey and future goals.
        </p>
      </div>

      <ApplicationTextArea
        label="What career or tech path do you aspire to in the next 3–5 years?"
        placeholder="Software Engineering, AI Research, Data Science..."
        {...register("careerAspiration", {
          required: "This field is required",
        })}
        error={errors.careerAspiration?.message}
      />

      <ApplicationTextArea
        label="Which tech skills are you most interested in learning and why?"
        placeholder="React, Python, System Architecture..."
        {...register("techSkillsInterest", {
          required: "This field is required",
        })}
        error={errors.techSkillsInterest?.message}
      />

      <ApplicationTextArea
        label="Where do you see yourself contributing to society or your community?"
        placeholder="How will you use your skills to help others?"
        {...register("communityContribution", {
          required: "This field is required",
        })}
        error={errors.communityContribution?.message}
      />

      <StepNavigation onNext={handleNext} onBack={onPrev} isValid={isStepValid} />
    </div>
  );
};
