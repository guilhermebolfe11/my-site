import { FaGithub, FaLinkedinIn, FaInstagram, FaSpotify } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.contentContainer}>
      <section className={styles.sectionInit}>
        <section className={styles.description}>
          <h1>
            Guilherme
            <br />
            Bolfe
          </h1>
          <span>
            Software Engineer <br />
            based in Porto Alegre, Brazil.
          </span>
        </section>
        <section className={styles.socialMedias}>
          <nav>
            <a href="https://github.com/guilhermebolfe11/" target="_blank">
              <FaGithub size="2rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-bolfe/"
              target="_blank"
            >
              <FaLinkedinIn size="2rem" />
            </a>
            <a>
              <FaInstagram size="2rem" />
            </a>
            <a>
              <FaSpotify size="2rem" />
            </a>
            <a href="mailto:bolfeguilherme@gmail.com">
              <MdMail size="2rem" />
            </a>
          </nav>
        </section>
      </section>
      <section>
        <h1>Me</h1>
      </section>
      <section>
        <h1>Projects</h1>
      </section>
      <section>
        <h1>Jobs</h1>
      </section>
    </main>
  );
}
