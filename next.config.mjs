/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: "", // Replace with your GitHub repository name
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;
