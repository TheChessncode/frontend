import { Metadata } from 'next';
import PartnersPage from "@/components/partners/PartnersPage";
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Partners - Chessncode',
  description: 'Meet our partners who support Chessncode\'s mission to empower girls and women through chess and coding education. Join us in transforming lives.',
  keywords: [
    'partners',
    'partnerships',
    'sponsors',
    'supporters',
    'collaboration',
    'corporate partners',
  ],
  url: '/partners',
});

export default function page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Partners', url: '/partners' },
  ]);

  const webpageSchema = generateWebPageSchema({
    title: 'Partners - Chessncode',
    description: 'Meet our partners who support Chessncode\'s mission to empower girls and women through chess and coding education.',
    url: '/partners',
  });

  return (
    <>
      <StructuredData data={[breadcrumbSchema, webpageSchema]} />
      <PartnersPage />
    </>
  );
}
