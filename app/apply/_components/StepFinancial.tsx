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

export const StepFinancial = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Financial & Motivation
        </h2>
        <p className="text-[var(--text-secondary)]">
          Transparency about your situation helps us support you better.
        </p>
      </div>

      <ApplicationTextArea
        label="How would a scholarship stipend support your learning journey?"
        placeholder="Explain how the financial support will enable you to focus on your studies."
        {...register("scholarshipImpact", {
          required: "This field is required",
        })}
        error={errors.scholarshipImpact?.message}
      />

      <ApplicationTextArea
        label="What financial barriers currently prevent you from accessing tech training?"
        placeholder="Describe your current financial situation and challenges."
        {...register("financialBarriers", {
          required: "This field is required",
        })}
        error={errors.financialBarriers?.message}
      />

      <ApplicationTextArea
        label="How would achieving employment post-program impact your independence?"
        placeholder="Your vision for the future after completing the program."
        {...register("employmentImpact", {
          required: "This field is required",
        })}
        error={errors.employmentImpact?.message}
      />

      <StepNavigation onNext={onNext} onBack={onPrev} />
    </div>
  );
};
