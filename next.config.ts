import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    localPatterns: [
      {
        pathname: 'src/assets/images/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
