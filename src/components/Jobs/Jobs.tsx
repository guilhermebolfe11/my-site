import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Avatar,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';

export function Jobs() {
  return (
    <Card elevation={0}>
      <CardHeader title="Jobs" />
      <CardContent>
        <Grid container spacing={2} sx={{direction:'row',justifyContent:'flex-start'}}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><BusinessIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://gavea.com/" target="_blank">
                    Gavea Marketplace - Backend Engineer
                  </Link>
                }
                subheader="2021-11 - present"
              />
              <CardContent>
                <Typography variant='caption'>
                  Responsible for planing, architecture, development, testing and maintenance of services.
                  Focus on cloud services, seeking the best solution.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><BusinessIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://www.btgpactual.com/" target="_blank">
                    BTG Pactual - IT Analyst
                  </Link>
                }
                subheader="2020-08 - 2021-11"
              />
              <CardContent>
              <Typography variant='caption'>
                {"Responsible for developing projects for the bank's internal use."+
                "Participating actively in the planning decision of projects."+
                "Responsible for all stages of the project life cycle."}
              </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><BusinessIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://qualisinfectologia.com.br/" target="_blank" >
                    Qualis - Software Engineer
                  </Link>
                }
                subheader="2020-03 - 2020-08"
              />
              <CardContent>
              <Typography variant='caption'>
                {"Responsible for the company's technology team."+
                "Acting in person."+
                "Managing team of 4 Developers including myself."+
                "Interaction with suppliers and managers."}
              </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><BusinessIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="http://ditech.com.br/" target="_blank">
                    Ditech - FullStack Developer
                  </Link>
                }
                subheader="2019-10 - 2020-03"
              />
              <CardContent>
              <Typography variant='caption'>
                Responsible for developing solutions for different projects.
                Acting in the stages of analysis, development, testing and maintenance of the tasks performed.
                Working with different domain and technology niches.
                The projects were conducted in 15-day Sprints containing daily
                meetings and a face-to-face meeting at each end of the sprint for alignment.
              </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
