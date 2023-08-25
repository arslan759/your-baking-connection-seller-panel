'use client'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    smm: true
    md: true
    lg: true
    xl: true
  }
}
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      smm: 768,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    body1: {
      fontFamily: 'Open Sans',
      fontSize: '12px',
      fontWeight: '400',
      fontStyle: 'normal',
      lineHeight: 'normal',
      ['@media (min-width:768px)']: {
        fontSize: '18px',
      },
    },
    body2: {
      fontFamily: 'Josefin Sans',
      fontSize: '12px',
      fontWeight: '400',
      fontStyle: 'normal',
      lineHeight: 'normal',
      ['@media (min-width:768px)']: {
        fontSize: '18px',
      },
    },

    h4: {
      fontFamily: 'Josefin Sans',
      fontSize: '24px',
      ['@media (min-width:768px)']: {
        fontSize: '48px',
      },
      fontWeight: '800',
      lineHeight: '70px',
      textTransform: 'capitalize',
    },

    h5: {
      fontFamily: 'Open Sans',
      fontSize: '24px',
      ['@media (min-width:768px)']: {
        fontSize: '32px',
      },
      fontWeight: '800',
      lineHeight: '70px',
      textTransform: 'capitalize',
    },
    h6: {
      fontFamily: 'Josefin Sans',
      fontSize: '18px',
      ['@media (min-width:768px)']: {
        fontSize: '24px',
      },
      fontWeight: '700',
      fontStyle: 'normal',
      lineHeight: 'normal',
      textTransform: 'capitalize',
    },
  },
})
