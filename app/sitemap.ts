import { MetadataRoute } from 'next';
import { getAllStudents } from '@/constants/studentsData';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chessncode.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastModified = now.toISOString().split('T')[0];

  // Core pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const students = getAllStudents();
  const scholarRoutes: MetadataRoute.Sitemap = students.map((student) => ({
    url: `${baseUrl}/projects/${student.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...coreRoutes, ...scholarRoutes];
}