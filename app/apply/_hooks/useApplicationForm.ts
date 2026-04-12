import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

export type ApplicationFormData = {
  // Section 1: Personal Information
  fullName: string;
  dateOfBirth: string;
  country: string;
  cityState: string;
  email: string;
  whatsAppNumber: string;
  referredBy: string;
  referralName?: string;
  referralContact?: string;

  // Section 2: Chess Background
  chessDuration: string;
  chessInvolvement: string;
  fideRating?: string;
  chessReflection: string;

  // Section 3: Technology and Career
  techExperience: string;
  preferredCareerTrack: string;
  whyTechCareer: string;
  successDefinition: string;

  // Section 4: Commitment and Availability
  hoursAvailable: string;
  accessToDevice: string;
  availabilityConstraints: string;

  // Section 5: Declaration
  signature: string; // Base64 or path
  declarationDate: string;
};

export type ApplicationStep = 1 | 2 | 3 | 4 | 5 | 6;

export interface UseApplicationForm {
  form: UseFormReturn<ApplicationFormData>;
  currentStep: ApplicationStep;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: ApplicationStep) => void;
  isLastStep: boolean;
}

export const useApplicationForm = (): UseApplicationForm => {
  const [currentStep, setCurrentStep] = useState<ApplicationStep>(1);
  const [isEditingFromReview, setIsEditingFromReview] = useState(false);

  const form = useForm<ApplicationFormData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      country: "",
      cityState: "",
      email: "",
      whatsAppNumber: "",
      referredBy: "",
      referralName: "",
      referralContact: "",
      chessDuration: "",
      chessInvolvement: "",
      fideRating: "",
      chessReflection: "",
      techExperience: "",
      preferredCareerTrack: "",
      whyTechCareer: "",
      successDefinition: "",
      hoursAvailable: "",
      accessToDevice: "",
      availabilityConstraints: "",
      signature: "",
      declarationDate: "",
    },
  });

  const nextStep = () => {
    if (isEditingFromReview) {
      setCurrentStep(6);
      setIsEditingFromReview(false);
      return;
    }

    if (currentStep < 6)
      setCurrentStep((prev) => (prev + 1) as ApplicationStep);
  };

  const prevStep = () => {
    if (currentStep > 1)
      setCurrentStep((prev) => (prev - 1) as ApplicationStep);
  };

  const goToStep = (step: ApplicationStep) => {
    if (currentStep === 6 && step < 6) {
      setIsEditingFromReview(true);
    }
    setCurrentStep(step);
  };

  const isLastStep = currentStep === 6;

  return {
    form,
    currentStep,
    nextStep,
    prevStep,
    goToStep,
    isLastStep,
  };
};
