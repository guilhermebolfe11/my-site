import { IconType } from "react-icons";
import { FaNodeJs } from "react-icons/fa6";
import {
  SiAmazonapigateway,
  SiAmazondynamodb,
  SiAwslambda,
  SiFastify,
  SiGithub,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiTerraform,
  SiTypescript,
  SiVitest,
} from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";

export interface Project {
  title: string;
  description: string;
  url: string;
  stacks: Array<IconType>;
}
export const projects: Project[] = [
  {
    description:
        "Repository with examples of design patterns",
    title: "Patterns",
    url: "https://github.com/guilhermebolfe11/patterns",
    stacks: [
      SiTypescript,
      PiFileCSharp
    ],
  },
  {
    description:
      "Your challenge is to build an API that tracks the number of accesses to website and allows a user to create an account",
    title: "Challenge 1",
    url: "https://github.com/guilhermebolfe11/challenge1",
    stacks: [
      SiTypescript,
      FaNodeJs,
      SiAmazonapigateway,
      SiTerraform,
      SiAwslambda,
      SiAmazondynamodb,
      SiGithub,
      SiVitest,
      SiPnpm,
    ],
  },
  {
    description:
      "You work for an InsurTech called Waner-On Insurance. The company has been growing exponentially, and its young customer base is demanding more modern and flexible products that better align with current realities.",
    title: "Challenge 2",
    url: "https://github.com/guilhermebolfe11/challenge2",
    stacks: [
      SiTypescript,
      FaNodeJs,
      SiGithub,
      SiVitest,
      SiPnpm,
      SiPostgresql,
      SiPrisma,
      SiFastify
    ],
  },
  {
    description:
      "This is a typescript version of https://github.com/victorqribeiro/TinyJS",
    title: "TinyTS",
    url: "https://github.com/guilhermebolfe11/TinyTS",
    stacks: [SiTypescript],
  },
];
