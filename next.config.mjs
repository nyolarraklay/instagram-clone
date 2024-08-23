/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thumbs.dreamstime.com",
      "upload.wikimedia.org",
      "scontent.fosl1-1.fna.fbcdn.net",
    ],
  },
};

export default nextConfig;
