import { RiMailLine, RiTwitterXLine } from "@remixicon/react";

import Image from "next/image";
import Link from "next/link";
import { SocialLink } from "../base/social-link";

import logo from "@/../public/logo.png";
import { siteConfig } from "@/config/site";

export const SiteHeader = () => {
  return (
    <header className="h-14 fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex h-full items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link href="/">
            <Image src={logo} alt="Logo" height={32} width={32} />
          </Link>
  
          {siteConfig.mainNav.map((navItem, index) => {
            const isExternal = navItem.href.startsWith("http");
            return (
              <Link
                key={index}
                href={navItem.href}
                className="hover:text-indigo-600"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "nofollow noopener noreferrer" : undefined}
              >
                {navItem.title}
              </Link>
            );
          })}
        </nav>

        <nav className="ml-auto flex space-x-2">
          <SocialLink href="#" Icon={RiMailLine} />
          <SocialLink href="#" Icon={RiTwitterXLine} />
        </nav>
      </div>
    </header>
  );
};
