/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [
      "api.loansprouts.com",
      "http://loansprouts.com/",
      "images.unsplash.com",
    ],
  },
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
