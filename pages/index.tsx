import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Box from '@mui/material/Box';
import IRepository from '../src/interfaces/IRepository';
import api from '../src/services/api';
import { Introduction } from '../src/Introduction';
import { About } from '../src/About';
import { Graduate } from '../src/Graduate';
import { Jobs } from '../src/Jobs';
import { Projects } from '../src/Projects';
import { Stacks } from '../src/Stacks';
import { Articles } from '../src/Articles';

interface IHomeProps {
  repos: IRepository[];
}

const Home: NextPage = ({ repos }: IHomeProps) => {
  return (
    <>
      <Introduction/>
      <About/>
      <Projects repos={repos}/>
      <Graduate/>
      <Jobs />
      <Stacks/>
      <Articles/>
    </>
  );
};

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

export default Home;