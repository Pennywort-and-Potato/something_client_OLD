/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com'],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      // {
      //   source: '/api/',
      //   destination: 'http://api:3000/',
      // },
      {
        source: '/api/:path*',
        destination: 'http://api:4000/:path*',
      }
    ]
  },
}

module.exports = nextConfig
