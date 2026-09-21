import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/goognu-revamp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
