import type { NextConfig } from "next";

const nextConfig: NextConfig & { experimental?: { appDir?: boolean } } = {
  reactStrictMode: true,
  experimental: {
    appDir: true, 
  },
};

export default nextConfig;
