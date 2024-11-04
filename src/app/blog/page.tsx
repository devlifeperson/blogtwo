import { generateOpenGraph } from "@/utils/seo";
import { Metadata } from "next";

import { ListPost } from "@/features/blog/components/list-post";

const title = "Devlife Blog";
const description = "Personal blog about web development, programming, and more.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: generateOpenGraph({ title, description, url: "/blog" }),
  alternates: { canonical: "/blog" },
  twitter: { title, description },
};

export default async function BlogPage() {
  return <ListPost page={1} />;
}
