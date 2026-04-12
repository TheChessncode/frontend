"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "../_hooks/useApplicationForm";
import { ApplicationSelect, ApplicationTextArea } from "./FormFields";
import { StepNavigation } from "./StepNavigation";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void;
  onPrev: () => void;
}

export const StepCommitment = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = form;

  const hourOptions = [
    { value: "8–10 hours", label: "8–10 hours" },
    { value: "10–15 hours", label: "10–15 hours" },
    { value: "15–20 hours", label: "15–20 hours" },
    { value: "20+ hours", label: "20+ hours" },
  ];

  const accessOptions = [
    { value: "Yes, reliable access", label: "Yes, reliable access" },
    { value: "Mostly reliable", label: "Mostly reliable" },
    { value: "Occasional access", label: "Occasional access" },
    { value: "Limited access", label: "Limited access" },
  ];

  const handleNext = async () => {
    const isValid = await trigger([
      "hoursAvailable",
      "accessToDevice",
      "availabilityConstraints",
    ]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Commitment and Availability
        </h2>
        <p className="text-[var(--text-secondary)]">
          Tell us about your availability and readiness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ApplicationSelect
          label="Hours Available Per Week"
          options={hourOptions}
          {...register("hoursAvailable", { required: "Selection is required" })}
          error={errors.hoursAvailable?.message}
        />
        <ApplicationSelect
          label="Access to Device and Internet"
          options={accessOptions}
          {...register("accessToDevice", { required: "Selection is required" })}
          error={errors.accessToDevice?.message}
        />
      </div>

      <ApplicationTextArea
        label="Is there anything in your current life (work, family, study, health) that might affect your availability? How will you manage it?"
        {...register("availabilityConstraints", {
          required: "This field is required",
          validate: (val) => {
            const sentences = val
              .split(/[.!?]+/)
              .filter((s) => s.trim().length > 0);
            return (
              (sentences.length >= 2 && sentences.length <= 4) ||
              "Please provide 2–4 sentences."
            );
          },
        })}
        error={errors.availabilityConstraints?.message}
        placeholder="Explain your situation and management strategy..."
      />

      <StepNavigation onNext={handleNext} onBack={onPrev} />
    </div>
  );
};
