import type { Metadata } from 'next'
import { cn } from 'cn'

// Env
import { serverEnv } from '@/lib/serverEnv'
import { clientEnv } from '@/lib/clientEnv'

// Design
import { Oxanium } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme'
import '@/index.css'

const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: serverEnv.URL,

  title: {
    default: serverEnv.TITLE,
    template: `%s - ${serverEnv.TITLE}`,
  },

  description: serverEnv.DESCRIPTION,

  authors: {
    name: serverEnv.NAME
  },

  keywords: [serverEnv.NAME, 'Portfolio', 'The anonymous digital artist'],

  openGraph: {
    title: clientEnv.NEXT_PUBLIC_SUBTITLE,
    description: serverEnv.DESCRIPTION,
    siteName: serverEnv.TITLE,
    locale: "en_US",
    type: 'profile'
  },

  twitter: {
    site: serverEnv.TWITTER_ACCOUNT,
    creator: serverEnv.TWITTER_ACCOUNT,
    description: serverEnv.DESCRIPTION,
    title: clientEnv.NEXT_PUBLIC_SUBTITLE,
    card: 'summary'
  }
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={cn('h-full antialiased', oxanium.variable)}

      // Because of ThemeProvider
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col'>
        <ThemeProvider />
        {children}
      </body>
    </html>
  )
}
