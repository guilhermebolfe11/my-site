import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Avatar,
  Link,
  Typography,
  Tooltip,
} from '@material-ui/core';
import { format } from 'date-fns';
import { SiTypescript, SiJupyter, SiMarkdown } from 'react-icons/si';

import IRepository from '../../DTOs/IRepository';

interface IRepoProps {
  repo: IRepository;
}

export function Repo({ repo }: IRepoProps) {
  function getIconLanguage(language: string) {
    switch (language) {
      case 'Jupyter Notebook':
        return <SiJupyter />;

      case 'TypeScript':
        return <SiTypescript />;
      default:
        return <SiMarkdown />;
    }
  }

  return (
    <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Tooltip title={repo.language ?? 'Markdown'} placement="top">
              <Avatar>{getIconLanguage(repo.language)}</Avatar>
            </Tooltip>
          }
          title={
            <Link href={repo.html_url} target="_blank">
              {repo.name}
            </Link>
          }
          subheader={format(new Date(repo.pushed_at), 'yyy-MM-dd hh:mm aa')}
        />
        <CardContent>
          <Typography variant="caption">{repo.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
