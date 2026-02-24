"use client";

import React from "react";
import { ApplicationInput } from "./FormFields";
import { StepNavigation } from "./StepNavigation";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "../_hooks/useApplicationForm";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void;
  onPrev: () => void;
}

export const StepVideoSubmission = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Final Commitment
        </h2>
        <p className="text-[var(--text-secondary)]">
          Show us your motivation and commit to the journey.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-[var(--info-light)]/20 border border-[var(--info-light)] flex gap-3 text-sm text-[var(--info)]">
        <AlertCircle size={20} className="shrink-0" />
        <p>
          Step four requires applicants to submit a video explaining their
          motivation to join. Upload your video to Google Drive or YouTube and
          paste the link below.
        </p>
      </div>

      <ApplicationInput
        label="Video Motivation Link"
        placeholder="https://youtube.com/watch?v=..."
        {...register("videoLink", { required: "Video link is required" })}
        error={errors.videoLink?.message}
      />

      <div className="space-y-4 pt-4">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center mt-1">
            <input
              type="checkbox"
              className="peer h-5 w-5 appearance-none rounded border border-[var(--border-primary)] bg-[var(--bg-primary)] checked:bg-[var(--brand-primary)] checked:border-[var(--brand-primary)] transition-all cursor-pointer"
              {...register("commitmentConfirmed", {
                required: "You must commit to the program",
              })}
            />
            <CheckCircle2
              className="absolute text-white scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none left-0.5 top-0.5"
              size={16}
            />
          </div>
          <div className="space-y-1">
            <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors">
              I commit to the full 12-month program
            </span>
            <p className="text-xs text-[var(--text-tertiary)]">
              I understand that I must meet all milestones to receive the full
              stipend.
            </p>
          </div>
        </label>
        {errors.commitmentConfirmed && (
          <span className="text-xs font-medium text-[var(--error)]">
            {errors.commitmentConfirmed.message}
          </span>
        )}
      </div>

      <StepNavigation onNext={onNext} onBack={onPrev} />
    </div>
  );
};
