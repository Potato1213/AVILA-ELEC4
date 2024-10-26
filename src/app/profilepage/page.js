'use client';

import React from 'react';
import { Avatar, Container, Grid, Card, CardContent, Typography, Box, Button, Divider, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

// Define your theme
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
    h5: {
      fontWeight: 600,
    },
    body1: {
      color: '#000',
    },
  },
});

function ProfilePage() {
  // Handle removing an event (simulating the functionality)
  const handleRemoveEvent = (eventIndex) => {
    if (window.confirm("Are you sure you want to remove this event?")) {
      console.log(`Event ${eventIndex} removed.`);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
        <Container maxWidth="xl" sx={{ padding: 0 }}>
          <Grid container spacing={0} sx={{ height: '100vh' }}>
            {/* Left Sidebar (if needed, similar to Dashboard) */}
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
                width: '16%',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 100, height: 100 }}>S</Avatar>
                <Typography variant="h6" sx={{ color: '#000', mt: 1 }}>Student Name</Typography>
              </Box>
            </Grid>

            {/* Main Profile Content */}
            <Grid
              item
              xs={12}
              sm={7}
              sx={{
                padding: 3,
                marginLeft: '18%',
                marginRight: '18%',
                overflowY: 'auto',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: '#000' }}>
                Profile
              </Typography>
              <Divider />
              <Grid container spacing={2} marginTop={2}>
                {/* Personal Info Section */}
                <Grid item xs={12}>
                  <Card sx={{ border: '1px solid #1976d2', borderRadius: 2 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 2 }}>Personal Information</Typography>
                      <Divider />
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        <strong>Email:</strong> student@example.com
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        <strong>Phone:</strong> +123456789
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* Event Participation Section */}
              <Typography variant="h6" gutterBottom sx={{ color: '#000' }}>
                Events Participated
              </Typography>
              <Grid container spacing={2}>
                {/* Event Cards (similar to Dashboard) */}
                {[{ title: '10TH UC CCS CONGRESS 2024' }, { title: 'Capstone exhibits' }].map((event, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card sx={{ border: '1px solid #1976d2', borderRadius: 2 }}>
                      <CardContent>
                        <Typography variant="body1">{event.title}</Typography>
                        <IconButton
                          aria-label="remove"
                          size="small"
                          onClick={() => handleRemoveEvent(index)}
                          sx={{ float: 'right', color: '#f00' }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Right Sidebar (if needed) */}
            <Grid
              item
              xs={12}
              sm={3}
              sx={{
                backgroundColor: '#fff',
                paddingTop: 2,
                position: 'fixed',
                right: 0,
                top: 0,
                bottom: 0,
                width: '16%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderLeft: '1px solid #e0e0e0',
                overflowY: 'auto',
              }}
            >
              <Button variant="contained" sx={{ mt: 4, backgroundColor: '#1976d2', ':hover': { backgroundColor: '#1565c0' } }}>
                Account Settings
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ProfilePage;
