"use client";

import { getContent, metaData } from "../config";
import getUserLocale from "get-user-locale";
import { FaGithub, FaGoogleDrive, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon />
    </a>
  );
}

interface SocialLinksContent {
  github: string;
  email: string;
  resume: string;
  linkedIn: string;
}

const getSocialLinksContent = (locale: string) => {
  const content: SocialLinksContent = {
    github: "https://github.com/guilhermebolfe11",
    email: "mailto:bolfeguilherme@gmail.com",
    resume:
      "https://drive.google.com/file/d/18uB8glO1LFSUL1WMYNKSjjh8GqvlCt5Y/view?usp=sharing",
    linkedIn: "https://www.linkedin.com/in/guilherme-bolfe/?locale=en_US",
  };

  const translate: Record<string, Partial<SocialLinksContent>> = {
    "pt-BR": {
      resume:
        "https://drive.google.com/file/d/1T_cnOd4JnOxUfjLFCPk6BQwPoFZTecp5/view?usp=sharing",
      linkedIn: "https://www.linkedin.com/in/guilherme-bolfe",
    },
  };

  return getContent<SocialLinksContent>(translate, locale, content);
};

function SocialLinks() {
  const socialLinks = getSocialLinksContent(getUserLocale());

  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} label="GitHub" />
      <SocialLink href={socialLinks.linkedIn} icon={FaLinkedinIn} label="LinkedIn" />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} label="Email" />
      <SocialLink href={socialLinks.resume} icon={FaGoogleDrive} label="Resume" />
    </div>
  );
}

export default function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a className="no-underline" href="/" rel="noopener noreferrer">
        {metaData.title}
      </a>
      <SocialLinks />
    </small>
  );
}
