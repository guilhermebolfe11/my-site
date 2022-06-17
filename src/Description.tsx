import React from 'react';
import { Card, CardContent, TablePagination, Typography } from '@mui/material';

export function Description() {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography variant="h2">
          Guilherme
          <br />
          Bolfe
        </Typography>
        <Typography variant="subtitle1">
        Software Engineer based in Porto Alegre, Brazil. 
        </Typography>
      </CardContent>
    </Card>
  );
}
