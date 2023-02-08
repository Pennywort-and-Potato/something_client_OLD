/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.imgur.com'],
  },
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
