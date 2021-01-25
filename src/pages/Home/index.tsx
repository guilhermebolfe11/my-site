import React from 'react';
import {
  Card,
  CardHeader,
  Grid,
  Typography,
  Toolbar,
  IconButton,
  CircularProgress,
  CardContent,
} from '@material-ui/core';
import { GitHub, BugReport } from '@material-ui/icons';

const Home: React.FC = () => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: 'calc(100vh - 65px)' }}
      >
        <Grid item>
          <Card elevation={3} style={{ minWidth: 300 }}>
            <CardHeader
              title="Under development"
              style={{ textAlign: 'center' }}
            />
            <CardContent style={{ textAlign: 'center' }}>
              <CircularProgress />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Toolbar style={{ height: 65 }}>
        <Typography variant="body2" style={{ flexGrow: 1 }}>
          {`© Guilherme Bolfe ${new Date().getFullYear()}`}
        </Typography>
        <IconButton
          href="https://github.com/guilhermebolfe11/my-site"
          target="_blank"
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://github.com/guilhermebolfe11/my-site/issues/new"
          target="_blank"
        >
          <BugReport />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default Home;
