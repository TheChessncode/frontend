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

      <StepNavigation onNext={onNext} isFirst />
    </div>
  );
};
