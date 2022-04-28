import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brandGrey: {
      400: '#363D45',
    },
    textBlue: {
      400: '#EDF4F6',
    },
    brandBlue: {
      400: '#00ADB5',
    },
    brandGold: {
      400: '#FFCA28',
    },
     brandRed: {
      400: '#F56565',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  space: {
    spacer: '24px',
  },
  sizes: {
    maxWidth: '2400px',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;
