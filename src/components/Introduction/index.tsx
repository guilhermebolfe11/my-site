import React from 'react';

import { Description } from '../Description';
import { Social } from '../Social';

import styles from './styles.module.scss';

export function Introduction() {
  return (
    <section className={styles.sectionInit} title="introduction">
      <Description />
      <Social />
    </section>
  );
}
