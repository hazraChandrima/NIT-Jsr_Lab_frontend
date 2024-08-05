/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nitjsr.ac.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
