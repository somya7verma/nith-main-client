import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* Enforce standalone output for Docker */
  output: 'standalone',

  /* Configure image handling */
  images: {
    dangerouslyAllowSVG: true,
  },

  /* Add other config options here */
};

export default nextConfig;
