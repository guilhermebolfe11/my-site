import type { Metadata } from "next";
import React from "react";
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
                <div className="flex gap-1">
                  {work.stacks.map((stack, index) => (
                    <span key={index}>{React.createElement(stack)}</span>
                  ))}
                </div>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {work.startDate} - {work.endDate}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
