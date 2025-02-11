'use client';

import React from 'react';
import { TextField, Button, Typography, Box, Container, CssBaseline, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // University-themed blue color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600, // Bold header
    },
    body2: {
      color: '#757575', // Subtle gray for footer and small text
    },
  },
});

function ChangePassword() {
  // Set the background image for the page
  const backgroundImage = '/img/uclmloginbackground.png'; // Path to your background image
  const backgroundColor = '#f0f2f5'; // Fallback background color

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: backgroundColor,
          backgroundImage: `url(${backgroundImage})`, // Set the background image
          backgroundSize: 'cover', // Ensure the image covers the whole page
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="xs" sx={{
          mt: 4, // Reduced margin-top to bring the form higher
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 4,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Softer shadow for card effect
          width: '100%',
          textAlign: 'center', // Center align the content
        }}>
          <CssBaseline />
          <img src="/img/uclmlogo.png" alt="University Logo" style={{ marginBottom: '16px', width: '80px' }} />
          <Typography component="h1" variant="h5" sx={{ color: '#1976d2', mb: 2 }}>
            Change Password
          </Typography>
          <Typography variant="body1" sx={{ color: '#1976d2', mb: 3 }}>
            Enter your old password and choose a new password.
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              id="old-password"
              label="Old Password"
              name="old-password"
              autoComplete="current-password"
              variant="outlined"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              id="new-password"
              label="New Password"
              name="new-password"
              autoComplete="new-password"
              variant="outlined"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              id="confirm-password"
              label="Confirm New Password"
              name="confirm-password"
              autoComplete="new-password"
              variant="outlined"
            />
            {/* Change Password Button */}
            <Link href="/forgotpasswordfinished" passHref>
              <Button
                type="button" // Keep the type as 'button' to prevent form submission
                fullWidth
                variant="contained"
                sx={{
                  mt: 3, mb: 2,
                  backgroundColor: '#1976d2',
                  ':hover': { backgroundColor: '#1565c0' } // Slightly darker on hover
                }}
              >
                Change Password
              </Button>
            </Link>
            <Box sx={{ mt: 2 }}>
              <Link href="/login" variant="body2" sx={{ color: '#1976d2', textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
                Remembered your old password? Sign in
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ChangePassword;
