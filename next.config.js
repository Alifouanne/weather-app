/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.weatherbit.io",
        port: "",
        pathname: "/static/img/icons/**",
      },
    ],
  },
};

module.exports = nextConfig
