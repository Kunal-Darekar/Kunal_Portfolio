/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/Kunal_Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Kunal_Portfolio/' : ''
}

module.exports = nextConfig
