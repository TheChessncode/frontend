import { useState } from "react";
import { ApplicationFormData } from "./useApplicationForm";

export interface UseEmailSubmission {
  submitApplication: (data: ApplicationFormData) => Promise<boolean>;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
}

export const useEmailSubmission = (): UseEmailSubmission => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitApplication = async (
    data: ApplicationFormData,
  ): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@chessncode.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Application: ${data.fullName}`,
            ...data,
          }),
        },
      );

      if (response.ok) {
        setSuccess(true);
        return true;
      }

      const result = await response.json();
      throw new Error(result.message || "Failed to send application");
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An error occurred during submission";
      setError(errorMessage);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitApplication,
    isSubmitting,
    error,
    success,
  };
};
