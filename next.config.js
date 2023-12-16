/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    workerThreads: false,
    // other experimental features...
  },
  reactStrictMode: true,
  // other configurations...
};

module.exports = nextConfig;
