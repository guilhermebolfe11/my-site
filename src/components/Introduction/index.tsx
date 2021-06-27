import React from 'react';
import { Grid } from '@material-ui/core';

import { Description } from '../Description';
import { Social } from '../Social';

export function Introduction() {
  return (
    <Grid item container direction="row" alignItems="center" justify="center" title="introduction">
      <Grid item xs={12} sm={12} md={6} lg={5} xl={3}>
        <Description />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
        <Social />
      </Grid>
    </Grid>
  );
}
