import getUserLocale from "get-user-locale";
import { getContent } from "./config";

interface NotFoundContent {
  title: string;
  text: string;
}

const getNotFoundContent = (locale: string) => {
  const content: NotFoundContent = {
    title: "404 - Page not found",
    text: "Oops! The page you're looking for doesn't seem to exist.",
  };

  const translate: Record<string, Partial<NotFoundContent>> = {
    "pt-BR": {
      title: "404 - Página não encontrada",
      text: "Oops! A página que você está procurando parece não existir.",
    },
  };

  return getContent<NotFoundContent>(translate, locale, content);
};

export default function NotFound() {
  const content = getNotFoundContent(getUserLocale());
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        {content.title}
      </h1>
      <p className="mb-4">{content.text}</p>
    </section>
  );
}
