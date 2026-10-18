'use client'

import { cn } from "cn"
import { type HTMLMotionProps, motion } from "motion/react"

export function DropLeftAnimation({ children, className, ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: [0, 1, 0, 1] }}
      viewport={{ amount: 0.8, once: true }}
      className={cn('inline-block', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function DropRightAnimation({ children, className, ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: [0, 1, 0, 1] }}
      viewport={{ amount: 0.8, once: true }}
      className={cn('inline-block', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
