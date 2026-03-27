"use client";

import React from "react";
import { ApplicationInput, ApplicationTextArea } from "./FormFields";
import { StepNavigation } from "./StepNavigation";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "../_hooks/useApplicationForm";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void;
  onPrev: () => void;
}

export const StepPersonal = ({ form, onNext }: StepProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const stepFields = [
    "fullName",
    "email",
    "describeYourself",
    "personalStrengths",
    "growthExpectations",
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
          Personal Discovery
        </h2>
        <p className="text-[var(--text-secondary)]">
          Let’s start with who you are and what drives you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ApplicationInput
          label="Full Name"
          placeholder="John Doe"
          {...register("fullName", { required: "Name is required" })}
          error={errors.fullName?.message}
        />
        <ApplicationInput
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          error={errors.email?.message}
        />
      </div>

      <ApplicationTextArea
        label="Describe yourself in 3 sentences."
        placeholder="Tell us about your background, interests, and what makes you unique."
        {...register("describeYourself", {
          required: "This field is required",
        })}
        error={errors.describeYourself?.message}
      />

      <ApplicationTextArea
        label="What personal strengths or traits will help you succeed in ChessNCode?"
        placeholder="E.g., Perseverance, logical thinking, dedication..."
        {...register("personalStrengths", {
          required: "This field is required",
        })}
        error={errors.personalStrengths?.message}
      />

      <ApplicationTextArea
        label="How will ChessNCode help you grow personally?"
        placeholder="Your personal growth expectations..."
        {...register("growthExpectations", {
          required: "This field is required",
        })}
        error={errors.growthExpectations?.message}
      />

      <StepNavigation onNext={handleNext} isFirst isValid={isStepValid} />
    </div>
  );
};
