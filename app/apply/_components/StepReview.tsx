"use client";

import React from "react";
import { StepNavigation } from "./StepNavigation";
import { UseFormReturn } from "react-hook-form";
import {
  ApplicationFormData,
  ApplicationStep,
} from "../_hooks/useApplicationForm";
import { Pencil } from "lucide-react";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onPrev: () => void;
  onEdit: (step: ApplicationStep) => void;
  isSubmitting: boolean;
  error: string | null;
}

export const StepReview = ({
  form,
  onPrev,
  onEdit,
  isSubmitting,
  error,
}: StepProps) => {
  const data = form.getValues();

  const SummarySection = ({
    title,
    step,
    items,
  }: {
    title: string;
    step: ApplicationStep;
    items: { label: string; value?: string | boolean }[];
  }) => {
    const visibleItems = items.filter(
      (item) => item.value && item.value !== "",
    );
    if (visibleItems.length === 0) return null;

    return (
      <div className="bg-[var(--bg-secondary)]/50 rounded-2xl p-6 border border-[var(--border-primary)] relative group transition-all duration-300 hover:shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-black uppercase tracking-widest text-[var(--brand-primary)]">
            {title}
          </h3>
          <button
            type="button"
            onClick={() => onEdit(step)}
            className="p-2 rounded-full hover:bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] transition-colors opacity-0 group-hover:opacity-100"
            title="Edit Section"
          >
            <Pencil size={16} />
          </button>
        </div>
        <div className="space-y-4">
          {visibleItems.map((item, i) => (
            <div key={i} className="space-y-1">
              <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                {item.label}
              </span>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed break-words">
                {typeof item.value === "boolean"
                  ? item.value
                    ? "Confirmed"
                    : "Not Confirmed"
                  : item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-black text-[var(--text-primary)]">
          Final Review
        </h2>
        <p className="text-[var(--text-secondary)]">
          Everything looking good? You can click any section to make edits.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <SummarySection
          title="Personal"
          step={1}
          items={[
            { label: "Name", value: data.fullName },
            { label: "Email", value: data.email },
            { label: "Bio", value: data.describeYourself },
            { label: "Strengths", value: data.personalStrengths },
            { label: "Growth", value: data.growthExpectations },
          ]}
        />
        <SummarySection
          title="Professional"
          step={2}
          items={[
            { label: "Aspiration", value: data.careerAspiration },
            { label: "Skills", value: data.techSkillsInterest },
            { label: "Community", value: data.communityContribution },
          ]}
        />
        <SummarySection
          title="Financial"
          step={3}
          items={[
            { label: "Impact", value: data.scholarshipImpact },
            { label: "Barriers", value: data.financialBarriers },
            { label: "Employment", value: data.employmentImpact },
          ]}
        />
        <SummarySection
          title="Social & Media"
          step={4}
          items={[
            { label: "LinkedIn", value: data.linkedin },
            { label: "GitHub", value: data.github },
            { label: "Twitter", value: data.twitter },
            { label: "Instagram", value: data.instagram },
          ]}
        />
        <SummarySection
          title="Commitment"
          step={5}
          items={[
            { label: "Video", value: data.videoLink },
            { label: "Commitment", value: data.commitmentConfirmed },
          ]}
        />
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-[var(--error-light)] border border-[var(--error)] text-[var(--error)] text-sm font-medium">
          {error}
        </div>
      )}

      <StepNavigation onBack={onPrev} isLast isSubmitting={isSubmitting} />
    </div>
  );
};
