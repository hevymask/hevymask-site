import type { Metadata } from 'next'
import { cn } from 'cn'
import { projectConfig } from '@/lib/projectConfig'

// Design
import { Oxanium } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme'
import '@/index.css'

const oxanium = Oxanium({ subsets:['latin'], variable:'--font-sans' })

export const metadata: Metadata = {
  metadataBase: projectConfig.deployURL,

  title: {
    default: projectConfig.appName,
    template: `%s - ${projectConfig.appName}`,
  },

  description: projectConfig.description,
  authors: { name: projectConfig.auther },
  keywords: [projectConfig.appName, 'Portfolio'],

  openGraph: {
    title: projectConfig.headline,
    description: projectConfig.description,
    siteName: projectConfig.appName,
    locale: "en_US",
    type: 'profile'
  },

  twitter: {
    description: projectConfig.description,
    title: projectConfig.headline,
    card: 'summary'
  }
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={cn('h-full antialiased font-sans', oxanium.variable)}

      // Because of ThemeProvider
      suppressHydrationWarning
    >
      <body className='min-h-full overflow-x-hidden'>
        <ThemeProvider />
        {children}
      </body>
    </html>
  )
}
