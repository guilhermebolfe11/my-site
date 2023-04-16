import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Avatar,
  Link,
  Typography,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import useTranslation from '../../hooks/useTranslation';

export function Jobs() {
  const { t } = useTranslation();
  return (
    <Card elevation={0}>
      <CardHeader title={t("Jobs.Title")} />
      <CardContent>
        <Grid container spacing={2} sx={{ direction: 'row', justifyContent: 'flex-start' }}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3} >
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><BusinessIcon fontSize="large" /></Avatar>}
                title={
                  <Link href="https://gavea.com/" target="_blank">
                    {t("Jobs.Gavea.Title")}
                  </Link>
                }
                subheader={t("Jobs.Gavea.SubTitle")}
              />
              <CardContent>
                <Typography variant='caption'>
                  {t("Jobs.Gavea.Content")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><BusinessIcon fontSize="large" /></Avatar>}
                title={
                  <Link href="https://www.btgpactual.com/" target="_blank">
                    {t("Jobs.BTG.Title")}
                  </Link>
                }
                subheader={t("Jobs.BTG.SubTitle")}
              />
              <CardContent>
                <Typography variant='caption'>
                  {t("Jobs.BTG.Content")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><BusinessIcon fontSize="large" /></Avatar>}
                title={
                  <Link href="https://qualisinfectologia.com.br/" target="_blank" >
                    {t("Jobs.Qualis.Title")}
                  </Link>
                }
                subheader={t("Jobs.Qualis.SubTitle")}
              />
              <CardContent>
                <Typography variant='caption'>
                  {t("Jobs.Qualis.Content")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><BusinessIcon fontSize="large" /></Avatar>}
                title={
                  <Link href="http://ditech.com.br/" target="_blank">
                    {t("Jobs.Ditech.Title")}
                  </Link>
                }
                subheader={t("Jobs.Ditech.SubTitle")}
              />
              <CardContent>
                <Typography variant='caption'>
                {t("Jobs.Ditech.Content")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
