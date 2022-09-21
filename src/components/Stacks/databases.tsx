import { SiMysql, SiPostgresql, SiMongodb, SiAmazondynamodb } from 'react-icons/si';
import IStack from '../../interfaces/IStack';

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
    {
      title: 'DynamoDb',
      href: 'https://aws.amazon.com/pt/dynamodb/',
      icon: <SiAmazondynamodb size="2rem" />,
    },
  ],
} as IStack;
