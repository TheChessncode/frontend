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

export const StepTech = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = form;

  const experienceOptions = [
    {
      value: "None (I am a complete beginner)",
      label: "None (I am a complete beginner)",
    },
    { value: "Basic digital skills", label: "Basic digital skills" },
    {
      value: "Some coding / Excel / Data",
      label: "Some coding / Excel / Data",
    },
    { value: "Intermediate", label: "Intermediate" },
  ];

  const careerOptions = [
    { value: "Data Analysis", label: "Data Analysis" },
    { value: "Data Science", label: "Data Science" },
    { value: "AI Fundamentals", label: "AI Fundamentals" },
    { value: "Not sure yet", label: "Not sure yet" },
  ];

  const handleNext = async () => {
    const isValid = await trigger([
      "techExperience",
      "preferredCareerTrack",
      "whyTechCareer",
      "successDefinition",
    ]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Technology and Career
        </h2>
        <p className="text-[var(--text-secondary)]">
          Tell us about your technology background and aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ApplicationSelect
          label="Current Tech Experience"
          options={experienceOptions}
          {...register("techExperience", { required: "Selection is required" })}
          error={errors.techExperience?.message}
        />
        <ApplicationSelect
          label="Preferred Career Track"
          options={careerOptions}
          {...register("preferredCareerTrack", {
            required: "Selection is required",
          })}
          error={errors.preferredCareerTrack?.message}
        />
      </div>

      <div className="space-y-6">
        <ApplicationTextArea
          label="Why do you want a career in technology?"
          {...register("whyTechCareer", {
            required: "This field is required",
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
          error={errors.whyTechCareer?.message}
          placeholder="Be specific. What problems do you want to solve or what tools do you want to build?"
        />
        <ApplicationTextArea
          label="What does success look like for you at the end of the program?"
          {...register("successDefinition", {
            required: "This field is required",
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
          error={errors.successDefinition?.message}
          placeholder="Describe where you want to be in the next 12 months."
        />
      </div>

      <StepNavigation onNext={handleNext} onBack={onPrev} />
    </div>
  );
};
