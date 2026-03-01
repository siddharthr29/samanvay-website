import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "radix-ui",
      "@notionhq/client",
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
