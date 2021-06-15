import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';

import '../styles/global.scss';
import MaterialTheme from '../styles/MaterialTheme';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={MaterialTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
