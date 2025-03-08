/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/redirect/livethemes",
        destination: "https://livethemes.vercel.app",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
