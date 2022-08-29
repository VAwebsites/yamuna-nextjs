/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vajra.bycomsolutions.com','yamuna-bucket.s3.ap-south-1.amazonaws.com','firebasestorage.googleapis.com','yamunaashacity.com','127.0.0.1','admin.yamunaashacity.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
