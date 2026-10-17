'use client'

import { motion } from 'motion/react'
import { clientEnv } from '@/lib/clientEnv'
import { buttonVariants } from '@/components/ui/button'

// Components
import { Header as LocalHeader } from '@/components/header'
import { FaArrowDown } from 'react-icons/fa6'
import { cn } from 'cn'

const subtitle = clientEnv.NEXT_PUBLIC_SUBTITLE.split(' ')

const delay = 0.6
const animationEndTime = (subtitle.length + 1) * delay

export function BackgroundAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationEndTime }}
      className='absolute bottom-0 right-0 -z-10'
    />
  )
}

export function Header() {
  return (
    <LocalHeader delay={animationEndTime} fixed />
  )
}

export function TitleAnimation() {
  return subtitle.map((word, index) => (
    <motion.span
      key={index}
      className='inline-block'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay * index, ease: [0, 1, 0, 1] }}
    >
      {word}
    </motion.span>
  ))
}

export function DownButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationEndTime, ease: [0, 1, 0, 1] }}
      className={cn(buttonVariants({ variant: 'outline' }), 'fixed bottom-0 left-1/2 -translate-x-1/2 rounded-full my-5 cursor-pointer')}
    >
      <FaArrowDown className='size-4' />
    </motion.div>
  )
}
