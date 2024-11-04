/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEPLOY_URL || "http://localhost:3000",
  generateRobotsTxt: false,
  outDir: "out",
  sitemapBaseFileName : "sitemap_index",
};
