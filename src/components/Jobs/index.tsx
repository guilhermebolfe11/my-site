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

export function Jobs() {
  return (
    <Card elevation={0}>
      <CardHeader title="Jobs" />
      <CardContent>
        <Grid container spacing={2} direction="row" justify="flex-start">
          <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
            <Card>
              <CardHeader
                avatar={<Avatar>B</Avatar>}
                title={
                  <Link href="https://www.btgpactual.com/" target="_blank">
                    BTG Pactual - IT Analyst
                  </Link>
                }
                subheader="2020-08 - present"
              />
              <CardContent>
                <Typography variant="caption">
                  Responsible for developing projects / tasks for the bank's
                  internal use * Participating actively in the planning decision
                  of projects / tasks; * Responsible for all stages of the
                  project / task life cycle; * Acting remotely;
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
            <Card>
              <CardHeader
                avatar={<Avatar>Q</Avatar>}
                title={
                  <Link
                    href="https://qualisinfectologia.com.br/"
                    target="_blank"
                  >
                    Qualis - Software Engineer
                  </Link>
                }
                subheader="2020-03 - 2020-08"
              />
              <CardContent>
                <Typography variant="caption">
                  Responsible for the company's technology team. * Defining
                  technologies and architectures for projects; * Acting in
                  person; * Managing team of 4 Developers including myself; *
                  Interaction with suppliers and managers;
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
            <Card>
              <CardHeader
                avatar={<Avatar>D</Avatar>}
                title={
                  <Link href="http://ditech.com.br/" target="_blank">
                    Ditech - FullStack Developer
                  </Link>
                }
                subheader="2019-10 - 2020-03"
              />
              <CardContent>
                <Typography variant="caption">
                  Responsible for developing solutions for different projects. *
                  Acting in the stages of analysis, development, testing and
                  maintenance of the tasks performed. * Working with different
                  domain and technology niches. * Acting remotely. * The
                  projects were conducted in 15-day Sprints containing daily
                  meetings and a face-to-face meeting at each end of the sprint
                  for alignment
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
