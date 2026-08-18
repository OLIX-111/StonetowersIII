import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.lromanarealestate.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
