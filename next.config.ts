import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // to only allow the placeholder svg.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  }, 
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
