"use client";

import React from "react";
import { UseFormReturn, Path } from "react-hook-form";
import { ApplicationFormData } from "../_hooks/useApplicationForm";
import { ApplicationInput, ApplicationSelect } from "./FormFields";
import { StepNavigation } from "./StepNavigation";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void;
  onPrev: () => void;
}

export const StepPersonal = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = form;

  const referredBy = watch("referredBy");

  const referralOptions = [
    { value: "Promoting Queens", label: "Promoting Queens" },
    { value: "FIDE Affiliate", label: "FIDE Affiliate" },
    { value: "Chess and Code Alumni", label: "Chess and Code Alumni" },
    { value: "Other", label: "Other" },
  ];

  const handleNext = async () => {
    const fields = [
      "fullName",
      "dateOfBirth",
      "country",
      "cityState",
      "email",
      "whatsAppNumber",
      "referredBy",
    ];
    if (referredBy === "Other") {
      fields.push("referralName", "referralContact");
    }
    const isValid = await trigger(fields as Path<ApplicationFormData>[]);

    if (isValid) onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Personal Information
        </h2>
        <p className="text-[var(--text-secondary)]">
          Provide your basic personal details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ApplicationInput
          label="Full Name"
          {...register("fullName", { required: "Full name is required" })}
          error={errors.fullName?.message}
          placeholder="Enter your full name"
        />
        <ApplicationInput
          label="Date of Birth"
          type="date"
          {...register("dateOfBirth", {
            required: "Date of birth is required",
          })}
          error={errors.dateOfBirth?.message}
        />
        <ApplicationInput
          label="Country"
          {...register("country", { required: "Country is required" })}
          error={errors.country?.message}
          placeholder="e.g. Nigeria"
        />
        <ApplicationInput
          label="City/State"
          {...register("cityState", { required: "City/State is required" })}
          error={errors.cityState?.message}
          placeholder="e.g. Lagos"
        />
        <ApplicationInput
          label="Email Address"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={errors.email?.message}
          placeholder="you@example.com"
        />
        <ApplicationInput
          label="WhatsApp Number"
          type="tel"
          {...register("whatsAppNumber", {
            required: "WhatsApp number is required",
          })}
          error={errors.whatsAppNumber?.message}
          placeholder="e.g. +234..."
        />
        <ApplicationSelect
          label="Referred By"
          options={referralOptions}
          {...register("referredBy", { required: "Selection is required" })}
          error={errors.referredBy?.message}
        />
      </div>

      {referredBy === "Other" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-l-2 border-[var(--brand-primary)] pl-6 py-2">
          <ApplicationInput
            label="Referral Name"
            {...register("referralName", {
              required: "Referral name is required",
            })}
            error={errors.referralName?.message}
            placeholder="Who referred you?"
          />
          <ApplicationInput
            label="Referral Contact"
            {...register("referralContact", {
              required: "Referral contact is required",
            })}
            error={errors.referralContact?.message}
            placeholder="Phone or email"
          />
        </div>
      )}

      <StepNavigation onNext={handleNext} onBack={onPrev} isFirst={true} />
    </div>
  );
};
