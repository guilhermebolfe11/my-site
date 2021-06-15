import { SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import IStack from '../../DTOs/IStack';

export default {
  title:'Databases',
  techs: [
    {
      title: 'MySQL',
      href: 'https://www.mysql.com/',
      icon: <SiMysql size="2rem" />,
    },
    {
      title: 'PostgreSQL',
      href: 'https://www.postgresql.org/"',
      icon: <SiPostgresql size="2rem" />,
    },
    {
      title: 'MongoDb',
      href: 'https://www.mongodb.com/',
      icon: <SiMongodb size="2rem" />,
    },
  ],
} as IStack;
