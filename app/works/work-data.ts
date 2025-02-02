import { IconType } from "react-icons";
import { FaNodeJs } from "react-icons/fa6";
import { PiFileCSharp } from "react-icons/pi";
import {
  SiAmazondynamodb,
  SiAmazonsqs,
  SiAwslambda,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiGoland,
  SiGoogledataproc,
  SiJavascript,
  SiMongodb,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiTerraform,
  SiTypescript
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

export interface Work {
  title: string;
  stacks: Array<IconType>;
  startDate: string;
  endDate?: string;
  url: string;
}
export const works: Work[] = [
  {
    title: "Senior software engineer - Stone.co",
    url: "https://www.linkedin.com/company/stone-co/posts/?feedView=all",
    stacks: [
      SiTypescript,
      FaNodeJs,
      SiRabbitmq,
      SiGithub,
      SiMongodb,
      SiGoogledataproc,
    ],
    startDate: "2023/12",
    endDate: "",
  },
  {
    title: "Senior back-end developer - Gavea Tech",
    url: "https://www.linkedin.com/company/vireomarketplace/",
    stacks: [
      SiTypescript,
      FaNodeJs,
      PiFileCSharp,
      SiAmazonsqs,
      VscAzureDevops,
      SiAmazondynamodb,
      SiMongodb,
      SiAwslambda,
      SiGoland,
      SiTerraform
    ],
    startDate: "2021/11",
    endDate: "2023/11",
  },
  {
    title: "IT anality - BTG Pactual",
    url: "https://www.linkedin.com/company/btgpactual/posts/?feedView=all",
    stacks: [
      SiJavascript,
      SiReact,
      PiFileCSharp,
      SiAmazondynamodb,
      SiAmazonsqs,
      VscAzureDevops,
      SiPostgresql,
      SiAwslambda,
    ],
    startDate: "2020/08",
    endDate: "2021/10",
  },
  {
    title: "Software engineer - Qualis",
    url: "https://www.linkedin.com/company/qualisinfectologia/posts/?feedView=all",
    stacks: [
      SiTypescript,
      FaNodeJs,
      SiReact,
      SiGithub,
      SiPhp,
      SiGitlab,
      SiPostgresql,
      SiMongodb,
    ],
    startDate: "2020/03",
    endDate: "2020/07",
  },
  {
    title: "Full stack developer - Ditech",
    url: "https://www.linkedin.com/company/ditech/",
    stacks: [
      SiPhp,
      FaNodeJs,
      SiFlutter,
      VscAzureDevops,
      SiPostgresql,
      SiOracle,
    ],
    startDate: "2019/10",
    endDate: "2020/03",
  },
];
