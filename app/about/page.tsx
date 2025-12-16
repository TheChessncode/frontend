import { Metadata } from 'next';
import AboutPage from '@/components/about/AboutPage';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'About Chessncode - Our Mission and Vision',
  description: 'Learn about Chessncode\'s mission to empower girls and women through chess and coding education. Discover our story, values, and commitment to transforming 1 million lives by 2035.',
  keywords: [
    'about chessncode',
    'mission',
    'vision',
    'empowerment',
    'education',
    'girls in tech',
    'women in coding',
    'STEM education',
  ],
  url: '/about',
});

export default function About() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  const webpageSchema = generateWebPageSchema({
    title: 'About Chessncode',
    description: 'Learn about Chessncode\'s mission to empower girls and women through chess and coding education.',
    url: '/about',
  });

  return (
    <>
      <StructuredData data={[breadcrumbSchema, webpageSchema]} />
      <AboutPage/>
    </>
  );
}
