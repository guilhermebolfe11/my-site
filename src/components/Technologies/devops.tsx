import {
  SiAmazonaws,
  SiDocker,
  SiGithubactions,
  SiVagrant,
  SiAzurepipelines,
} from 'react-icons/si';
import IStack from '../../DTOs/IStack';

export default {
  title: 'DevOps',
  techs: [
    {
      title: 'Amazon Web Services',
      href: 'https://aws.amazon.com/',
      icon: <SiAmazonaws size="2rem" />,
    },
    {
      title: 'Docker',
      href: 'https://www.docker.com/',
      icon: <SiDocker size="2rem" />,
    },
    {
      title: 'GitHub Actions',
      href: 'https://github.com/features/actions',
      icon: <SiGithubactions size="2rem" />,
    },
    {
      title: 'Vagrant',
      href: 'https://www.vagrantup.com/',
      icon: <SiVagrant size="2rem" />,
    },
    {
      title: 'Azure Pipelines',
      href: 'https://azure.microsoft.com/pt-br/services/devops/pipelines/',
      icon: <SiAzurepipelines size="2rem" />,
    },
  ],
} as IStack;
