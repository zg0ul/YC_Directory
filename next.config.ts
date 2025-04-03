import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    dangerouslyAllowSVG: true, // to only allow the placeholder svg.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  }
};

export default nextConfig;
