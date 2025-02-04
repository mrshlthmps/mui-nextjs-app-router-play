'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { blue, green } from './app/colors';
import { grey } from '@mui/material/colors';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    cssVariables: true,
    colorSchemes: {
        dark: true,
    },
    // Shows how to override the main color scheme
    palette: {
        mode: 'light',
        primary: {
            main: blue[500],
         },
         secondary: {
            main: green[300],
         },
         background: {
            default: grey[300],
            paper: grey[300],
         }
    },

    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    // Shows how to override specific MUI component properties
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: 'info' },
                            style: {
                                backgroundColor: '#60a5fa',
                            },
                        },
                    ],
                },
            },
        },
        MuiLink: {
            defaultProps: {
                color: 'primary.main',
                // underline: 'hover',  // Only shows the underline on hover
            },
        }
    },
});

export default theme;