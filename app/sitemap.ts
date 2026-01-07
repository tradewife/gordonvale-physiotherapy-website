import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.gordonvalephysiotherapy.com'

const routes = [
  '',
  '/about',
  '/services',
  '/dizzy-clinic',
  '/ndis',
  '/products',
  '/telehealth',
  '/contact',
  '/blog',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
