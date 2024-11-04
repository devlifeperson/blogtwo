import { RiArrowRightFill, RiCodeLine } from "@remixicon/react";

type ToolCardProps = {
  title: string;
  desc: string;
};

export const ToolCard = (props: ToolCardProps) => {
  return (
    <a href="#" className="search-tool__card">
      <h3 className="search-tool__card-title">{props.title}</h3>
      <p className="search-tool__card-description">{props.desc}</p>
      <div className="search-tool__card-btn">
        <RiArrowRightFill />
      </div>
    </a>
  );
};

type ToolGroupProps = {
  title: string;
  tools: { title: string; desc: string }[];
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
          return <ToolCard key={i} title={t.title} desc={t.desc} />;
        })}
      </div>
    </div>
  );
};

export const ToolCategories = () => {
  return (
    <div className="top-36 shrink-0 border-r pr-2 pt-2.5 text-zinc-800 md:sticky md:mb-0 md:h-[77vh] md:w-1/3">
      <h2 className="mb-6 text-2xl font-bold uppercase">Categories</h2>

      <div>
        <a
          href="#code-tidy"
          className="search-tool__category relative flex items-center gap-2 border-b pl-4 no-underline"
        >
          <RiCodeLine className="size-6" />
          <p className="py-6 text-lg font-medium capitalize">Code Tidy</p>
        </a>

        <a
          href="#data-format"
          className="search-tool__category relative flex items-center gap-2 border-b pl-4 no-underline"
        >
          <RiCodeLine className="size-6" />
          <p>Data Format</p>
        </a>
        <a
          href="#random-data"
          className="search-tool__category relative flex items-center gap-2 border-b pl-4 no-underline"
        >
          <RiCodeLine className="size-6" />
          <p>random data</p>
        </a>
      </div>
    </div>
  );
};
