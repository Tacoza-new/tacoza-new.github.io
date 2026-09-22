const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Static export has no server to run the image optimizer on. Images
  // are pre-compressed in the repo instead (see image-originals/README.md).
  images: { unoptimized: true },
}

module.exports = withContentlayer(nextConfig)
