/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "conexa-films.s3.us-east-005.backblazeb2.com",
      "conexa-peoples.s3.us-east-005.backblazeb2.com",
      "conexa-planets.s3.us-east-005.backblazeb2.com",
      "conexa-starships.s3.us-east-005.backblazeb2.com",
    ],
  },
};

module.exports = nextConfig;
