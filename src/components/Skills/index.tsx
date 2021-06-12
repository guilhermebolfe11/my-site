import React from 'react';
import {
  SiTypescript,
  SiReact,
  SiCsharp,
  SiAmazonaws,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiJest,
} from 'react-icons/si';

import styles from './styles.module.scss';
export function Skills() {
  return (
    <section className={styles.skills}>
      <h1>Skills</h1>
      <nav>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiReact size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiTypescript size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiAmazonaws size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiCsharp size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiJavascript size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiCss3 size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiHtml5 size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiJest size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiGit size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiPhp size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiMysql size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiPostgresql size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiDocker size="2rem" />
        </a>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <SiAmazonaws size="2rem" />
        </a>
      </nav>
    </section>
  );
}
