import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental',
  },
  eslint: {
    ignoreDuringBuilds: true, // Esta línea desactiva ESLint en la compilación
  },
};

export default nextConfig;
