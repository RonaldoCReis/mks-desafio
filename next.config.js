/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // assetPrefix: process.env.NODE_ENV === 'production' ? '' : '/',
  assetPrefix: '/',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
