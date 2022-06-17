import {
  SiDocker,
  SiGithubactions,
  SiAzurepipelines,
  SiTerraform
} from 'react-icons/si';
import IStack from './interfaces/IStack';

export default {
  title: 'DevOps',
  techs: [
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
      title: 'Azure Pipelines',
      href: 'https://azure.microsoft.com/pt-br/services/devops/pipelines/',
      icon: <SiAzurepipelines size="2rem" />,
    },
    {
      title: 'Terrafom',
      href: 'https://www.terraform.io/',
      icon: <SiTerraform size="2rem" />,
    },
  ],
} as IStack;
