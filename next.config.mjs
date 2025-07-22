/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*",
      },
    ];
  },
  images: {
    domains: [
      "via.placeholder.com",
      "img.freepik.com",
      "stock.adobe.com",
      "as2.ftcdn.net", // corrigido o domínio correto para imagens
      "localhost",
    ],
  },
};

export default nextConfig;
