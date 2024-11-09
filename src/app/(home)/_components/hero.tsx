import { siteConfig } from "@/config/site";

export const Hero = () => {
  return (
    <section className="pb-48 pt-28">
      <div className="container text-center">
        <h1 className="mb-3.5 text-5xl font-extrabold text-teal-900">
         {siteConfig.title}
        </h1>
        <p className="text-sm text-zinc-800">
         {siteConfig.description}
        </p>
      </div>
    </section>
  );
};
