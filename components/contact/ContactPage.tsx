"use client";

import { useState } from 'react';
import PublicPageContainer from '../ui/PublicPageContainer';
import HeroSection from './HeroSection';
import ContactFormSection from './ContactFormSection';
import ContactInfoSection from './ContactInfoSection';
import CtaSection from './CtaSection';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  interest: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeInterest, setActiveInterest] = useState<string>('');

  return (
    <PublicPageContainer>
      <HeroSection />
      <ContactFormSection
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        submitStatus={submitStatus}
        setSubmitStatus={setSubmitStatus}
        activeInterest={activeInterest}
        setActiveInterest={setActiveInterest}
      />
      <ContactInfoSection />
      <CtaSection />
    </PublicPageContainer>
  );
}