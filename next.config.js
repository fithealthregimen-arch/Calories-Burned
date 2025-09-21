/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable static export
  output: undefined,

  // Disable all static optimization features
  trailingSlash: false,
  swcMinify: false,
  optimizeFonts: false,
  poweredByHeader: false,

  experimental: {
    optimizeCss: false,
    esmExternals: false,
    serverComponentsExternalPackages: [],
    forceSwcTransforms: false,
  },

  // Images - disable optimization
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },

  // Build settings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Force dynamic rendering for all pages
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },

  // Disable static optimization globally
  staticPageGenerationTimeout: 0,
}

module.exports = nextConfig
