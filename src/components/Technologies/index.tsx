import React from 'react';
import {
  Card,
  CardContent,
  Tooltip,
  Link,
  Grid,
  CardHeader,
} from '@material-ui/core';

import { Stack } from './Stack';

import development from './development';
import databases from './databases';
import devops from './devops';
import others from './others';
import tests from './tests';

export function Technologies() {
  return (
    <Card elevation={0}>
      <CardHeader title="Technologies" />
      <CardContent>
        <Grid container spacing={2} direction="row" justify="flex-start">
          <Stack stack={development} />
          <Stack stack={databases} />
          <Stack stack={devops} />
          <Stack stack={tests} />
          <Stack stack={others} />
        </Grid>
      </CardContent>
    </Card>
  );
}
