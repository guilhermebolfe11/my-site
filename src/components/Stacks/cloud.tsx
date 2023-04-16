import { SiAmazonaws, SiGooglecloud } from 'react-icons/si';
import IStack from '../../interfaces/IStack';

export default {
  techs: [
    {
      title: 'AWS',
      href: 'https://aws.amazon.com/',
      icon: <SiAmazonaws size="2rem" />,
    },
    {
      title: 'GCP',
      href: 'https://cloud.google.com/',
      icon: <SiGooglecloud size="2rem" />,
    }
  ],
} as IStack;
