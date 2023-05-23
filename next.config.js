/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
