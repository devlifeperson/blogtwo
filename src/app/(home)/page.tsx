import { generateOpenGraph } from "@/utils/seo";
import { Metadata } from "next";

import "./styles.css";

import { HOME_TOOL_GROUPS, siteConfig } from "@/config/site";
import { Hero } from "./_components/hero";
import { Kickstart } from "./_components/kickstart";
import { ToolCategories, ToolGroup } from "./_components/tools";

export async function generateMetadata() {
  const title = siteConfig.title;
  const description = siteConfig.description;

  return {
    title,
    description,
    openGraph: generateOpenGraph({ title, description, url: "/" }),
    alternates: { canonical: "/" },
    twitter: { title, description },
  } satisfies Metadata;
}

export default async function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />

      <section className="search-tool">
        <div className="container text-center">
          <div className="search-tool__input-wrapper">
            <label htmlFor="search" className="hidden">
              search
            </label>
            <input
              id="search"
              className="w-full rounded-md border border-gray-300 p-2"
              type="text"
              placeholder="Search"
            />
            <svg
              className="search-tool__search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </div>
        </div>

        <div className="container">
          <div className="search-tool__wrapper">
            <ToolCategories
              items={HOME_TOOL_GROUPS.map((g) => ({
                slug: g.slug,
                title: g.title,
              }))}
            />

            <div className="search-tool__tools-wrapper">
              <p className="search-tool__not-found hidden">
                No Tools Found for the Search Criteria
              </p>

              {HOME_TOOL_GROUPS.map((group, i) => {
                return (
                  <ToolGroup
                    key={i}
                    title={group.title}
                    tools={group.tools}
                    groupId={group.slug}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Kickstart />
    </main>
  );
}
