import type { Metadata } from 'next'

// Env
import { serverEnv } from '@/lib/serverEnv'
import { clientEnv } from '@/lib/clientEnv'

// Components
import { Background, Title, DownButton, DropElement } from '@/components/page/root'
import { Header } from '@/components/page/root'

export const metadata: Metadata = (() => {
  return {
    title: `${clientEnv.NEXT_PUBLIC_SUBTITLE} - ${serverEnv.TITLE}`
  }
})()

export default function Page() {
  return (
    <main className='overflow-x-hidden'>
      <Header />
      <DownButton />
      
      <div className='bg-foreground/30 size-full absolute inset-0 -z-20' />
      <Background />

      <div className='min-h-svh flex flex-col justify-center ml-5 md:ml-10'>
        <h1 className='flex flex-col text-5xl md:text-8xl'>
          <Title />
        </h1>
      </div>

      <DropElement>
        <div className='border mx-5' />

        <div className='min-h-svh flex flex-col justify-center' id='secound'>

        </div>
      </DropElement>
    </main>
  )
}
