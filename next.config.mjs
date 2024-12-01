/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cdn.sanity.io"], // Add your domains for image optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    unoptimized: true, // Disable image optimization for development
  },
  typescript: {
    ignoreBuildErrors: true, // Skip build errors during development
  },
  rewrites: async () => [
    {
      source: "/:locale/_next/:path*",
      destination: "/_next/:path*",
    },
    {
      source: "/:locale/static/:path*",
      destination: "/static/:path*",
    },
    {
      source: "/:locale/images/:path*",
      destination: "/images/:path*",
    },
    {
      source: "/:locale/favicon.ico",
      destination: "/favicon.ico",
    },
  ],
};

export default nextConfig;
