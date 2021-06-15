import React from 'react';
import {
  Card,
  CardContent,
  Tooltip,
  Link,
  Grid,
  CardHeader,
} from '@material-ui/core';

import IStack from '../../DTOs/IStack';

interface IStackProps {
  stack: IStack;
}

export function Stack({ stack }: IStackProps) {
  return (
    <Grid item>
      <Card>
        <CardHeader subheader={stack.title} />
        <CardContent>
          <Grid container spacing={2} direction="row" justify="flex-start">
            {stack.techs.map(t => (
              <Grid item>
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
