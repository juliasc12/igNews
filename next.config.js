/** @type {import('next').NextConfig} */


const result = require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: result.parsed,
}

module.exports = nextConfig
