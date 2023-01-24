/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // {
      //   source: '/api/',
      //   destination: 'http://api:3000/',
      // },
      {
        source: '/api/:path*',
        destination: 'http://api:3000/:path*',
      }
    ]
  },
}

module.exports = nextConfig
