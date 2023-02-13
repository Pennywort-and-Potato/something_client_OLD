/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.imgur.com'],
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
