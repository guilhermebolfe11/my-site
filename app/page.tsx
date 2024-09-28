import getUserLocale from "get-user-locale";
import Image from "next/image";
import { getHomeContent } from "./config";

export default function Page() {
  const content = getHomeContent(getUserLocale());
  return (
    <section>
      <a href="/">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        {content.title}
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>{content.first}</p>
        <p>{content.second}</p>
        <p>{content.third}</p>
        <p>{content.fourth}</p>
      </div>
    </section>
  );
}
