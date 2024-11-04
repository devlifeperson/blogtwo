import Link, { LinkProps } from "next/link";

type TagProps = {
  title: string;
  href: LinkProps["href"];
};

export const Tag = (props: TagProps) => {
  return (
    <Link
      href={props.href}
      className="flex h-5 items-center rounded-md bg-indigo-50 px-2 text-xs font-semibold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200"
    >
      {props.title}
    </Link>
  );
};
