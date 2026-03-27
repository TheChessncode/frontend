"use client";

import React from "react";
import { ApplicationInput } from "./FormFields";
import { StepNavigation } from "./StepNavigation";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "../_hooks/useApplicationForm";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void;
  onPrev: () => void;
}

export const StepSocialMedia = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const stepFields = ["linkedin", "github", "twitter", "instagram"] as const;

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
          Connect with Us
        </h2>
        <p className="text-[var(--text-secondary)]">
          Provide your social media handles for better engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <ApplicationInput
            label="LinkedIn"
            placeholder="linkedin.com/in/username"
            {...register("linkedin", { required: "LinkedIn is required" })}
            error={errors.linkedin?.message}
          />
          <Linkedin
            className="absolute right-4 top-10 text-[var(--text-muted)]"
            size={18}
          />
        </div>
        <div className="relative">
          <ApplicationInput
            label="GitHub"
            placeholder="github.com/username"
            {...register("github", { required: "GitHub is required" })}
            error={errors.github?.message}
          />
          <Github
            className="absolute right-4 top-10 text-[var(--text-muted)]"
            size={18}
          />
        </div>
        <div className="relative">
          <ApplicationInput
            label="Twitter / X"
            placeholder="twitter.com/username"
            {...register("twitter", { required: "Twitter / X is required" })}
            error={errors.twitter?.message}
          />
          <Twitter
            className="absolute right-4 top-10 text-[var(--text-muted)]"
            size={18}
          />
        </div>
        <div className="relative">
          <ApplicationInput
            label="Instagram"
            placeholder="instagram.com/username"
            {...register("instagram", { required: "Instagram is required" })}
            error={errors.instagram?.message}
          />
          <Instagram
            className="absolute right-4 top-10 text-[var(--text-muted)]"
            size={18}
          />
        </div>
      </div>

      <StepNavigation onNext={handleNext} onBack={onPrev} isValid={isStepValid} />
    </div>
  );
};
