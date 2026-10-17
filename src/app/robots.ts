import type { MetadataRoute } from 'next'
import { serverEnv } from '@/lib/serverEnv'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },

    sitemap: `${serverEnv.URL}/sitemap.xml`
  }
}
