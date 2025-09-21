/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
