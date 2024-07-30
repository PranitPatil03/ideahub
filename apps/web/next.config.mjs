/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['pbs.twimg.com', 'ph-avatars.imgix.net'],
  },
};

export default nextConfig;
