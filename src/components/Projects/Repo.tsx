import React, { useContext } from 'react';
import {
  Card,
  CardHeader,
  Grid,
  Avatar,
  Link,
  Tooltip,
} from '@mui/material';
import { format } from 'date-fns';
import { SiTypescript, SiJupyter, SiMarkdown } from 'react-icons/si';

import IRepository from '../../interfaces/IRepository';
import { LanguageContext } from '../../context/LanguageContext';

interface IRepoProps {
  repo: IRepository;
}

export function Repo({ repo }: IRepoProps) {
  const { locale } = useContext(LanguageContext);
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

  function getFormatDate(locale: string): string {
    switch (locale) {
      case 'ptBR':
        return "dd/MM/yyy HH:mm";
      default:
        return "yyy-MM-dd hh:mm aa";
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
          subheader={format(new Date(repo.pushed_at), getFormatDate(locale))}
        />
      </Card>
    </Grid>
  );
}
