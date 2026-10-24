import type { Metadata } from 'next'
import { projectConfig } from '@/lib/projectConfig'

// Components
import {
  FirstSectionBackground,
  Headline,
  DownButton,
  DropElement,
  Header
} from '@/components/provider/root'

export const metadata: Metadata = (() => {
  return {
    title: `${projectConfig.headline} - ${projectConfig.appName}`
  }
})()

export default function() {
  return (
    <>
      <Header />

      <main>
        <DownButton />

        {/* First Section */}
        <div className='min-h-svh flex flex-col justify-center ml-5 md:ml-10'>
          <FirstSectionBackground />
          <Headline />
        </div>

        <DropElement>
          {/* Secound Section */}
          <div className='min-h-svh flex flex-col justify-center' id='secoundSection'>

          </div>
        </DropElement>
      </main>
    </>
  )
}
