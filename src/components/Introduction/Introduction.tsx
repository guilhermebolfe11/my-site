import React from 'react';
import Grid from '@mui/material/Grid';

import { Description } from './Description';
import { Social } from './Social';

export function Introduction() {
  return (
    <Grid item container title="introduction" sx={{ direction:'row',alignItems:'center',justifyContent:"center"}}>
      <Grid item xs={12} sm={12} md={6} lg={5} xl={3}>
        <Description />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
        <Social />
      </Grid>
    </Grid>
  );
}
