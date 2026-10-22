'use client'

import { cn } from 'cn'
import { clientEnv } from '@/lib/clientEnv'
import { mySkills } from '@/lib/skills'
import { headerLinks } from '@/components/header'
import { buttonVariants } from '@/components/ui/button'

// Hooks
import { useState, useEffect } from 'react'

// Components
import Link from 'next/link'
import { motion } from 'motion/react'
import { FaArrowDown } from 'react-icons/fa6'

const subtitleArray = clientEnv.NEXT_PUBLIC_SUBTITLE.split(' ')
const subtitleDelay = 0.5

// Leave a gap of one space on each side
const subtitleAnimationTime = (1 + subtitleArray.length + 1) * subtitleDelay

export function Header() {
  return (
    <header className={cn('p-6 w-full flex items-center sticky', 'fixed')}>
      <div className='ml-auto flex items-center'>
        {headerLinks.map((headerLinkData, headerLinksIndex) => (
          <Link key={headerLinksIndex} href={headerLinkData.link}>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: subtitleAnimationTime + (headerLinksIndex * 0.1),
                duration: 1,
                ease: [0, 1, 0, 1]
              }}

              className={cn(
                buttonVariants({ variant: 'link' }),
                'inline-block md:text-md cursor-pointer'
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

export function DownButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}

      transition={{
        duration: 1.5,
        delay: subtitleAnimationTime,
        ease: [0, 1, 0, 1]
      }}

      className={cn(
        buttonVariants({ variant: 'outline' }),
        'absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full my-3 md:my-6 cursor-pointer'
      )}

      onClick={() => {
        // Scroll to secound section
        document.getElementById('secoundSection')?.scrollIntoView({
          behavior: 'smooth'
        })
      }}
    >
      <FaArrowDown className='size-4' />
    </motion.div>
  )
}

export function FirstSectionBackground() {
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
          delay: subtitleAnimationTime
        }}

        className='bg-background size-full absolute inset-0 -z-10 flex'
      >
      </motion.div>
    </>
  )
}

export function FirstSectionTitle() {
  return (
    <h1 className='flex flex-col text-5xl md:text-8xl'>
      {subtitleArray.map((word, index) => (
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}

          transition={{
            duration: 0.6,
            delay: (1 + index) * subtitleDelay,
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

export function DropElement({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  // Display sections after the second one following subTitleAnimationTime
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, subtitleAnimationTime * 1000)

    return () => clearTimeout(timer)
  }, [])

  if (visible) return children
}
