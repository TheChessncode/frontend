"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "../_hooks/useApplicationForm";
import {
  ApplicationInput,
  ApplicationSelect,
  ApplicationTextArea,
} from "./FormFields";
import { StepNavigation } from "./StepNavigation";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void;
  onPrev: () => void;
}

export const StepChess = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = form;

  const durationOptions = [
    { value: "Less than a year", label: "Less than a year" },
    { value: "1–3 years", label: "1–3 years" },
    { value: "3–5 years", label: "3–5 years" },
    { value: "More than 5 years", label: "More than 5 years" },
  ];

  const involvementOptions = [
    { value: "Casual/Recreational", label: "Casual/Recreational" },
    { value: "Club Player", label: "Club Player" },
    { value: "Competitive/Tournament", label: "Competitive/Tournament" },
    { value: "Coach/Instructor", label: "Coach/Instructor" },
  ];

  const handleNext = async () => {
    const isValid = await trigger([
      "chessDuration",
      "chessInvolvement",
      "chessReflection",
    ]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Chess Background
        </h2>
        <p className="text-[var(--text-secondary)]">
          Tell us about your chess experience. We welcome all players at all
          stages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ApplicationSelect
          label="How Long Have You Played Chess?"
          options={durationOptions}
          {...register("chessDuration", { required: "Selection is required" })}
          error={errors.chessDuration?.message}
        />
        <ApplicationSelect
          label="Chess Involvement"
          options={involvementOptions}
          {...register("chessInvolvement", {
            required: "Selection is required",
          })}
          error={errors.chessInvolvement?.message}
        />
        <ApplicationInput
          label="FIDE Rating (if any)"
          type="number"
          placeholder="Leave blank if none"
          {...register("fideRating")}
          error={errors.fideRating?.message}
        />
      </div>

      <ApplicationTextArea
        label="Describe a chess game or moment that taught you something important about yourself"
        {...register("chessReflection", {
          required: "Reflection is required",
          validate: (val) => {
            const sentences = val
              .split(/[.!?]+/)
              .filter((s) => s.trim().length > 0);
            return (
              (sentences.length >= 3 && sentences.length <= 5) ||
              "Please provide 3–5 sentences."
            );
          },
        })}
        error={errors.chessReflection?.message}
        placeholder="Enter 3-5 sentences..."
      />

      <StepNavigation onNext={handleNext} onBack={onPrev} />
    </div>
  );
};
