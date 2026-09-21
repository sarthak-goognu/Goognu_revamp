import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Your GitHub repository name
  basePath: "/Goognu_revamp",

  // Required when using GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;