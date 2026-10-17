import type { MetadataRoute } from 'next'
import { serverEnv } from '@/lib/serverEnv'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: serverEnv.URL,
      lastModified: new Date('2026-10-11')
    }
  ]
}
