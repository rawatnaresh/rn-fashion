import {createTheme, createText, createBox} from '@shopify/restyle';

// const palette = {
//   purpleLight: '#8C6FF7',
//   purplePrimary: '#5A31F4',
//   purpleDark: '#3F22AB',

//   greenLight: '#56DCBA',
//   greenPrimary: '#0ECD9D',
//   greenDark: '#0A906E',

//   black: '#0B0B0B',
//   white: '#F0F2F3',
// };

const theme = createTheme({
  colors: {
    primary: '#2CB9B0',
    white: 'white',
    title: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.7)',
    grey: 'rgba(12, 13, 52, 0.05)',
    'slide.grey': 'red',
    button: '#0C0D34',
    transparent: 'transparent',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      color: 'white',
      textAlign: 'center',
      lineHeight: 80,
      // fontFamily: 'SF-Pro-Display-Bold',
    },
    title1: {
      fontSize: 28,
      color: 'title',
      // fontFamily: 'SF-Pro-Display-Medium',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: 'title',
      // fontFamily: 'SF-Pro-Display-Medium',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      color: 'text',
      // fontFamily: 'SF-Pro-Display-Light',
    },
  },
});

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
