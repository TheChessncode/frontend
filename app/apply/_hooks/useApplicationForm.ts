import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

export type ApplicationFormData = {
  // Step 1: Personal
  fullName: string;
  email: string;
  describeYourself: string;
  personalStrengths: string;
  growthExpectations: string;

  // Step 2: Professional
  careerAspiration: string;
  techSkillsInterest: string;
  communityContribution: string;

  // Step 3: Financial
  scholarshipImpact: string;
  financialBarriers: string;
  employmentImpact: string;

  // Step 4: Social Media
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;

  // Step 5: Motivation Video & Commitment
  videoLink?: string;
  commitmentConfirmed: boolean;
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
      email: "",
      describeYourself: "",
      personalStrengths: "",
      growthExpectations: "",
      careerAspiration: "",
      techSkillsInterest: "",
      communityContribution: "",
      scholarshipImpact: "",
      financialBarriers: "",
      employmentImpact: "",
      linkedin: "",
      github: "",
      twitter: "",
      instagram: "",
      videoLink: "",
      commitmentConfirmed: false,
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
