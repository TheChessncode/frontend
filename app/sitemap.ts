import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chessncode.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/partners',
    '/projects',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : route.startsWith('/courses') ? 0.8 : 0.6,
  }))

  return routes
}