import { MetadataRoute } from "next";

import { publicEnv } from "@/config/public-env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
    ],
    sitemap: `${publicEnv.SITE_URL}/sitemap_index.xml`,
  };
}
