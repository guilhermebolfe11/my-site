import * as React from 'react';
import type { NextPage } from 'next';
import { About } from '../src/components/About/About';
import { Graduate } from '../src/components/Graduate/Graduate';
import { Jobs } from '../src/components/Jobs/Jobs';
import { Stacks } from '../src/components/Stacks/Stacks';
import { Articles } from '../src/components/Articles/Articles';

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Graduate />
      <Jobs />
      <Stacks />
      <Articles />
    </>
  );
};

export default Home;