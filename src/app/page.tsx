import type { Metadata } from 'next'

// Env
import { serverEnv } from '@/lib/serverEnv'
import { clientEnv } from '@/lib/clientEnv'

// Components
import { BackgroundAnimation, TitleAnimation, DownButton } from '@/components/page/rootPage'
import { Header } from '@/components/page/rootPage'

export const metadata: Metadata = (() => {
  return {
    title: `${clientEnv.NEXT_PUBLIC_SUBTITLE} - ${serverEnv.TITLE}`
  }
})()

export default function Page() {
  return (
    <main>
      <Header />
      <DownButton />

      <div className='min-h-svh flex items-center pl-5 md:pl-10'>
        <BackgroundAnimation />

        <h1 className='flex flex-col text-5xl md:text-8xl'>
          <TitleAnimation />
        </h1>
      </div>
    </main>
  )
}
