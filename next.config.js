/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com', 'img.seadn.io']
  },
}

module.exports = nextConfig
