import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Fonts } from '../styles/fonts';
import { PageTransition } from 'next-page-transitions';

// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Fonts />
      <Flex direction="column" minHeight="100vh" width="100%">
        <Flex direction="column" flexGrow={1}>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
