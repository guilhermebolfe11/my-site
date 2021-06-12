import React from 'react';

import { Graduate } from '../components/Graduate';
import { Introduction } from '../components/Introduction';
import { Jobs } from '../components/Jobs';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.contentContainer}>
      <Introduction />
      <About />
      <Projects />
      <Jobs />
      <Skills />
      <Graduate />
    </main>
  );
}
