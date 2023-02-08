/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['statics.pancake.vn'],
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
