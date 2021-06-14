import React from 'react';

import { Grid } from '@material-ui/core';

import { Graduate } from '../components/Graduate';
import { Introduction } from '../components/Introduction';
import { Jobs } from '../components/Jobs';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

export default function Home() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Introduction />
      <About />
      <Projects />
      <Jobs />
      <Skills />
      <Graduate />
    </Grid>
  );
}
