import { ChakraProvider, Flex } from '@chakra-ui/react';
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { Fonts } from '../styles/fonts';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Fonts />
      <Flex direction="column" minHeight="100vh" width="100%">
        <Component {...pageProps} key={router.route} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
