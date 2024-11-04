import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/config/site";
import { publicEnv } from "@/config/public-env";
import { generateOpenGraph } from "@/utils/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.SITE_URL),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  icons: {
    icon: `${publicEnv.BASE_PATH}/logo.png`,
  },
  authors: {
    name: "Devlife Solution",
  },
  openGraph: generateOpenGraph({}),
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      "https://cms-admin.itsupport360.info/uploads/ads/1716757007-photo-6240297837539737134-y.jpeg",
    ],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    copyright: "2024, Devlife Solution",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <SiteHeader />

        <div className="relative flex flex-col flex-1">
          <div className="flex flex-1 flex-col">{children}</div>
        </div>

        <SiteFooter />
      </body>
    </html>
  );
}
