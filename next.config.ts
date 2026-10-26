import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css'
      }
    }
  },

  images: {
    unoptimized: true,
  },

  output: 'export',
  typedRoutes: true
}

export default nextConfig
