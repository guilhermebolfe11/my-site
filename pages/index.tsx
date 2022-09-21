import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import IRepository from '../src/interfaces/IRepository';
import api from '../src/services/api';
import { Introduction } from '../src/components/Introduction/Introduction';
import { About } from '../src/components/About/About';
import { Graduate } from '../src/components/Graduate/Graduate';
import { Jobs } from '../src/components/Jobs/Jobs';
import { Projects } from '../src/components/Projects/Projects';
import { Stacks } from '../src/components/Stacks/Stacks';
import { Articles } from '../src/components/Articles/Articles';

interface IHomeProps {
  repos: IRepository[];
}

const Home: NextPage<IHomeProps> = ({ repos }) => {
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