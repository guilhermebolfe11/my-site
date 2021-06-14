import React from 'react';
import { Grid } from '@material-ui/core';

import { Description } from '../Description';
import { Social } from '../Social';

export function Introduction() {
  return (
    <Grid item container direction="row">
      <Description />
      <Social />
    </Grid>
  );
}
