/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  env: {
    API_KEY: process.env.NEXT_APP_API_KEY,
  }
}



module.exports = nextConfig
