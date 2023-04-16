import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  CardHeader,
} from '@mui/material';

import { Stack } from './Stack';
import development from './development';
import databases from './databases';
import devops from './devops';
import others from './others';
import cloud from './cloud';
import useTranslation from '../../hooks/useTranslation';

export function Stacks() {
  const { t } = useTranslation();
  return (
    <Card elevation={0}>
      <CardHeader title={t("Stacks.Title")} />
      <CardContent>
        <Grid container spacing={2} sx={{direction:'row',justifyContent:'flex-start'}}>
          <Stack stack={development} title={t("Stacks.Development.Title")}/>
          <Stack stack={cloud} title={t("Stacks.Cloud.Title")}/>
          <Stack stack={databases} title={t("Stacks.Databases.Title")}/>
          <Stack stack={devops} title={t("Stacks.DevOps.Title")}/>
          <Stack stack={others} title={t("Stacks.Others.Title")}/>
        </Grid>
      </CardContent>
    </Card>
  );
}
