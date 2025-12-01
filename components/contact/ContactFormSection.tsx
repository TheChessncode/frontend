import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import InterestSelector from './InterestSelector';
import ContactForm from './ContactForm';
import { ContactFormData } from './ContactPage';

interface ContactFormSectionProps {
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  submitStatus: 'idle' | 'success' | 'error';
  setSubmitStatus: React.Dispatch<React.SetStateAction<'idle' | 'success' | 'error'>>;
  activeInterest: string;
  setActiveInterest: React.Dispatch<React.SetStateAction<string>>;
}

export default function ContactFormSection({
  isSubmitting,
  setIsSubmitting,
  submitStatus,
  setSubmitStatus,
  activeInterest,
  setActiveInterest,
}: ContactFormSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: `[${data.interest}] ${data.subject}`,
        message: data.message,
        to_email: 'info@chessncode.org',
        interest: data.interest,
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'Iq1bmhElKpD1yorW_'
      );

      console.log('Email sent successfully:', response);

      setSubmitStatus('success');
      setActiveInterest('');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative py-20 bg-gradient-to-r from-[var(--brand-primary)]/10 to-[var(--brand-primary-light)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[20px] md:mb-16"
        >
          <h2 className="text-5xl font-bold text-[var(--text-primary)] mb-4">
            Start Your <span className="text-[var(--brand-primary)]">Journey</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Tell us about your vision. We&apos;ll handle the technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] xl:gap-12">
          <InterestSelector
            activeInterest={activeInterest}
            setActiveInterest={setActiveInterest}
          />
          <ContactForm
            formRef={formRef}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
            activeInterest={activeInterest}
          />
        </div>
      </div>
    </section>
  );
}