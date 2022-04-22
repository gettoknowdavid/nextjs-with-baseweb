import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import '../styles/globals.css';
import { BaseProvider, LightTheme } from 'baseui';
import { debug, styletron } from '../styletron';

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <BaseProvider theme={LightTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
