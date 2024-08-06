/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  images: { unoptimized: true },
  assetPrefix: './',
};

export default nextConfig;
