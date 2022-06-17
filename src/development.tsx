import {
  SiTypescript,
  SiReact,
  SiCsharp,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiDotnet,
  SiNextdotjs
} from 'react-icons/si';

import IStack from './interfaces/IStack';

export default {
  title: 'Development',
  techs: [
    {
      title: 'React',
      href: 'https://reactjs.org/',
      icon: <SiReact size="2rem" />,
    },
    {
      title: 'Typescript',
      href: 'https://www.typescriptlang.org/"',
      icon: <SiTypescript size="2rem" />,
    },
    {
      title: 'Node',
      href: 'https://nodejs.org/',
      icon: <SiNodedotjs size="2rem" />,
    },
    {
      title: 'Next.js',
      href: 'https://nextjs.org/',
      icon: <SiNextdotjs size="2rem" />,
    },
    {
      title: 'C#',
      href: 'https://docs.microsoft.com/pt-br/dotnet/csharp/',
      icon: <SiCsharp size="2rem" />,
    },
    {
      title: '.Net',
      href: 'https://docs.microsoft.com/pt-br/dotnet/',
      icon: <SiDotnet size="2rem" />,
    },
    {
      title: 'JavaScript',
      href: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/',
      icon: <SiJavascript size="2rem" />,
    },
    {
      title: 'CSS',
      href: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      icon: <SiCss3 size="2rem" />,
    },
    {
      title: 'HTML',
      href: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      icon: <SiHtml5 size="2rem" />,
    },
    {
      title: 'Git',
      href: 'https://git-scm.com/',
      icon: <SiGit size="2rem" />,
    },
  ],
} as IStack;
