/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  publicRuntimeConfig: {
    API_URL: process.env.NEXT_PUBLIC_API_URL
  }
}