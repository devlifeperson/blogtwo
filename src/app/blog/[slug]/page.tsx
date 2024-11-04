import { generateOpenGraph } from "@/utils/seo";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts } from "@/features/blog/services/get-all";
import { getPostSlug } from "@/features/blog/utils";
import { getPost } from "../../../features/blog/services/getPostDetail";
import { ListPost } from "@/features/blog/components/list-post";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts
    .map((post) => ({ slug: post.slug }))
    .concat([{ slug: "1" }, { slug: "2" }]);
}

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const _params = await params;

    // Paginate mode
    if (/^\d+$/.test(params.slug)) {
      const title = "Devlife Blog - Page " + params.slug;
      const description =
        "The list of posts from Devlife Blog, page " + params.slug;
      const url = `/blog/${params.slug}`;
      return {
        title,
        description,
        openGraph: generateOpenGraph({ title, description, url: url }),
        alternates: { canonical: url },
        twitter: { title, description },
      };
    }

    const id = _params.slug.split("_").pop()!;
    const res = await getPost(id);

    if (!res.success) {
      throw new Error("Could not fetch post");
    }

    const post = res.data;

    if (!post) {
      throw new Error("Post not found");
    }

    const url = `/blog/${getPostSlug(post)}`;

    return {
      title: post.title,
      description: post.description,
      openGraph: generateOpenGraph({
        title: post.title,
        description: post.description ?? "",
        url: url,
        type: "article",
      }),
      alternates: { canonical: url },
      twitter: {
        title: post.title,
        description: post.description ?? "",
      },
    };
  } catch {
    return {};
  }
}

export default async function Page({ params }: Props) {
  // Render paginated list of posts
  if (/^\d+$/.test(params.slug)) {
    return <ListPost page={parseInt(params.slug)} />;
  }

  const postId = params.slug.split("_").pop()!;
  const res = await getPost(postId);

  if (!res.success) {
    if (res.status === 404) {
      return notFound();
    }
    throw new Error("Internal Server Error");
  }

  const post = res.data;

  if (!post) {
    return notFound();
  }

  return (
    <main className="flex flex-col text-black pt-14">
      <div className="container my-8">
        <h1 className="sr-only">{post.title}</h1>
        <div className="prose mx-auto max-w-none px-2 dark:prose-invert md:prose-lg prose-h1:font-bold prose-li:my-1 prose-img:rounded">
          <h2 className="!mb-3">{post.title}</h2>
          <p className="!my-0 text-sm">
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.created_at))}
            {" | "}
            {post.author}
          </p>

          <p>{post.description}</p>
          <ul>
            {post.urls?.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" className="break-words">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
