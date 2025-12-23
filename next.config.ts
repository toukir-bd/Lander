/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,        // 👈 THIS is the key
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
