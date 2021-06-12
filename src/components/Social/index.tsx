import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaSpotify } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import styles from './styles.module.scss';

export function Social() {
  return (
    <section className={styles.socialMedias} title="social-medias">
      <nav>
        <a href="https://github.com/guilhermebolfe11/" target="_blank">
          <FaGithub size="2rem" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-bolfe/" target="_blank">
          <FaLinkedinIn size="2rem" />
        </a>
        <a href="https://www.instagram.com/guibolfe/" target="_blank">
          <FaInstagram size="2rem" />
        </a>
        <a href="https://open.spotify.com/user/guilhermebolfe" target="_blank">
          <FaSpotify size="2rem" />
        </a>
        <a href="mailto:bolfeguilherme@gmail.com">
          <MdMail size="2rem" />
        </a>
      </nav>
    </section>
  );
}
