import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';

import ILoading from './ILoading';

const Loading: React.FC<ILoading> = (props: ILoading) => {
  const { handleClose, open, closeOnClick } = props;
  const theme = useTheme();
  return (
    <Backdrop
      open={open}
      onClick={() => (closeOnClick ? handleClose() : undefined)}
      style={{ zIndex: theme.zIndex.drawer + 1, color: '#fff' }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
