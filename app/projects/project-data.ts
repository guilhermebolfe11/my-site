import { IconType } from "react-icons";
import { FaNodeJs } from "react-icons/fa6";
import {
  SiAmazonapigateway,
  SiAmazondynamodb,
  SiAwslambda,
  SiGithub,
  SiPnpm,
  SiTerraform,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

export interface Project {
  title: string;
  description: string;
  url: string;
  stacks: Array<IconType>;
}
export const projects: Project[] = [
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
];
