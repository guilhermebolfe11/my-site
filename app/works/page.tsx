import type { Metadata } from "next";
import { works } from "./work-data";

export const metadata: Metadata = {
  title: "Works",
  description: "My Works",
};

export default function Works() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Works</h1>
      <div className="space-y-6">
        {works.map((work, index) => (
          <a
            key={index}
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {work.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {work.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {work.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}