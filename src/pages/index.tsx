import React from 'react';
import { GetStaticProps } from 'next';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { Graduate } from '../components/Graduate';
import { Introduction } from '../components/Introduction';
import { Jobs } from '../components/Jobs';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';
import { Publications } from '../components/Publications';
import MaterialTheme from '../styles/MaterialTheme';
import IRepository from '../DTOs/IRepository';
import api from '../services/api';
interface IHomeProps {
  repos: IRepository[];
}

export default function Home({ repos }: IHomeProps) {
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
        <Projects repos={repos} />
        <Jobs />
        <Technologies />
        <Graduate />
        <Publications />
      </Grid>
    </ThemeProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<IRepository[]>(
    '/users/guilhermebolfe11/repos?sort=pushed_at',
  );

  return {
    props: {
      repos: response.data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
