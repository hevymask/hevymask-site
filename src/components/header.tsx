import { cn } from 'cn'
import { buttonVariants } from '@/components/ui/button'

import type { Route } from 'next'
import Link from 'next/link'

export const headerLinks: { link: Route, name: string }[] = [
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

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn('py-3 pr-4 w-full flex items-center sticky', className)}>
      <div className='ml-auto flex items-center gap-3'>
        {headerLinks.map((data, index) => (
          <Link key={index} href={data.link}>
            <span
              className={cn(
                buttonVariants({ variant: 'link' }),
                'text-sm p-0'
              )}
            >
              {data.name}
            </span>
          </Link>
        ))}
      </div>
    </header>
  )
}
