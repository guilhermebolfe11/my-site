import React from 'react';

import styles from './styles.module.scss';

export function Description() {
  return (
    <section className={styles.description} title="description">
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
  );
}
