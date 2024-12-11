/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.cricbuzz.com',
      },
    ],
    // domains: ['static.cricbuzz.com'],
  },
};
export default nextConfig;