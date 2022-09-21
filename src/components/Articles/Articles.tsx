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

export function Articles() {
  return (
    <Card elevation={0}>
      <CardHeader title="Articles" />
      <CardContent>
        <Grid container spacing={2} sx={{direction:'row',justifyContent:'flex-start'}}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><ArticleIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://ieeexplore.ieee.org/document/8870160"target="_blank">
                    Thoth: A Web-based Tool to Support Systematic Reviews
                  </Link>
                }
                subheader="2019-09-01"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><ArticleIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/100352"target="_blank">
                    Engenharia Reversa: Transformador de Código C++para Modelo
                  </Link>
                }
                subheader="2018-11-07"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><ArticleIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/86619" target="_blank">
                    Um Relato Sobre Fomento da Postura Empreendedora em Sala de
                    Aula
                  </Link>
                }
                subheader="2018-11-06"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar><ArticleIcon fontSize="large"/></Avatar>}
                title={
                  <Link href="https://coens.dv.utfpr.edu.br/eres/wp-content/uploads/2018/09/Anais_ERES_2018.pdf"target="_blank">
                    Em Direção à Engenharia Reversa Adaptativa de Binários e Códigos para Modelo
                  </Link>
                }
                subheader="2018-10-23"
              />
             
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
