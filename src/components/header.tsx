'use client'

import { cn } from 'cn'
import { motion } from 'motion/react'

import type { Route } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export function Header({ delay, className }: { delay?: number, className?: string }) {
  const links: { link: Route, name: string }[] = [
    {
      link: '/',
      name: 'Home'
    },

    {
      link: '/',
      name: 'Product'
    },

    {
      link: '/',
      name: 'Blog'
    },

    {
      link: '/',
      name: 'Info'
    }
  ]

  return (
    <motion.header
      className={cn('p-6 w-full flex items-center sticky', className)}
    >
      <div className='ml-auto flex items-center'>
        {links.map((linkData, index) => (
          <Link key={index} href={linkData.link}>
            <motion.span
              className={cn(buttonVariants({ variant: 'link' }), 'inline-block md:text-md cursor-pointer')}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (delay ?? 0) + (index * 0.1), duration: 0.5, ease: [0, 1, 0, 1] }}
            >
              {linkData.name}
            </motion.span>
          </Link>
        ))}
      </div>
    </motion.header>
  )
}
