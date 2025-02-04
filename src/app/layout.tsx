import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { AppBar, Box, Typography } from '@mui/material';
import Grid2  from '@mui/material/Grid2';
import SideNav from '@/components/SideNav';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme} defaultMode="system">
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Grid2 container direction='column'>
              <Grid2>
                <AppBar position='static' sx={{ alignItems: 'center', height: '3rem' }}>
                  <Typography sx={{ mt: 1 }}>This goes up top</Typography>
                </AppBar>
              </Grid2>
              <Grid2 sx={{ backgroundColor: 'background.default'}}>
              <Grid2 container>
                <Grid2 size={2} sx={{ display: { xs: 'none', sm: 'contents'}, borderRightColor: 'black', borderRightWidth: '1px', borderRightStyle: 'solid' }}>
                  <Box height='100vh' sx={{ backgroundColor: 'secondary.main' }}>
                    <SideNav />
                  </Box>
                </Grid2>
                <Grid2 size={{xs: 12, sm: 10}}>
                  <Box height='100vh'>
                    {props.children}
                  </Box>
                </Grid2>
              </Grid2>
              </Grid2>
            </Grid2>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
