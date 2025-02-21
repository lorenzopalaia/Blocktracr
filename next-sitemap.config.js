module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.blocktracr.lorenzopalaia.it",
  generateRobotsTxt: true,
  // * use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: [
    // ! Default
    "/twitter-image.*",
    "/opengraph-image.*",
    "/icon.*",
    "/apple-icon.*",
    "/sitemap.xml",
    "/robots.txt",
    "/api/*",
    "/_next/*",
    "/_error",
    "/404",
    "/500",
    "/_app",
    "/_document",
    "/_error",
    // ! Custom
    "/login",
    "/dashboard",
    "/account",
  ],
};
