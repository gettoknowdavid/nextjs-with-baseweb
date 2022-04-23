import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { debug, styletron } from '../styletron';
import CustomTheme from '../theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <BaseProvider theme={CustomTheme}>
        {getLayout(<Component {...pageProps} />)}
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
