import { RemixiconComponentType } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  Icon: RemixiconComponentType;
};

export const SocialLink = (props: SocialLinkProps) => {
  return (
    <Button
      asChild
      variant={"ghost"}
      size={"icon"}
      className="size-10 rounded-full"
    >
      <Link href={props.href}>
        <props.Icon className="size-5" />
      </Link>
    </Button>
  );
};
