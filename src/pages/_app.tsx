import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@lib/theme";
import Head from "next/head";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
