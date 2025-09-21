/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: false,
  },
  output: undefined,
  trailingSlash: false,
  swcMinify: false,
  reactStrictMode: false,
}

module.exports = nextConfig
