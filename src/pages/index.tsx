import React from 'react';

import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { Graduate } from '../components/Graduate';
import { Introduction } from '../components/Introduction';
import { Jobs } from '../components/Jobs';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';

import MaterialTheme from '../styles/MaterialTheme';

export default function Home() {
  return (
    <ThemeProvider theme={MaterialTheme}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Introduction />
        <About />
        <Projects />
        <Jobs />
        <Technologies />
        <Graduate />
      </Grid>
    </ThemeProvider>
  );
}
