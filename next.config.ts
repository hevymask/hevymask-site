import type { NextConfig } from 'next'

const config: NextConfig = {
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css'
      }
    }
  },

  // SSG settings
  output: 'export',
  images: {
    unoptimized: true,
  },

  typedRoutes: true
}

export default config
