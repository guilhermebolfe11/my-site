import React from 'react';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import IRepository from '../../interfaces/IRepository';
import { Repo } from './Repo';
import useTranslation from '../../hooks/useTranslation';
interface IProjectsProps {
  repos: IRepository[];
}

export function Projects({ repos }: IProjectsProps) {
  const { t } = useTranslation();
  return (
    <Card elevation={0}>
      <CardHeader title={t("Projects.Title")}/>
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
