import type { Metadata } from 'next'

// Env
import { serverEnv } from '@/lib/serverEnv'
import { clientEnv } from '@/lib/clientEnv'

// Components
import {
  FirstSectionBackground,
  FirstSectionTitle,
  DownButton,
  DropElement,
  Header
} from '@/components/page/root'

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

      {/* First Section */}
      <div className='min-h-svh flex flex-col justify-center ml-5 md:ml-10'>
        <FirstSectionBackground />
        <FirstSectionTitle />
      </div>

      <DropElement>
        {/* Secound Section */}
        <div className='min-h-svh flex flex-col justify-center' id='secoundSection'>
          
        </div>
      </DropElement>
    </main>
  )
}
