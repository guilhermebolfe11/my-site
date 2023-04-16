import { SiWebpack, SiEslint, SiPrettier, SiSwagger } from 'react-icons/si';

import IStack from '../../interfaces/IStack';

export default {
  techs: [
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
    }
  ],
} as IStack;
