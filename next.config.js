/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/devicon@latest/icons/**',
      },
      {
        // GitHub contribution graph
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
      },
      {
        // GitHub avatars
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
