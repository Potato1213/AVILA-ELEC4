'use client'

import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Link, Box, Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
    body2: {
      color: '#757575',
    },
  },
});

function Login() {
  const backgroundImage = '/img/uclmloginbackground.png';
  const backgroundColor = '#f0f2f5';

  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log("Login component mounted");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!idNumber || !password) {
      setError('Both fields are required.');
      return;
    }
    setError(''); // Clear error
    console.log("Logging in with", { idNumber, password, staySignedIn });
    window.location.href = '/dashboard'; 
  };

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
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="xs" sx={{
          mt: 4,
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 4,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          textAlign: 'center',
        }}>
          <CssBaseline />
          <img src="/img/uclmlogo.png" alt="University Logo" style={{ marginBottom: '16px', width: '80px' }} />
          <Typography component="h1" variant="h5" sx={{ color: '#1976d2', mb: 2 }}>
            University of Cebu
          </Typography>
          <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="idNumber"
              label="ID Number"
              name="idNumber"
              autoComplete="idNumber"
              autoFocus
              variant="outlined"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1, textAlign: 'left' }}>
                {error}
              </Typography>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  checked={staySignedIn}
                  onChange={(e) => setStaySignedIn(e.target.checked)}
                />
              }
              label="Stay signed in"
              sx={{ color: '#333', fontWeight: 500 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, 
                backgroundColor: '#1976d2',
                ':hover': { backgroundColor: '#1565c0' }
              }}
            >
              Log In
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Link href="/register" variant="body2" sx={{ color: '#1976d2', ':hover': { textDecoration: 'underline' } }}>
                Don’t have an account?
              </Link>
              <Link href="/forgotpassword" variant="body2" sx={{ color: '#1976d2', ':hover': { textDecoration: 'underline' } }}>
                Forgot Password?
              </Link>
            </Box>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 5 }}>
              © EVENTSPHERE {new Date().getFullYear()}
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
