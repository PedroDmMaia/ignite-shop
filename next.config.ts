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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
      },
    ],
  },
}

export default nextConfig
