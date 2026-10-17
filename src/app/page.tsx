import type { Metadata } from 'next'
import { env } from '@/lib/env'
import { BackgroundAnimation, TitleAnimation } from '@/components/provider/rootPage'

export const metadata: Metadata = (() => {
  return {
    title: `${env.SUBTITLE} - ${env.TITLE}`
  }
})()

export default function Page() {
  const subtitle = env.SUBTITLE.split(' ').map((word, index) => ({ word, index }))
  const lastSubtitleIndex = subtitle.length - 1

  return (
    <main>
      <div className='min-h-svh flex items-center pl-5 md:pl-10'>
        <BackgroundAnimation delay={lastSubtitleIndex} />

        <h1 className='flex flex-col text-5xl md:text-8xl'>
          {subtitle.map(({ word, index }) => (
            <TitleAnimation delay={index * 0.6} key={index}>{word}</TitleAnimation>
          ))}
        </h1>
      </div>
    </main>
  )
}
