import type { Metadata } from 'next'

// Env
import { serverEnv } from '@/lib/serverEnv'
import { clientEnv } from '@/lib/clientEnv'

// Components
import { BackgroundAnimation, TitleAnimation, DownButton } from '@/components/page/root'
import { Header } from '@/components/page/root'

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
      
      <div className='bg-foreground/30 size-full absolute inset-0 -z-20' />
      <BackgroundAnimation />

      <div className='min-h-svh flex items-center pl-5 md:pl-10'>
        <h1 className='flex flex-col text-5xl md:text-8xl'>
          <TitleAnimation />
        </h1>
      </div>

      <div className='border mx-5' />

      <div className='py-[10%] flex items-center' id='secound'>
        <div className='w-[50%] flex justify-center'>
          <h1 className='text-3xl'>Who am I?</h1>
        </div>

        <div className='w-[50%] flex justify-center'>
          <div className='w-[50%]'>
            <h2 className='text-2xl'>I am a student in Japan and work as artist. I explore a wide range of digital fields, including web design, 3D modeling, games, apps, and music, in my own way.</h2>
          </div>
        </div>
      </div>
    </main>
  )
}
