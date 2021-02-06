import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

const FooterPublic: React.FC = () => {
  const [date] = useState(new Date());

  return (
    <Typography variant="body2" component="span" color="primary">
      {`© Guilherme Bolfe ${date.getFullYear()}`}
    </Typography>
  );
};
export default FooterPublic;
