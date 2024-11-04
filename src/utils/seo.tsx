import { Metadata } from "next";

import { siteConfig } from "@/config/site";

type OpenGraph = Metadata["openGraph"];

export const generateOpenGraph = (metadata: OpenGraph): OpenGraph => {
  return {
    type: "website",
    locale: "en",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: "/",
    images: [
      {
        url: "https://cms-admin.itsupport360.info/uploads/ads/1716757007-photo-6240297837539737134-y.jpeg",
        width: 800,
        height: 400,
        alt: "Open Graph Image",
        type: "image/jpeg",
      },
    ],
    ...metadata,
  };
};
