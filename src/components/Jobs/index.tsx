import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Grid,
  Avatar,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

export function Jobs() {
  return (
    <Card elevation={0}>
      <CardHeader title="Jobs" />
      <CardContent>
        <Grid container spacing={2} direction="row" justify="flex-start">
          <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
            <Card elevation={3}>
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
                <List>
                  <ListItem>
                    <ListItemText secondary="Responsible for developing projects / tasks for the bank's
                   internal use" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Participating actively in the planning decision
                    of projects / tasks" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Responsible for all stages of the
                    project / task life cycle" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Acting remotely" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
            <Card elevation={3}>
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
                <List>
                  <ListItem>
                    <ListItemText secondary="Responsible for the company's technology team" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Acting in person" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Managing team of 4 Developers including myself" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Interaction with suppliers and managers" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
            <Card elevation={3}>
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
                <List>
                  <ListItem>
                    <ListItemText secondary="Responsible for developing solutions for different projects" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Acting in the stages of analysis, development, testing and
                    maintenance of the tasks performed" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Working with different
                    domain and technology niches" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="The
                    projects were conducted in 15-day Sprints containing daily
                    meetings and a face-to-face meeting at each end of the sprint
                    for alignment" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Acting remotely" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
