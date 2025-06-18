import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent*.cdninstagram.com', // Use wildcard (*) for subdomains
        port: '',
        pathname: '**', // Allow all paths
      },
    ],
  },
}

export default config