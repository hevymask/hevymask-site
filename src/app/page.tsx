import type { Metadata } from 'next'
import { projectConfig } from '@/lib/projectConfig'

import { RootProvider } from '@/components/provider/root'

export const metadata: Metadata = (() => {
  return {
    title: `${projectConfig.headline} - ${projectConfig.appName}`
  }
})()

export default function() {
  return <RootProvider />
}
