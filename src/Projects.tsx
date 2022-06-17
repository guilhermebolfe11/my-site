import React from 'react';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import IRepository from './interfaces/IRepository';
import { Repo } from './Repo';
interface IProjectsProps {
  repos: IRepository[];
}

export function Projects({ repos }: IProjectsProps) {
  return (
    <Card elevation={0}>
      <CardHeader title="My Projects" />
      <CardContent>
        <Grid container spacing={2} sx={{direction:'row',justifyContent:'flex-start'}}>
          {repos.map(r => (
            <Repo key={r.id} repo={r} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
