export function getContent<T>(
  translate: Record<string, Partial<T>>,
  locale: string,
  content: T
): T {
  if (Object.keys(translate).includes(locale)) {
    return {
      ...content,
      ...translate[locale],
    };
  }

  return content;
}

export const metaData = {
  baseUrl: "https://guilhermebolfe.com.br",
  title: "Guilherme Bolfe",
  name: "Guilherme Bolfe",
  ogImage: "/opengraph-image.png",
  description:
    "Software Engineer specializing in backend development with Node.js, TypeScript, and cloud-based systems. Passionate about building robust APIs and scalable architectures.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "API Development",
    "Cloud",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "Guilherme Bolfe",
  ],
};
