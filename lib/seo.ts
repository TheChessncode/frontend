/**
 * SEO Utilities and Metadata Generators
 * 
 * This module provides comprehensive SEO functionality including:
 * - Dynamic metadata generation
 * - Open Graph tags
 * - Twitter Cards
 * - Structured data (JSON-LD)
 * - Social media preview optimization
 */

import { Metadata } from 'next';
import { Student } from '@/constants/studentsData';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chessncode.com';
const siteName = 'Chessncode';
const defaultDescription = 'Chessncode combines chess strategy with coding education. Learn digital literacy, programming fundamentals, and chess tactics through interactive lessons and exercises.';
const defaultKeywords = [
  'chess learning',
  'coding education',
  'digital literacy',
  'programming for beginners',
  'chess strategy',
  'coding tutorials',
  'web development',
  'chess tactics',
  'programming courses',
  'chess and coding',
  'STEM education',
  'learn to code',
  'girls in tech',
  'women in coding',
  'chess training',
  'data science education',
  'machine learning courses',
];

export interface SEOConfig {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

/**
 * Generate comprehensive metadata for any page
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description = defaultDescription,
    keywords = defaultKeywords,
    image,
    imageAlt,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    noindex = false,
    nofollow = false,
    canonical,
  } = config;

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const pageUrl = url ? `${baseUrl}${url}` : baseUrl;
  const ogImage = image 
    ? `${baseUrl}${image.startsWith('/') ? image : `/${image}`}`
    : `${baseUrl}/og-image.jpg`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : pageUrl;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: 'Chessncode Team' }],
    creator: 'Chessncode',
    publisher: 'Chessncode',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: pageUrl,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt || title,
          type: 'image/jpeg',
          secureUrl: ogImage,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@chessncode',
      site: '@chessncode',
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'education',
    classification: 'Educational Technology',
  };
}

/**
 * Generate metadata for scholar/student pages
 * Includes student-specific information and images
 */
export function generateScholarMetadata(student: Student): Metadata {
  const scholarUrl = `/projects/${student.slug}`;
  const scholarImage = `${baseUrl}${student.image}`;
  const scholarTitle = `${student.name} - ${student.chessBackground} | Chessncode Scholar`;
  const scholarDescription = `${student.name} is a Chessncode Scholar ${student.chessBackground}. ${student.quote} Currently working towards: ${student.currentGoal}.`;
  
  const scholarKeywords = [
    student.name,
    'Chessncode Scholar',
    student.chessBackground,
    student.currentGoal,
    'chess and coding',
    'women in tech',
    'girls in STEM',
    'coding education',
    'chess training',
    'data science',
    'data analysis',
    'machine learning',
  ];

  return generateMetadata({
    title: scholarTitle,
    description: scholarDescription,
    keywords: scholarKeywords,
    image: student.image,
    imageAlt: `${student.name} - Chessncode Scholar`,
    url: scholarUrl,
    type: 'profile',
    canonical: scholarUrl,
  });
}

/**
 * Generate Organization structured data (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteName,
    description: defaultDescription,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    sameAs: [
      'https://twitter.com/chessncode',
      'https://linkedin.com/company/chessncode',
      'https://github.com/chessncode',
      'https://facebook.com/chessncode',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@chessncode.org',
      contactType: 'customer service',
      areaServed: 'Worldwide',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    knowsAbout: [
      'Chess Strategy',
      'Programming Education',
      'Digital Literacy',
      'Web Development',
      'Coding Tutorials',
      'Data Science',
      'Machine Learning',
      'STEM Education',
    ],
    offers: {
      '@type': 'Offer',
      category: 'Educational Service',
    },
  };
}

/**
 * Generate WebSite structured data (JSON-LD)
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    description: defaultDescription,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
  };
}

/**
 * Generate BreadcrumbList structured data (JSON-LD)
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Generate Person/Student structured data (JSON-LD) for scholars
 * Note: Only serializes plain data, not React components
 */
export function generateScholarSchema(student: Student) {
  const scholarUrl = `${baseUrl}/projects/${student.slug}`;
  const scholarImage = `${baseUrl}${student.image}`;

  // Build knowsAbout array with curriculum phases (excluding React components)
  const knowsAbout = [
    'Chess Strategy',
    student.currentGoal,
    'Programming',
    'Data Science',
  ];
  
  if (student.curriculum) {
    knowsAbout.push(...student.curriculum.map(phase => phase.phase));
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: student.name,
    description: `${student.chessBackground}. ${student.quote}`,
    image: {
      '@type': 'ImageObject',
      url: scholarImage,
      caption: `${student.name} - Chessncode Scholar`,
    },
    url: scholarUrl,
    jobTitle: student.currentGoal,
    affiliation: {
      '@type': 'EducationalOrganization',
      name: siteName,
      url: baseUrl,
    },
    knowsAbout,
    memberOf: {
      '@type': 'Organization',
      name: 'Chessncode Scholars',
      url: `${baseUrl}/projects`,
    },
  };
}

/**
 * Generate WebPage structured data (JSON-LD)
 */
export function generateWebPageSchema(config: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}) {
  const { title, description, url, image, publishedTime, modifiedTime, author } = config;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${baseUrl}${url}`,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}${image}`,
      },
    }),
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author,
      },
    }),
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: siteName,
    },
  };
}

/**
 * Generate Course/Program structured data (JSON-LD)
 */
export function generateCourseSchema(course: {
  name: string;
  description: string;
  url: string;
  provider: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url: `${baseUrl}${course.url}`,
    provider: {
      '@type': 'Organization',
      name: course.provider,
      url: baseUrl,
    },
    ...(course.duration && {
      timeRequired: course.duration,
    }),
    educationalLevel: 'Beginner to Advanced',
    teaches: [
      'Chess Strategy',
      'Programming',
      'Data Science',
      'Machine Learning',
    ],
  };
}

/**
 * Validate image dimensions for social media
 * Returns optimized image URL or default
 */
export function getSocialImage(imagePath?: string): string {
  if (!imagePath) {
    return `${baseUrl}/og-image.jpg`;
  }
  
  const fullPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${fullPath}`;
}

/**
 * Get absolute URL for any path
 */
export function getAbsoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

