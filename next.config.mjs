/** @type {import('next').NextConfig} */
const nextConfig = {
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
