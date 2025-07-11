import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Generate source maps for debugging
  productionBrowserSourceMaps: false,
};

export default nextConfig;
