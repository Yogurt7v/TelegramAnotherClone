import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://avatars.githubusercontent.com/u/97165289')],
  },
};

export default nextConfig;
