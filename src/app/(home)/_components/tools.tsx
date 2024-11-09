import { RiArrowRightFill, RiCodeLine } from "@remixicon/react";
import Link from "next/link";

type ToolCardProps = {
  title: string;
  desc: string;
  href: string;
};

export const ToolCard = (props: ToolCardProps) => {
  return (
    <Link
      href={props.href}
      className="search-tool__card"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <h3 className="search-tool__card-title">{props.title}</h3>
      <p className="search-tool__card-description">{props.desc}</p>
      <div className="search-tool__card-btn">
        <RiArrowRightFill />
      </div>
    </Link>
  );
};

type ToolGroupProps = {
  title: string;
  tools: { title: string; desc: string; href: string }[];
  groupId: string;
};

export const ToolGroup = (props: ToolGroupProps) => {
  return (
    <div className="search-tool__tool-group">
      <div id={props.groupId} className="search-tool__tool-group__title">
        <RiCodeLine className="size-8" />
        <h2>{props.title}</h2>
      </div>

      <div className="search-tool__cards">
        {props.tools.map((t, i) => {
          return (
            <ToolCard key={i} title={t.title} desc={t.desc} href={t.href} />
          );
        })}
      </div>
    </div>
  );
};

type ToolCategoriesProps = {
  items: {
    title: string;
    slug: string;
  }[];
};

export const ToolCategories = (props: ToolCategoriesProps) => {
  return (
    <div className="top-36 shrink-0 border-r pr-2 pt-2.5 text-zinc-800 md:sticky md:mb-0 md:h-[77vh] md:w-1/3">
      <h2 className="mb-6 text-2xl font-bold uppercase">Categories</h2>

      <div>
        {props.items?.map((item) => {
          return (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              className="search-tool__category relative flex items-center gap-2 border-b pl-4 no-underline"
            >
              <RiCodeLine className="size-6" />
              <p className="py-6 text-lg font-medium capitalize">
                {item.title}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};
