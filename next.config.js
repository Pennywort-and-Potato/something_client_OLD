/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.imgur.com', 'i.dummyjson.com'],
  },
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://api:4000/:path*',
      }
    ]
  },
}

module.exports = nextConfig
