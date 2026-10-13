import type { Metadata } from 'next'
import { env } from '@/lib/env'

export const metadata: Metadata = (() => {
  return {
    title: `${env.SUBTITLE} - ${env.TITLE}`
  }
})()

export default function Page() {
  return (
    <main className='min-h-svh'>
      <div className='min-h-svh flex items-center'>
        <div className='p-4 w-[90%] md:p-12 md:w-[70%] lg:w-[50%]'>
          <h1 className='text-4xl md:text-6xl'>{env.SUBTITLE}</h1>
        </div>
      </div>
    </main>
  )
}
