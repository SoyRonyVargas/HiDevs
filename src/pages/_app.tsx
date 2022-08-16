import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { theme, createEmotionCache } from '../utils'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

type Props = AppProps & {
  emotionCache: EmotionCache
}

const MyApp: React.FunctionComponent<Props> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MyApp
