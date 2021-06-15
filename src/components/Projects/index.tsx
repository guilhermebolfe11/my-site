import React from 'react';
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';

import IRepository from '../../DTOs/IRepository';
import { Repo } from '../Repo';
interface IProjectsProps {
  repos: IRepository[];
}

export function Projects({ repos }: IProjectsProps) {
  return (
    <Card elevation={0}>
      <CardHeader title="Projects" />
      <CardContent>
        <Grid container spacing={2} direction="row" justify="flex-start">
          {repos.map(r => (
            <Repo key={r.id} repo={r} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
