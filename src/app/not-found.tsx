import type { Metadata } from 'next'

export const metadata: Metadata = (() => {
  const title = 'Not Found'
  const description = "This page doesn't exist."

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  }
})()

export default function Page() {
  return (
    <main className='flex min-h-svh flex-col items-center justify-center p-8'>
      <div className='flex gap-4 items-center'>
        <p className='text-3xl'>404</p>
        <p className='text-2xl'>Not Found</p>
      </div>
    </main>
  )
}
