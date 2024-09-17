/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/api/(.*)", // Terapkan untuk semua endpoint di bawah /api
          headers: [
            {
              key: "Access-Control-Allow-Credentials",
              value: "true",
            },
            {
              key: "Access-Control-Allow-Origin",
              value: "http://localhost:3000", // Ganti dengan domain yang diizinkan
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,POST,PUT,DELETE,OPTIONS", // Metode yang diizinkan
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Content-Type, Authorization", // Header yang diizinkan
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  