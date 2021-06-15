import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Grid,
  Avatar,
  Link,
} from '@material-ui/core';

export function Graduate() {
  return (
    <Card elevation={0}>
      <CardHeader title="Graduate" />
      <CardContent>
        <Grid container spacing={2} direction="row" justify="flex-start">
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <Card elevation={3}>
              <CardHeader
                avatar={<Avatar>U</Avatar>}
                title={
                  <Link href="https://unipampa.edu.br/portal/" target="_blank">
                    Bachelor's degree, Software Engineer
                  </Link>
                }
                subheader="Universidade Federal do Pampa - UNIPAMPA - 2016 - 2019"
              />
              <CardContent>
                <Typography variant="caption">
                  * GPA/10: 8.74; * GPA/5: 3.50; * Train qualified, ethical and
                  qualified professionals to work in different activities in the
                  area of Software Engineering; * Enable students to apply their
                  knowledge in an entrepreneurial and innovative way,
                  contributing to human, economic and social development;
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <Card elevation={3}>
              <CardHeader
                avatar={<Avatar>B</Avatar>}
                title={
                  <Link
                    href="https://m.facebook.com/profile.php?id=1134566993240482"
                    target="_blank"
                  >
                    High School Diploma
                  </Link>
                }
                subheader="Colégio Estatual Barão de Capanema - 2013 - 2015"
              />
              <CardContent>
                <Typography variant="caption">
                  * GPA/10: 9,14; * GPA/5: 3,66;
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
