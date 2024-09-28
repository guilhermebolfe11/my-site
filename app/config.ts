function getContent<T>(
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

interface SocialLinksContent {
  github: string;
  email: string;
  resume: string;
  linkedIn: string;
}
export const getSocialLinksContent = (locale: string) => {
  const content: SocialLinksContent = {
    github: "https://github.com/guilhermebolfe11",
    email: "mailto:bolfeguilherme@gmail.com",
    resume:
      "https://drive.google.com/file/d/18uB8glO1LFSUL1WMYNKSjjh8GqvlCt5Y/view?usp=sharing",
    linkedIn: "https://www.linkedin.com/in/guilherme-bolfe/?locale=en_US",
  };

  const translate: Record<string, Partial<SocialLinksContent>> = {
    "pt-BR": {
      resume:
        "https://drive.google.com/file/d/1T_cnOd4JnOxUfjLFCPk6BQwPoFZTecp5/view?usp=sharing",
      linkedIn: "https://www.linkedin.com/in/guilherme-bolfe",
    },
  };

  return getContent<SocialLinksContent>(translate, locale, content);
};

interface NotFoundContent {
  title: string;
  text: string;
}

export const getNotFoundContent = (locale: string) => {
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

interface HomeContent {
  title: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
}
export const getHomeContent = (locale: string) => {
  const content: HomeContent = {
    title: "Hi! 👋",
    first: `I'm Guilherme, and my love for programming began at the age of 13 when 
      I took a web design course in my hometown, Prudentópolis, in the 
      interior of Paraná, Brazil. At 17, I decided to pursue my passion and
      moved to Alegrete, Rio Grande do Sul, a thousand kilometers away from
      everything I knew, to study Software Engineering at Unipampa. It was
      an incredible journey that brought me here.`,
    second: `Currently, I work as a back-end developer with a degree in 
      Software Engineering. I have a deep appreciation for seeing a 
      "status 200" after completing an API, but I also enjoy the art
      of creating a beautiful front-end.`,
    third: `My quest for growth extends beyond just programming; I am committed 
      to evolving in areas like leadership and management, as I believe a
      good software engineer should be versatile and understand the full
      spectrum of software development.`,
    fourth: `What truly motivates me is problem-solving. I believe it's 
      in challenging situations that we learn and grow the most.
      I'm looking forward to bringing my passion for programming 
      and my thirst for learning.`,
  };

  const translate: Record<string, Partial<HomeContent>> = {
    "pt-BR": {
      title: "Oi! 👋",
      first: `Meu nome é Guilherme e minha paixão pela programação começou cedo,
     aos 13 anos, em um curso de web design na minha cidade natal, Prudentópolis,
     no interior do Paraná. Com 17 anos, decidi seguir meu sonho e me mudei para Alegrete,
     no Rio Grande do Sul, para estudar Engenharia de Software na Unipampa,
     mesmo que isso significasse estar a 1000 km de distância de tudo o que eu conhecia.
     Foi uma jornada incrível que me trouxe até aqui.`,
      second: `Atualmente, sou um desenvolvedor back-end com formação em Engenharia de Software.
     Tenho um profundo amor por ver um "status 200" após concluir uma API,
     mas também aprecio a arte de criar um front-end.`,
      third: `Minha busca por evolução não se limita apenas à programação.
     Estou comprometido em crescer também nas áreas de liderança e gestão, 
     pois acredito que um bom engenheiro de software deve ser versátil
     e entender o panorama completo do desenvolvimento de software.`,
      fourth: `O que realmente me motiva é a resolução de problemas.
     Acredito ser nas situações desafiadoras que mais aprendemos e crescemos.
     Estou ansioso para contribuir com minha paixão pela programação
     e minha sede de aprendizado.`,
    },
  };

  return getContent<HomeContent>(translate, locale, content);
};
