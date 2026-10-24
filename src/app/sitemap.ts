import type { MetadataRoute } from 'next'
import { projectConfig } from '@/lib/projectConfig'

export const dynamic = 'force-static'

export default function(): MetadataRoute.Sitemap {
  return [
    {
      url: projectConfig.url,
      lastModified: new Date('2026-10-11')
    }
  ]
}
