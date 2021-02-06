import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <Toolbar variant="regular" id="back-to-top-anchor" style={{ height: 65 }}>
      <Typography variant="h3" component="span" color="primary">
        Guilherme Bolfe
      </Typography>
    </Toolbar>
  );
};

export default Header;
