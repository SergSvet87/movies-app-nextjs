/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yts.mx',
        // port: '3000',
        // pathname: '/account123/**',
      },
    ],
  },
  // experimental: {
  //   appDir: true,
  // },
}

module.exports = nextConfig
