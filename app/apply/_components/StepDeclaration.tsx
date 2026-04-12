"use client";

import React from "react";
import { UseFormReturn, Controller } from "react-hook-form";
import { ApplicationFormData } from "../_hooks/useApplicationForm";
import { ApplicationInput, SignaturePad } from "./FormFields";
import { StepNavigation } from "./StepNavigation";

interface StepProps {
  form: UseFormReturn<ApplicationFormData>;
  onNext: () => void;
  onPrev: () => void;
}

export const StepDeclaration = ({ form, onNext, onPrev }: StepProps) => {
  const {
    register,
    control,
    trigger,
    formState: { errors },
  } = form;

  const handleNext = async () => {
    const isValid = await trigger(["signature", "declarationDate"]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Declaration
        </h2>
        <p className="text-[var(--text-secondary)]">
          Read carefully before signing.
        </p>
      </div>

      <div className="p-6 bg-[var(--bg-secondary)]/50 rounded-2xl border border-[var(--border-primary)] italic text-[var(--text-secondary)] leading-relaxed">
        “I confirm that all information in this application is true and
        accurate. I understand that ChessNcode selects scholars based on
        motivation and commitment, and I agree to honor the program’s
        requirements, including weekly study commitments and the pay-it-forward
        pledge, if accepted.”
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <Controller
          name="signature"
          control={control}
          rules={{ required: "Signature is required" }}
          render={({ field }) => (
            <SignaturePad
              label="Signature"
              value={field.value}
              onChange={field.onChange}
              error={errors.signature?.message}
            />
          )}
        />
        <ApplicationInput
          label="Date"
          type="date"
          {...register("declarationDate", { required: "Date is required" })}
          error={errors.declarationDate?.message}
        />
      </div>

      <StepNavigation onNext={handleNext} onBack={onPrev} nextLabel="Proceed" />
    </div>
  );
};
