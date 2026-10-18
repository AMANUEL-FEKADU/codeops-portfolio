/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "addis-eats-backend.onrender.com",
      },
    ],
  },
};

export default nextConfig;
