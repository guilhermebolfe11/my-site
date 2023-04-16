import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { LanguageProvider } from '../src/context/LanguageContext';
import { ThemeProvider } from '../src/context/ThemeContext';
import { Box, Toolbar } from '@mui/material';
import Header from '../src/components/Header';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <LanguageProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Guilherme Bolfe</title>
        </Head>
        <ThemeProvider >
          <CssBaseline />
          <Header/>
          <Toolbar />
          <Box sx={{ flexGrow: 1, padding: 1, backgroundColor: "#fff" }}>
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </LanguageProvider>
    </CacheProvider>
  );
}