import { getContent, metaData } from "app/config";
import getUserLocale from "get-user-locale";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

interface NavContent {
  [key: string]: { name: string };
}

const getNavContent = (locale: string) => {
  const content: NavContent = {
    "/works": { name: "Works" },
    "/projects": { name: "Projects" },
  };

  const translate: Record<string, Partial<NavContent>> = {
    "pt-BR": {
      "/works": { name: "Works" },
      "/projects": { name: "Projects" },
    },
  };

  return getContent<NavContent>(translate, locale, content);
};

export function Navbar() {
  const navItems = getNavContent(getUserLocale());
  return (
    <nav className="lg:mb-16 mb-12 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-[28px] font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
