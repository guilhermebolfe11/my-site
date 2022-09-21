import React from 'react';
import { Card, CardContent, Grid, Link, Tooltip } from '@mui/material';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export function Social() {
  return (
    <Card elevation={0}>
      <CardContent>
        <Grid container sx={{ direction:'row',alignItems:'center',justifyContent:"space-between"}}>
          <Tooltip title="GitHub">
            <Link href="https://github.com/guilhermebolfe11/" target="_blank">
              <FaGithub size="2rem" />
            </Link>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <Link href="https://www.linkedin.com/in/guilherme-bolfe/"target="_blank">
              <FaLinkedinIn size="2rem" />
            </Link>
          </Tooltip>
          
          <Tooltip title="Send Mail">
            <Link href="mailto:bolfeguilherme@gmail.com" target="_blank">
              <MdMail size="2rem" />
            </Link>
          </Tooltip>
        </Grid>
      </CardContent>
    </Card>
  );
}
