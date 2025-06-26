import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'http://localhost:4000/:path',
      },
    ];
  },
};

export default nextConfig;
