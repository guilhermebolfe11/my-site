import getUserLocale from 'get-user-locale';

const text = {
  "pt-BR": {
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
  "en-US": {
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
  },
};

export default function Page() {
  const locale = getUserLocale()  !== "pt-BR" ? "en-US" : "pt-BR";
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Guilherme Bolfe
      </h1>
      <p className="mb-4">{text[locale].first}</p>
      <p className="mb-4">{text[locale].second}</p>
      <p className="mb-4">{text[locale].third}</p>
      <p className="mb-4">{text[locale].fourth}</p>
    </section>
  );
}
