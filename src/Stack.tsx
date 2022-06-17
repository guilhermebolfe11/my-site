import React from 'react';
import {
  Card,
  CardContent,
  Tooltip,
  Link,
  Grid,
  CardHeader,
} from '@mui/material';

import IStack from './interfaces/IStack';

interface IStackProps {
  stack: IStack;
}

export function Stack({ stack }: IStackProps) {
  return (
    <Grid item>
      <Card elevation={3}>
        <CardHeader subheader={stack.title} />
        <CardContent>
          <Grid container spacing={2} sx={{direction:'row',justifyContent:'flex-start'}}>
            {stack.techs.map((t,i)=> (
              <Grid key={i} item>
                <Tooltip title={t.title}>
                  <Link href={t.href} target="_blank">
                    {t.icon}
                  </Link>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
