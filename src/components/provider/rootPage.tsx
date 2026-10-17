'use client'

import { motion } from 'motion/react'

export function TitleAnimation({ children, delay }: { children: string, delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: [0, 1, 0, 1] }}
    >
      {children}
    </motion.span>
  )
}

export function BackgroundAnimation({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className='absolute inset-0 -z-10'
    />
  )
}
