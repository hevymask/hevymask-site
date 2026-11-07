'use client'

import { cn } from 'cn'
import { headerLinks } from '@/components/header'
import { buttonVariants } from '@/components/ui/button'
import { projectConfig } from '@/lib/projectConfig'

// Hooks
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

// Components
import Link from 'next/link'
import { motion } from 'motion/react'
import { FaArrowDown } from 'react-icons/fa6'

// fsh = first section headline
const fshArray = projectConfig.headline.split(' ')
const fshDelay = 0.6

// Setting time after the first section headline animation finishes
const animationTime = (1 + fshArray.length + 1) * fshDelay

function Header() {
  return (
    <header className={cn('py-3 pr-4 w-full flex items-center sticky', 'fixed')}>
      <div className='ml-auto flex items-center gap-3'>
        {headerLinks.map((data, index) => (
          <Link key={index} href={data.link}>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: animationTime + (index * 0.1),
                duration: 1,
                ease: [0, 1, 0, 1]
              }}

              className={cn(
                buttonVariants({ variant: 'link' }),
                'text-xs p-0'
              )}
            >
              {data.name}
            </motion.span>
          </Link>
        ))}
      </div>
    </header>
  )
}

function FirstSection() {
  return (
    <div className='min-h-svh flex flex-col justify-center ml-3 md:ml-5'>
      { /* Before Animation Background */}
      <div className='bg-foreground/40 size-full absolute inset-0 -z-20' />

      { /* Animation Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        transition={{
          duration: 0.6,
          delay: animationTime
        }}

        className='bg-background size-full absolute inset-0 -z-10 flex'
      >
      </motion.div>

      {/* Headline */}
      <h1 className='flex flex-col text-5xl md:text-8xl'>
        {fshArray.map((word, index) => (
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}

            transition={{
              duration: 0.6,
              delay: (1 + index) * fshDelay,
              ease: [0, 1, 0, 1]
            }}

            key={index}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Down Button */}
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{
          duration: 1,
          delay: animationTime,
          ease: [0, 1, 0, 1]
        }}

        className={cn(
          buttonVariants({ variant: 'outline' }),
          'absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full my-4 cursor-pointer'
        )}

        onClick={() => {
          // Scroll to secound section
          document.getElementById('secoundSection')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }}
      >
        <FaArrowDown className='size-3.5' />
      </motion.div>
    </div>
  )
}

function DropElement({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, animationTime * 1000)

    return () => clearTimeout(timer)
  }, [])

  if (visible) return children
}

function SecoundSection() {
  const isLg = useMediaQuery('(min-width: 1024px)')
  const explanationList: { title: string, description: string }[] = [
    {
      title: 'Program',
      description: 'The first art I attempted and loved. This art allows for the creation of apps, websites, and systems.'
    },

    {
      title: '3D',
      description: 'The art that gives form to my imagination. This art can speaks my values.'
    },

    {
      title: 'Game Develop',
      description: 'The art I find most difficult. This art reminded me of my long-time wish to make video games.'
    }
  ]

  return (
    <div className='justify-center flex flex-col min-h-svh w-[85%] md:w-[70%] mx-auto' id='secoundSection'>
      <h1 className='md:text-4xl mb-10 md:mb-20 lg:mb-15 text-2xl'>I am the these types of digital artist :)</h1>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-5 md:gap-10 lg:gap-0'>
        {explanationList.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, y: isLg ? 50 : 0, x: !isLg ? -50 : 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}

            transition={{
              duration: 0.4,
              delay: (1 + index) * 0.2,
              ease: [0, 0, 0, 1]
            }}

            key={index}
            className='lg:w-[30%] flex flex-col gap-1'
          >
            <h2 className='md:text-2xl text-lg'>{data.title}</h2>
            <h3 className='text-muted-foreground md:text-lg text-sm'>{data.description}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function RootProvider() {
  return (
    <>
      <Header />
      <main>
        <FirstSection />
        <DropElement>
          <SecoundSection />
        </DropElement>
      </main>
    </>
  )
}
