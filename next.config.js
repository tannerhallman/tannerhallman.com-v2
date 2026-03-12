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
      {
        source: "/meet",
        destination: "https://cal.com/tannerhallman/meet?duration=30",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
