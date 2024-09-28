import type { Metadata } from "next";
import { challenges } from "./challenge-data";

export const metadata: Metadata = {
  title: "Challenges",
  description: "My Challenges",
};

export default function Challenges() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Challenges</h1>
      <div className="space-y-6">
        {challenges.map((challenge, index) => (
          <a
            key={index}
            href={challenge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {challenge.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {challenge.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {challenge.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
