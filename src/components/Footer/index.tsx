import React from 'react';
import { Typography, Toolbar, IconButton, Tooltip } from '@material-ui/core';
import { GitHub, BugReport, LinkedIn, Mail } from '@material-ui/icons';

import Language from '../Language';
import Copyright from '../Copyright';

const Footer: React.FC = () => {
  return (
    <Toolbar style={{ height: 65 }}>
      <Typography variant="body2" style={{ flexGrow: 1 }}>
        <Copyright />
      </Typography>
      <Tooltip title="Github" placement="top">
        <IconButton
          color="primary"
          href="https://github.com/guilhermebolfe11"
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Tooltip>
      <Tooltip title="Linkedin" placement="top">
        <IconButton
          color="primary"
          href="https://www.linkedin.com/in/guilherme-bolfe/"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
      </Tooltip>
      <Tooltip title="Mail" placement="top">
        <IconButton
          color="primary"
          href="mailto:bolfeguilherme@gmail.com"
          target="_blank"
        >
          <Mail />
        </IconButton>
      </Tooltip>
      <Tooltip title="Bugs" placement="top">
        <IconButton
          color="primary"
          href="https://github.com/guilhermebolfe11/my-site/issues/new"
          target="_blank"
        >
          <BugReport />
        </IconButton>
      </Tooltip>
      <Language />
    </Toolbar>
  );
};

export default Footer;
