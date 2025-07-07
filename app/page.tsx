import getUserLocale from "get-user-locale";
import Image from "next/image";
import { getContent } from "./config";

interface HomeContent {
  title: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
}

const getHomeContent = (locale: string) => {
  const content: HomeContent = {
    title: "Hello there! 👋",
    first: `I'm Guilherme, a passionate Software Engineer who discovered 
    the world of programming at 13 through a web design course in my hometown
     of Prudentópolis, Brazil. At 17, I took a leap toward my dream and moved 
     over 1,000 km away to study Software Engineering at UNIPAMPA, in southern 
     Brazil — a journey that shaped both my personal and professional life.`,
    second: `Today, I specialize in backend development, with a strong focus on 
    building robust APIs and scalable systems using modern technologies like 
    Node.js, TypeScript, MongoDB, and cloud-based tools. Still, I also enjoy 
    building intuitive front-end interfaces when needed — I value understanding 
    the full picture of software development.`,
    third: `I'm always seeking growth, not only technically but also in 
    leadership and communication. I believe great engineers are those who can 
    combine problem-solving with a broader understanding of business and people.`,
    fourth: `What drives me the most is solving real problems. I thrive in challenging 
    environments where I can continuously learn and make a meaningful impact.`,
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
