/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@square/web-sdk'])

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
      domains: ['images.unsplash.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.images.unsplash.com',
        },
      ],
    },
  },
}

// module.exports = nextConfig
module.exports = withTM(nextConfig)
