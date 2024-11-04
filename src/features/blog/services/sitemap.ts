import { z } from "zod";

import { privateEnv } from "@/config/private-env";
import { publicEnv } from "@/config/public-env";

export const getSitemapData = async () => {
  const headers = new Headers();
  headers.append("accept", "application/json");
  headers.append("Origin", publicEnv.DEPLOY_URL);

  const response = await fetch(`${privateEnv.API_URL}/api/generate-sitemap`, {
    method: "GET",
    headers: headers,
    redirect: "follow",
    next: {
      revalidate: 60, // 1 minute
      tags: ["sitemap"],
    },
  });

  const data = await response.json();

  const parsedData = ResponseSchema.safeParse(data);
  if (!parsedData.success) {
    console.error(parsedData.error.errors);
    throw new Error(
      "The response from the server ('/api/generate-sitemap') was not in the expected format."
    );
  }

  return parsedData.data;
};

const SitemapSchema = z.object({
  slug: z.number(),
  latMod: z.string(),
});

const ResponseSchema = z.array(z.array(SitemapSchema));
