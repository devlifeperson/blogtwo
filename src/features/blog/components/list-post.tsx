import { Tag } from "@/app/(home)/_components/tags";
import NotFound from "@/app/not-found";
import BlogPagination from "@/features/blog/components/pg";
import Link from "next/link";
import { getPostsForHome } from "../services/getPosts";

type Props = {
  page: number;
};

export const ListPost = async ({ page }: Props) => {
  const { posts, totalPage } = await getPostsForHome(page);

  if (page < 1 || page > totalPage) {
    return (
      <main className="flex flex-col">
        <NotFound />
      </main>
    );
  }

  return (
    <main className="flex flex-col pt-14">
      <div className="container my-8">
        <h1 className="sr-only">
          Devlife Blog - Page {page} of {totalPage}
        </h1>
        <h2 className="mb-9 font-medium uppercase text-rose-600">Articles</h2>

        <section className="flex flex-col gap-12">
          {posts?.map((post) => {
            return (
              <article className="transition-colors" key={post.id}>
                <h2 className="mb-1 text-2xl font-bold text-gray-900">
                  <Link href={post.path} className="hover:text-indigo-600">
                    {post.name}
                  </Link>
                </h2>
                <figcaption className="flex flex-wrap gap-y-1 text-sm text-gray-500">
                  <span className="mr-2 inline-block">
                    {Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(post.created_at))}
                    {" • "}
                    {post.author}
                  </span>
                  <nav aria-label="Tagged" className="flex gap-2">
                    <Tag href={"#"} title="Tag 1" />
                    <Tag href={"#"} title="Tag 2" />
                    <Tag href={"#"} title="Tag 3" />
                  </nav>
                </figcaption>
                <p className="mt-3 line-clamp-4 leading-relaxed text-gray-700">
                  {post.description}
                </p>
              </article>
            );
          })}

          <BlogPagination currentPage={page} totalPages={totalPage} />
        </section>
      </div>
    </main>
  );
};
