'use client';

import React from 'react';
import { Container, Card, CardMedia, CardContent, Typography, Grid, Box, Avatar, Button, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

function EventDetailsPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Event Banner */}
        <Card sx={{ mb: 4 }}>
          <CardMedia
            component="img"
            height="300"
            image="/img/10thcongress.png"
            alt="Event Banner"
          />
        </Card>

        {/* Event Information */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>10TH UC CCS CONGRESS 2024</Typography>
            <Divider />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1"><strong>Date:</strong> March 15, 2024</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}><strong>Location:</strong> University of Cebu, Main Campus</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}><strong>Description:</strong> A large-scale event bringing together industry experts...</Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Participants/Guests Section */}
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>Participants</Typography>
            <Divider />
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main', mx: 'auto' }}>S</Avatar>
                  <Typography variant="body1" sx={{ mt: 1 }}>Student Name</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main', mx: 'auto' }}>T</Avatar>
                  <Typography variant="body1" sx={{ mt: 1 }}>Teacher Name</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" sx={{ backgroundColor: '#1976d2', ':hover': { backgroundColor: '#1565c0' }, mr: 2 }}>
            Register
          </Button>
          <Button variant="outlined" sx={{ borderColor: '#1976d2', color: '#1976d2', ':hover': { backgroundColor: '#f0f0f0' } }}>
            View Event
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default EventDetailsPage;
