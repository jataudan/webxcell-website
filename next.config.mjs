/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: { styledComponents: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "cakeshares.s3.us-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "ingenious-fellowship-fbe72833ba.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
