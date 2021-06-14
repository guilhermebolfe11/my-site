import React from 'react';
import { Card, CardContent, Grid, Link, Tooltip } from '@material-ui/core';
import { FaGithub, FaLinkedinIn, FaInstagram, FaSpotify } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export function Social() {
  return (
    <Card elevation={0}>
      <CardContent>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Tooltip title="GitHub">
            <Link href="https://github.com/guilhermebolfe11/" target="_blank">
              <FaGithub size="2rem" />
            </Link>
          </Tooltip>
          <Tooltip title="Linkedin">
            <Link
              href="https://www.linkedin.com/in/guilherme-bolfe/"
              target="_blank"
            >
              <FaLinkedinIn size="2rem" />
            </Link>
          </Tooltip>
          <Tooltip title="Instagram">
            <Link href="https://www.instagram.com/guibolfe/" target="_blank">
              <FaInstagram size="2rem" />
            </Link>
          </Tooltip>
          <Tooltip title="Spotify">
            <Link
              href="https://open.spotify.com/user/guilhermebolfe"
              target="_blank"
            >
              <FaSpotify size="2rem" />
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
