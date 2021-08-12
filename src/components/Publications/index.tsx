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
                    href="https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/100352"
                    target="_blank"
                  >
                    Engenharia Reversa: Transformador de Código C++para Modelo
                  </Link>
                }
                subheader="2018-11-07"
              />
              <CardContent>
                <Typography variant="caption">
                  Many software products over time become obsolete, due to the
                  constant evolution of user needs and the natural evolution of
                  available technologies, thus requiring maintenance or
                  additions of features. To make these changes in the
                  software, it is necessary to understand the system's
                  source code: its structure, algorithms and execution flows.
                  However, there are situations where this source code is
                  inconsistently or superficially documented, or even does
                  not have any supporting documents, making understanding
                  the system a costly task. The transformer generated in this
                  work has the ability to extract structural information from
                  classes: its name, what its attributes and functions are,
                  the visibility of these attributes and functions and the
                  signature (input parameters and return type) of these
                  functions. It is possible to mention as an advantage
                  of the work performed that, after abstracting information
                  from the source code to a model, it is possible to export
                  it to other programming languages. Thus, facilitating
                  application migration. In addition to exports and migrations,
                  after the reverse engineering process is applied, we can use
                  verification and validation techniques in the generated models,
                  ensuring a better quality of applications.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar>U</Avatar>}
                title={
                  <Link
                    href="https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/86619"
                    target="_blank"
                  >
                    Um Relato Sobre Fomento da Postura Empreendedora em Sala de
                    Aula
                  </Link>
                }
                subheader="2018-11-06"
              />
              <CardContent>
                <Typography variant="caption">
                  The growing interest in the subject of entrepreneurship has led companies and academia to use
                  more and more techniques that encourage visual communication and an entrepreneurial posture.
                  presents an experience report on an approach that can foster an entrepreneurial posture
                  in the classroom. The approach was used in the Entrepreneurship Administration course,
                  offered to students of courses in the area of ​​computing and engineering in the years of 2017 and 2018 in
                  Federal University of Pampa - UNIPAMPA, Alegrete campus. The main approach was
                  objective to stimulate the speech and entrepreneurial engagement of students using drawings and enactments
                  as resources, in which academics aimed to simulate the presentation of a product
                  innovative potential investors and customers. As a result, an example of what was
                  performed in the classroom. The approach is considered to have fulfilled its objective.
                  allows you to simulate an innovative idea sales environment.
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
                <Typography variant="caption">
                  Through code-to-model reverse engineering techniques it is
                  possible to extract structural information from source code to
                  a level independent of the programming language adopted.
                  Some benefits associated with these techniques include ease 
                  of understanding of poorly documented systems as well as 
                  the (semi-) automatic migration of applications from one 
                  technology to another. This paper investigates the 
                  possibility for the adaptive extraction of structural 
                  characteristics from source codes written in the C++ 
                  language to a UML model, presenting a proof concept 
                  and discussions about future works.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
