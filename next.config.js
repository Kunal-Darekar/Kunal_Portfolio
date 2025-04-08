/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/Kunal_Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Kunal_Portfolio/' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: `${process.env.NODE_ENV === 'production' ? '/Kunal_Portfolio' : ''}/resume`,
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig
