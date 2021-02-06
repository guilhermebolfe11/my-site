import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: 'calc(100vh - 65px)' }}
      >
        <Header />
        <Card style={{ backgroundColor: '#37474F' }} elevation={0}>
          <CardContent
            style={{ height: 'calc(100vh - 130px)', textAlign: 'center' }}
          >
            <Typography variant="h6" color="primary">
              {t('Development')}
            </Typography>
            <CircularProgress color="primary" />
          </CardContent>
        </Card>
      </Grid>
      <Footer />
      <Loading open={open} handleClose={handleClose} closeOnClick />
    </>
  );
};

export default Home;
