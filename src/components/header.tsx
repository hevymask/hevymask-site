import { cn } from 'cn'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import type { Route } from 'next'

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
    <header className={cn('py-6 px-3 w-full flex items-center sticky', className)}>
      <div className='ml-auto flex items-center'>
        {headerLinks.map((linkData, index) => (
          <Link key={index} href={linkData.link}>
            <span className={cn(buttonVariants({ variant: 'link' }), 'inline-block text-sm md:text-md cursor-pointer')}>
              {linkData.name}
            </span>
          </Link>
        ))}
      </div>
    </header>
  )
}
