import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Avatar,
  Link
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import useTranslation from '../../hooks/useTranslation';

export function Articles() {
  const { t } = useTranslation();
  return (
    <Card elevation={0}>
      <CardHeader title={t("Articles.Title")} />
      <CardContent>
        <Grid container spacing={2} sx={{direction:'row',justifyContent:'flex-start'}}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><ArticleIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://ieeexplore.ieee.org/document/8870160"target="_blank">
                    {t("Articles.Thoth.Title")}
                  </Link>
                }
                subheader={t("Articles.Thoth.SubTitle")}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><ArticleIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/100352"target="_blank">
                    {t("Articles.Reverse.Title")}
                  </Link>
                }
                subheader={t("Articles.Reverse.SubTitle")}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><ArticleIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/86619" target="_blank">
                    {t("Articles.Entrepreneur.Title")}
                  </Link>
                }
                subheader={t("Articles.Entrepreneur.SubTitle")}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><ArticleIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://coens.dv.utfpr.edu.br/eres/wp-content/uploads/2018/09/Anais_ERES_2018.pdf"target="_blank">
                    {t("Articles.ReverseModel.Title")}
                  </Link>
                }
                subheader={t("Articles.ReverseModel.SubTitle")}
              />
             
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
