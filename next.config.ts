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

  // SSG Settings
  output: 'export',
  images: {
    unoptimized: true,
  },

  typedRoutes: true
}

export default config
