/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: 'xep4r1zs',
    NEXT_PUBLIC_SANITY_DATASET: 'production',
    NEXT_PUBLIC_SANITY_API_VERSION: '2023-01-01',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
