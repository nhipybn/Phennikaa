/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cho phép kết nối IP nội bộ (LAN)
  allowedDevOrigins: ['192.168.51.246', 'localhost:3000'],

  // Cho phép Next.js tải ảnh từ Vercel Storage
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;