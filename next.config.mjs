/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "vm-6o3yotj2iiycdz0gsmfc5m0j.vusercontent.net",
  ],
};

export default nextConfig;
