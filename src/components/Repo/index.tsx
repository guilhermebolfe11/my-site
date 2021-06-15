import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Avatar,
  Link,
  Typography,
} from '@material-ui/core';
import IRepository from '../../DTOs/IRepository';

interface IRepoProps {
  repo: IRepository;
}

export function Repo({ repo }: IRepoProps) {
  return (
    <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
      <Card>
        <CardHeader
          title={
            <Link href={repo.html_url} target="_blank">
              {repo.name}
            </Link>
          }
          avatar={<Avatar>{repo.name[0].toUpperCase()}</Avatar>}
        />
        <CardContent>
          <Typography variant="caption">{repo.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
