import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Ignora los errores de ESLint al hacer "next build"
  },
  typescript: {
    ignoreBuildErrors: true, // ⬅️ Ignora TODOS los errores de TypeScript
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
