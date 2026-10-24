import type { MetadataRoute } from 'next'
import { projectConfig } from '@/lib/projectConfig'

export const dynamic = 'force-static'

export default function(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },

    sitemap: `${projectConfig.url}/sitemap.xml`
  }
}
