/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/choudhary-interiors',
  assetPrefix: '/choudhary-interiors/',
}

export default nextConfig
