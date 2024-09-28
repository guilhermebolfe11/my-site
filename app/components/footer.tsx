"use client";

import { getSocialLinksContent, metaData } from "app/config";
import getUserLocale from 'get-user-locale';
import {
  FaGithub,
  FaGoogleDrive,
  FaLinkedinIn
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  const socialLinks = getSocialLinksContent(getUserLocale())

  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedIn} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <SocialLink href={socialLinks.resume} icon={FaGoogleDrive} />
    </div>
  );
}

export default function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href="/"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
