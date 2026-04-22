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
    first: `I’m Guilherme Bolfe, a Software Engineer focused on building scalable and reliable systems.`,
    second: `Over the past years, I’ve worked on complex backend systems in the financial sector,
    contributing to companies like Stone, BTG Pactual, and Gavea. My work involves designing APIs,
    building distributed systems, and developing platforms that support real business operations at scale.`,
    third: `I have strong experience with Node.js, TypeScript, and cloud platforms like AWS, 
    always focusing on performance, system design, and long-term maintainability.`,
    fourth: `Beyond coding, I’m interested in software architecture, engineering best practices,
    and continuous learning. Currently, I’m also pursuing a Master’s degree in Software Engineering, 
    deepening my knowledge in complex systems and research.
    I’m motivated by solving real problems and building systems that make a meaningful impact.`,
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
      <Image
          src="/profile.png"
          alt="Guilherme Bolfe"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          width={160}
          height={160}
          priority
        />

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
