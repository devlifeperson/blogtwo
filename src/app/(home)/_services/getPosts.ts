import slugify from "slugify";
import { z } from "zod";

import { privateEnv } from "@/config/private-env";
import { publicEnv } from "@/config/public-env";

export const getPosts = async (page = 1) => {
  const header = new Headers();
  header.append("accept", "application/json");
  header.append("Origin", publicEnv.DEPLOY_URL);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: header,
    redirect: "follow",
    next: {
      revalidate: 60,
    },
  };

  const response = await fetch(
    `${privateEnv.API_URL}/api/websites/${privateEnv.WEBSITE_ID}/projects?page=${page}`,
    requestOptions
  );

  // if the response is not ok, throw an error
  if (!response.ok) {
    const data = (await response.json()) as { message: string };
    throw new Error(`Get posts failed: ${data.message}`);
  }

  const data = (await response.json()) as Data;

  return data;
};

export const getPostsForHome = async (page: number) => {
  const { data: posts, paginate } = await getPosts(page);

  const safeParsedPosts = z.array(PostSchema).safeParse(posts);

  if (!safeParsedPosts.success) {
    console.error(safeParsedPosts.error);
    throw new Error("The posts data is invalid schema");
  }

  const currentPosts = safeParsedPosts.data.map((post) => {
    const slugifyName = slugify(post.title ?? "no_name", { lower: true, strict: true  });
    return {
      ...post,
      path: `/blog/${slugifyName}_${post.id}`,
      name: post.title ?? "No name",
    };
  });

  return {
    posts: currentPosts,
    totalPage: paginate.last_page,
  };
};

const PostSchema = z.object({
  id: z.number(),
  title: z.string().nullable().optional(),
  description: z.string().optional().nullable(),
  urls: z.array(z.string()),
  author: z.string().optional().nullable(),
  created_at: z.string(),
});
type Post = z.infer<typeof PostSchema>;

interface Data {
  data: Post[];
  paginate: Paginate;
}

interface Paginate {
  current_page: number;
  from: number;
  to: number;
  last_page: number;
  last_page_url: string;
  next_page_url: unknown;
  path: string;
  per_page: number;
  prev_page_url: unknown;
  total: number;
}
