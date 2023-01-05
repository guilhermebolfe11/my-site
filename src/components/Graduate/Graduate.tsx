import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Avatar,
  Link,
  Typography
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export function Graduate() {
  return (
    <Card elevation={0}>
      <CardHeader title="Graduate" />
      <CardContent>
        <Grid container spacing={2} sx={{ direction: 'row', justifyContent: 'flex-start' }} >
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><SchoolIcon fontSize="large" /></Avatar>}
                title={
                  <Link href="https://unipampa.edu.br/portal/" target="_blank">
                    {"Bachelor`s degree, Software Engineer"}
                  </Link>
                }
                subheader="Universidade Federal do Pampa - UNIPAMPA - 2016 - 2019"
              />
              <CardContent>
                <Typography variant='caption'>
                  Train qualified, ethical and
                  qualified professionals to work in different activities in the
                  area of Software Engineering.
                </Typography>
                <Typography variant='caption'>
                  Enable students to apply their knowledge in an entrepreneurial and innovative way,
                  contributing to human, economic and social development.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
