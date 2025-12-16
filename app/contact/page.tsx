import { Metadata } from 'next';
import ContactPage from '@/components/contact/ContactPage';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Contact Chessncode - Get in Touch',
  description: 'Contact Chessncode to learn more about our programs, partnerships, or sponsorship opportunities. Reach out to empower girls and women through chess and coding education.',
  keywords: [
    'contact chessncode',
    'get in touch',
    'partnerships',
    'sponsorship',
    'support',
    'contact us',
  ],
  url: '/contact',
});

export default function page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  const webpageSchema = generateWebPageSchema({
    title: 'Contact Chessncode',
    description: 'Contact Chessncode to learn more about our programs, partnerships, or sponsorship opportunities.',
    url: '/contact',
  });

  return (
    <>
      <StructuredData data={[breadcrumbSchema, webpageSchema]} />
      <ContactPage/>
    </>
  );
}
