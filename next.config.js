/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'localhost:4000/',
      },
    ]
  },
}

module.exports = nextConfig
