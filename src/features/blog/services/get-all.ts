import { privateEnv } from "@/config/private-env";
import { publicEnv } from "@/config/public-env";
import { getPostSlug } from "../utils";

export const getAllPosts = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Origin", publicEnv.DEPLOY_URL);

  const response = await fetch(
    `${privateEnv.API_URL}/api/websites/${privateEnv.WEBSITE_ID}/projects/all`,
    {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      next: {
        revalidate: 60
      }
    }
  );

  const data = await response.json();

  const posts = data.data as { id: number; title: string }[];

  return posts.map((post) => ({
    id: post.id,
    name: post.title,
    slug: getPostSlug(post),
  }));
};
