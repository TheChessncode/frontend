import { Metadata } from 'next';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Our Scholars - Chessncode',
  description: 'Meet our talented Chessncode Scholars transforming their chess skills into tech expertise. Discover their journeys from chess mastery to data science and programming.',
  keywords: [
    'scholars',
    'students',
    'chess scholars',
    'coding students',
    'success stories',
    'student journeys',
    'women in tech',
    'girls in STEM',
  ],
  url: '/projects',
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Scholars', url: '/projects' },
  ]);

  const webpageSchema = generateWebPageSchema({
    title: 'Our Scholars - Chessncode',
    description: 'Meet our talented Chessncode Scholars transforming their chess skills into tech expertise.',
    url: '/projects',
  });

  return (
    <>
      <StructuredData data={[breadcrumbSchema, webpageSchema]} />
      {children}
    </>
  );
}

