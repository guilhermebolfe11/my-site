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
import useTranslation from '../../hooks/useTranslation';

export function Graduate() {
  const { t } = useTranslation();
  return (
    <Card elevation={0}>
      <CardHeader title={t("Graduate.Title")} />
      <CardContent>
        <Grid container spacing={2} sx={{ direction: 'row', justifyContent: 'flex-start' }} >
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><SchoolIcon fontSize="large" /></Avatar>}
                title={
                  <Link href="https://unipampa.edu.br/portal/" target="_blank">
                    {t("Graduate.University.Title")}
                  </Link>
                }
                subheader={t("Graduate.University.SubTitle")}
              />
              <CardContent>
                <Typography variant='caption'>{t("Graduate.University.Content")}</Typography> 
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
