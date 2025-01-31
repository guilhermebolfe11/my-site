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
  baseUrl: "https://guilhermebolfe.com",
  title: "Guilherme Bolfe",
  name: "Guilherme Bolfe",
  ogImage: "/opengraph-image.png",
  description: "My Site",
};
