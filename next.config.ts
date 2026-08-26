import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/product",
        permanent: true,
      },
      {
        source: "/products/:id",
        destination: "/product/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
