import React from 'react';
import {
  Card,
  CardContent,
  Tooltip,
  Link,
  CardHeader,
} from '@material-ui/core';
import {
  SiTypescript,
  SiReact,
  SiCsharp,
  SiAmazonaws,
  SiNodeDotJs,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiJest,
  SiGithubactions,
  SiDotNet,
  SiWebpack,
  SiMaterialUi,
  SiNextDotJs,
  SiEslint,
  SiPrettier,
  SiVagrant,
  SiMongodb,
  SiSwagger,
  SiAzurepipelines,
} from 'react-icons/si';
import { BsKanban } from 'react-icons/bs';

export function Technologies() {
  return (
    <Card elevation={0}>
      <CardHeader title="Technologies" />
      <CardContent>
        <CardHeader subheader="Development" />
        <Tooltip title="React">
          <Link href="https://reactjs.org/" target="_blank">
            <SiReact size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Typescript">
          <Link href="https://www.typescriptlang.org/" target="_blank">
            <SiTypescript size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Node">
          <Link href="https://nodejs.org/" target="_blank">
            <SiNodeDotJs size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Next.js">
          <Link href="https://nextjs.org/" target="_blank">
            <SiNextDotJs size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="C#">
          <Link
            href="https://docs.microsoft.com/pt-br/dotnet/csharp/"
            target="_blank"
          >
            <SiCsharp size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title=".Net">
          <Link href="https://docs.microsoft.com/pt-br/dotnet/" target="_blank">
            <SiDotNet size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="JavaScript">
          <Link
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
          >
            <SiJavascript size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="CSS">
          <Link
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            target="_blank"
          >
            <SiCss3 size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Html">
          <Link
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
            target="_blank"
          >
            <SiHtml5 size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Material-UI">
          <Link href="https://material-ui.com/" target="_blank">
            <SiMaterialUi size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Git">
          <Link href="https://git-scm.com/" target="_blank">
            <SiGit size="2rem" />
          </Link>
        </Tooltip>

        <CardHeader subheader="Databases" />
        <Tooltip title="MySQL">
          <Link href="https://www.mysql.com/" target="_blank">
            <SiMysql size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="PostgreSQL">
          <Link href="https://www.postgresql.org/" target="_blank">
            <SiPostgresql size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="MongoDb">
          <Link href="https://www.mongodb.com/" target="_blank">
            <SiMongodb size="2rem" />
          </Link>
        </Tooltip>

        <CardHeader subheader="DevOps" />
        <Tooltip title="Amazon Web Services">
          <Link href="https://aws.amazon.com/" target="_blank">
            <SiAmazonaws size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Docker">
          <Link href="https://www.docker.com/" target="_blank">
            <SiDocker size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="GitHub Actions">
          <Link href="https://github.com/features/actions" target="_blank">
            <SiGithubactions size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Vagrant">
          <Link href="https://www.vagrantup.com/" target="_blank">
            <SiVagrant size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Azure Pipelines">
          <Link
            href="https://azure.microsoft.com/pt-br/services/devops/pipelines/"
            target="_blank"
          >
            <SiAzurepipelines size="2rem" />
          </Link>
        </Tooltip>

        <CardHeader subheader="Test" />
        <Tooltip title="Jest">
          <Link href="https://jestjs.io/" target="_blank">
            <SiJest size="2rem" />
          </Link>
        </Tooltip>

        <CardHeader subheader="Others" />
        <Tooltip title="Webpack">
          <Link href="https://webpack.js.org/" target="_blank">
            <SiWebpack size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Eslint">
          <Link href="https://eslint.org/" target="_blank">
            <SiEslint size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Prettier">
          <Link href="https://prettier.io/" target="_blank">
            <SiPrettier size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Swagger">
          <Link href="https://swagger.io/" target="_blank">
            <SiSwagger size="2rem" />
          </Link>
        </Tooltip>
        <Tooltip title="Kanban">
          <Link href="https://blog.trello.com/br/metodo-kanban" target="_blank">
            <BsKanban size="2rem" />
          </Link>
        </Tooltip>
      </CardContent>
    </Card>
  );
}
