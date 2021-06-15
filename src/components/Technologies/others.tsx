import { SiWebpack, SiEslint, SiPrettier, SiSwagger } from 'react-icons/si';
import { BsKanban } from 'react-icons/bs';

import IStack from '../../DTOs/IStack';

export default {
  title: 'Others',
  techs: [
    {
      title: 'Webpack',
      href: 'https://webpack.js.org/',
      icon: <SiWebpack size="2rem" />,
    },
    {
      title: 'Eslint',
      href: 'https://eslint.org/',
      icon: <SiEslint size="2rem" />,
    },
    {
      title: 'Prettier',
      href: 'https://prettier.io',
      icon: <SiPrettier size="2rem" />,
    },
    {
      title: 'Swagger',
      href: 'https://swagger.io/',
      icon: <SiSwagger size="2rem" />,
    },
    {
      title: 'Kanban',
      href: 'https://blog.trello.com/br/metodo-kanban',
      icon: <BsKanban size="2rem" />,
    },
  ],
} as IStack;
