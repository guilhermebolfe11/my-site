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

export function Stacks() {
  return (
    <Card elevation={0}>
      <CardHeader title="Stacks" />
      <CardContent>
        <Grid container spacing={2} sx={{direction:'row',justifyContent:'flex-start'}}>
          <Stack stack={development} />
          <Stack stack={cloud} />
          <Stack stack={databases} />
          <Stack stack={devops} />
          <Stack stack={others} />
        </Grid>
      </CardContent>
    </Card>
  );
}
