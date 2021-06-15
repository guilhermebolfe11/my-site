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

export function Publications() {
  return (
    <Card elevation={0}>
      <CardHeader title="Publications" />
      <CardContent>
        <Grid container spacing={2} direction="row" justify="flex-start">
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar>T</Avatar>}
                title={
                  <Link
                    href="https://ieeexplore.ieee.org/document/8870160"
                    target="_blank"
                  >
                    Thoth: A Web-based Tool to Support Systematic Reviews
                  </Link>
                }
                subheader="2019-09-01"
              />
              <CardContent>
                <Typography variant="caption">
                  Background: Systematic Reviews (SR) are crucial for collecting
                  evidence related with a particular field or area. Hence, there
                  are different protocols for conducting SR in software
                  engineering. There is also several tools designed to provide
                  support for these protocols. Aims: We understand that there is
                  still a lack of a web-tool, fully integrating the features
                  considered important for SR. Implementing such a tool would be
                  a great contribution to the field. Method: We analyzed several
                  studies discussing features for tools supporting SR. We
                  defined design decisions based on these features. Results: We
                  created Thoth, a web-based tool for SR. In this study we
                  present a first version, containing a set of features. Before
                  moving forward with the implementation, we conducted a
                  quasi-experiment for evaluating and comparing Thoth with a
                  similar tool. Conclusion: Despite being in the right direction
                  for achieving our goal, the results of the quasi-experiment
                  provided us with important evidence for improving Thoth. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar>E</Avatar>}
                title={
                  <Link
                    href="http://seer.unipampa.edu.br/index.php/siepe/article/view/34160"
                    target="_blank"
                  >
                    Engenharia Reversa: Transformador de Código C++para Modelo
                  </Link>
                }
                subheader="2018-11-07"
              />
              <CardContent>
                <Typography variant="caption"></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar>U</Avatar>}
                title={
                  <Link
                    href="http://seer.unipampa.edu.br/index.php/siepe/article/view/31711"
                    target="_blank"
                  >
                    Um Relato Sobre Fomento da Postura Empreededora em Sala de
                    Aula
                  </Link>
                }
                subheader="2018-11-06"
              />
              <CardContent>
                <Typography variant="caption"></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar>E</Avatar>}
                title={
                  <Link
                    href="https://coens.dv.utfpr.edu.br/eres/wp-content/uploads/2018/09/Anais_ERES_2018.pdf"
                    target="_blank"
                  >
                    Em Direção à Engenharia Reversa Adaptativa de Binários e
                    Códigos para Modelo
                  </Link>
                }
                subheader="2018-10-23"
              />
              <CardContent>
                <Typography variant="caption"></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
