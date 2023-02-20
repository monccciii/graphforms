/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withDotenv = require('next-env')

const withEnv = withDotenv()

module.exports = withEnv({
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
