'use client';

import React from 'react';
import { Container, Grid, Typography, Box, Button, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'; // Import Link from Next.js

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    allVariants: {
      color: '#000',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

function Congress2024() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#fff',
          overflowY: 'auto',
        }}
      >
        <Container maxWidth="xl" sx={{ padding: 0 }}>
          <Grid container spacing={0} sx={{ height: '100vh' }}>
            {/* Left Sidebar */}
            <Grid
              item
              xs={12}
              sm={2}
              sx={{
                backgroundColor: '#d1d5ff',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                width: '10%',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                <img src="/img/uclmlogo.png" alt="University Logo" width="100%" />
              </Box>
              <Box sx={{ width: '100%' }}>
                {/* Links to navigate to Dashboard and Calendar */}
                <Link href="dashboard" passHref>
                  <Button
                    variant="text"
                    sx={{
                      fontSize: 18,
                      display: 'block',
                      mb: 2,
                      textAlign: 'center',
                      color: '#000',
                      width: '100%',
                    }}
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link href="/calendar" passHref>
                  <Button
                    variant="text"
                    sx={{
                      fontSize: 18,
                      display: 'block',
                      mt: 2,
                      textAlign: 'center',
                      color: '#000',
                      width: '100%',
                    }}
                  >
                    Calendar
                  </Button>
                </Link>
              </Box>
            </Grid>

            {/* Main Content */}
            <Grid
              item
              xs={12}
              sm={10}
              sx={{
                padding: 3,
                marginLeft: '18%', // Adjust to make space for the left sidebar
                overflowY: 'auto',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: '#000' }}>
                10TH UC CCS CONGRESS 2024
              </Typography>

              <Box
                sx={{
                  mb: 3,
                  display: 'flex',
                  justifyContent: 'center', // Centers the image horizontally
                  flexDirection: 'row', // Keeps the image and text side by side
                  alignItems: 'center',
                }}
              >
                {/* Image on the left */}
                <Box sx={{ flex: 1, marginRight: 2 }}>
                  <img
                    src="/img/10thcongress.png"
                    alt="Congress 2024 Banner"
                    style={{
                      width: '80%', // Adjust the width to 80%
                      maxWidth: '500px', // Optionally limit the maximum width
                      display: 'block',
                    }}
                  />
                </Box>

                {/* Text on the right */}
                <Box sx={{ flex: 2 }}>
                  <Typography variant="body1" sx={{ color: '#000', mb: 3 }}>
                    Welcome to the 10th UC CCS Congress 2024! Join us for a day of insightful talks,
                    exhibitions, and networking.
                  </Typography>
                  <Divider sx={{ my: 3 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => alert('You clicked on Register')}
                    >
                      Register
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Congress2024;
