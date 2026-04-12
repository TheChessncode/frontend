"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  ApplicationFormData,
  ApplicationStep,
} from "../_hooks/useApplicationForm";
import { StepNavigation } from "./StepNavigation";
import { Edit2 } from "lucide-react";

interface Field {
  label: string;
  value: string | undefined;
  isLong?: boolean;
}

interface Section {
  title: string;
  step: ApplicationStep;
  fields: Field[];
}

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void; 
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

  const sections: Section[] = [
    {
      title: "Personal Information",

      step: 1 as ApplicationStep,
      fields: [
        { label: "Full Name", value: data.fullName },
        { label: "Date of Birth", value: data.dateOfBirth },
        { label: "Country", value: data.country },
        { label: "City/State", value: data.cityState },
        { label: "Email", value: data.email },
        { label: "WhatsApp", value: data.whatsAppNumber },
        { label: "Referred By", value: data.referredBy },
        ...(data.referredBy === "Other"
          ? [
              { label: "Referral Name", value: data.referralName },
              { label: "Referral Contact", value: data.referralContact },
            ]
          : []),
      ],
    },
    {
      title: "Chess Background",
      step: 2 as ApplicationStep,
      fields: [
        { label: "Duration", value: data.chessDuration },
        { label: "Involvement", value: data.chessInvolvement },
        { label: "FIDE Rating", value: data.fideRating || "None" },
        { label: "Reflection", value: data.chessReflection, isLong: true },
      ],
    },
    {
      title: "Technology and Career",
      step: 3 as ApplicationStep,
      fields: [
        { label: "Experience", value: data.techExperience },
        { label: "Career Track", value: data.preferredCareerTrack },
        { label: "Why Tech?", value: data.whyTechCareer, isLong: true },
        { label: "Success Look", value: data.successDefinition, isLong: true },
      ],
    },
    {
      title: "Commitment and Availability",
      step: 4 as ApplicationStep,
      fields: [
        { label: "Hours/Week", value: data.hoursAvailable },
        { label: "Access", value: data.accessToDevice },
        {
          label: "Constraints",
          value: data.availabilityConstraints,
          isLong: true,
        },
      ],
    },
    {
      title: "Declaration",
      step: 5 as ApplicationStep,
      fields: [
        { label: "Date signed", value: data.declarationDate },
        { label: "Signature", value: data.signature },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Review Application
        </h2>
        <p className="text-[var(--text-secondary)]">
          Please review your details before final submission.
        </p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-[var(--bg-secondary)]/30 rounded-2xl border border-[var(--border-primary)] overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[var(--border-primary)] flex justify-between items-center bg-[var(--bg-secondary)]/50">
              <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--text-primary)]">
                {section.title}
              </h3>
              <button
                type="button"
                onClick={() => onEdit(section.step)}
                className="flex items-center gap-1.5 text-xs font-bold text-[var(--brand-primary)] hover:opacity-70 transition-opacity"
              >
                <Edit2 size={14} />
                Edit
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {section.fields.map((field) => (
                <div
                  key={field.label}
                  className={field.isLong ? "col-span-1 md:col-span-2" : ""}
                >
                  <p className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
                    {field.label}
                  </p>
                  {field.label === "Signature" &&
                  field.value &&
                  field.value !== "—" ? (
                    <div className="mt-1 bg-white/50 rounded-lg p-2 border border-[var(--border-primary)] w-fit">
                      <img
                        src={field.value}
                        alt="Signature"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <p className="text-[var(--text-primary)] text-sm leading-relaxed">
                      {field.value || "—"}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {error && (
        <div className="p-4 bg-[var(--error)]/10 border border-[var(--error)]/20 rounded-xl text-[var(--error)] text-xs font-bold uppercase tracking-tight">
          {error}
        </div>
      )}

      <StepNavigation
        onBack={onPrev}
        isLast={true}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};
