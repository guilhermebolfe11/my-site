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
  ListItemText
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
                <List>
                  <ListItem>
                    <ListItemText secondary="Train qualified, ethical and
                    qualified professionals to work in different activities in the
                    area of Software Engineering."/>
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="Enable students to apply their
                    knowledge in an entrepreneurial and innovative way,
                    contributing to human, economic and social development."/>
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="GPA/10: 8.74" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="GPA/5: 3.50" />
                  </ListItem>
                </List>
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
                <List>
                  <ListItem>
                    <ListItemText secondary="GPA/10: 9.14" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="GPA/5: 3.66" />
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
