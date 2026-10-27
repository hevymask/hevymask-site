'use client'

import { cn } from 'cn'
import { projectConfig } from '@/lib/projectConfig'
import { headerLinks } from '@/components/header'
import { buttonVariants } from '@/components/ui/button'

// Hooks
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

// Components
import Link from 'next/link'
import { motion } from 'motion/react'
import { FaArrowDown, FaBox } from 'react-icons/fa6'
import { MdOutlineQueueMusic } from 'react-icons/md'

const headlineArray = projectConfig.headline.split(' ')
const headlineDelay = 0.6

// Leave a gap of one space
const headlineAnimationTime = (1 + headlineArray.length + 1) * headlineDelay

function Header() {
  return (
    <header className={cn('py-6 px-3 w-full flex items-center sticky', 'fixed')}>
      <div className='ml-auto flex items-center'>
        {headerLinks.map((headerLinkData, headerLinksIndex) => (
          <Link key={headerLinksIndex} href={headerLinkData.link}>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: headlineAnimationTime + (headerLinksIndex * 0.1),
                duration: 1,
                ease: [0, 1, 0, 1]
              }}

              className={cn(
                buttonVariants({ variant: 'link' }),
                'inline-block text-sm md:text-md cursor-pointer'
              )}
            >
              {headerLinkData.name}
            </motion.span>
          </Link>
        ))}
      </div>
    </header>
  )
}

function DownButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}

      transition={{
        duration: 1,
        delay: headlineAnimationTime,
        ease: [0, 1, 0, 1]
      }}

      className={cn(
        buttonVariants({ variant: 'outline' }),
        'absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full my-6 cursor-pointer'
      )}

      onClick={() => {
        // Scroll to secound section
        document.getElementById('secoundSection')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }}
    >
      <FaArrowDown className='size-4' />
    </motion.div>
  )
}

function FirstSectionBackground() {
  return (
    <>
      { /* Background before animation */}
      <div className='bg-foreground/30 size-full absolute inset-0 -z-20' />

      { /* Animation Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        transition={{
          duration: 0.6,
          delay: headlineAnimationTime
        }}

        className='bg-background size-full absolute inset-0 -z-10 flex'
      >
      </motion.div>
    </>
  )
}

function Headline() {
  return (
    <h1 className='flex flex-col text-5xl md:text-7xl lg:text-8xl'>
      {headlineArray.map((word, index) => (
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}

          transition={{
            duration: 0.6,
            delay: (1 + index) * headlineDelay,
            ease: [0, 1, 0, 1]
          }}

          className='inline-block'
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}

function DropElement({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  // Display sections after the second one following subTitleAnimationTime
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, headlineAnimationTime * 1000)

    return () => clearTimeout(timer)
  }, [])

  if (visible) return children
}

function ArtExplain() {
  const isLg = useMediaQuery('(min-width: 1024px)')

  const list: { title: string, description: string }[] = [
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

  return list.map((data, index) => (
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
  ))
}

export function RootProvider() {
  return (
    <>
      <Header />

      <main>

        {/* First Section */}
        <div className='min-h-svh flex flex-col justify-center ml-5 md:ml-10'>
          <FirstSectionBackground />
          <Headline />
          <DownButton />
        </div>

        <DropElement>
          {/* Secound Section */}
          <div className='min-h-svh flex' id='secoundSection'>
            <div className='w-[50%]'></div>
            <div className='w-[50%]'></div>
          </div>

          <div className='justify-center flex flex-col'>
            <h1 className='md:text-4xl mb-10 md:mb-15 mx-auto text-2xl'>My types of art</h1>
            <div className='flex flex-col lg:flex-row justify-around w-[85%] md:w-[65%] mx-auto gap-10'>
              <ArtExplain />
            </div>
          </div>

          <div className='min-h-svh flex flex-col justify-center'>
            <div className='mx-auto w-[90%] md:w-[85%] lg:w-[60%]'>
              <h1 className='md:text-5xl text-2xl'>That’s all for my introduction.</h1>
              <h2 className='md:text-4xl text-lg font-light'>Where would you like to go <span className='text-pink-500'>next</span>?</h2>

              <div className='flex items-center mt-10 ml-auto w-fit'>
                <Link href='/' className={cn(buttonVariants({ variant: 'link' }), 'text-sm md:text-xl')}>Product Page</Link>
                <Link href='/' className={cn(buttonVariants({ variant: 'link' }), 'text-sm md:text-xl')}>Favorite Music</Link>
              </div>
            </div>
          </div>
        </DropElement>
      </main>
    </>
  )
}
