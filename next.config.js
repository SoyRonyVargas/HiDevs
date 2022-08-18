/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'https://play-lh.googleusercontent.com',
      'https://play-lh.googleusercontent.com/miagFY2NtUmdu3Uy7o2bDDSL4pewRPa9k5PBa_EE7IlSHh8DZ4cV2ZvTi72cBMAo8o0'
    ]
  }
}

module.exports = nextConfig
