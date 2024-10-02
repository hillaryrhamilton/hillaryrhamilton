/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const isProd = process.env.NODE_ENV === 'production'; // Checks if it's in production

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'atsport.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
  // Added configuration for GitHub Pages
  output: 'export', // Ensures the app is exported as static files
  basePath: isProd ? '/<your-repository-name>' : '', // Adds basePath only in production
  trailingSlash: true, // Ensures URLs have trailing slashes for GitHub Pages compatibility
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
