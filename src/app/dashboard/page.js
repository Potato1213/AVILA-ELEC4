'use client';

import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, List, ListItem, ListItemText, Divider, Avatar, Link, IconButton, Button } from '@mui/material'; // Ensure Link and Button are imported
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

function Dashboard() {
  // Use state to manage events
  const [events, setEvents] = useState([
    { title: '10TH UC CCS CONGRESS 2024', image: '/img/10thcongress.png' },
    { title: 'Capstone exhibits', image: '/img/capstone.png' },
    { title: 'Intramurals 2024', image: '/img/intrams.png' },
  ]);

  // Use state to manage recently finished events
  const [recentlyFinished, setRecentlyFinished] = useState([
    { title: 'Mental Health Awareness Month', image: '/img/mentall.png' },
    { title: 'General Assembly', image: '/img/assembly.png' },
  ]);

  // Handle clicking on an event
  const handleEventClick = (event) => {
    alert(`You clicked on: ${event}`);
  };

  // Handle removing an event with confirmation
  const handleRemoveEvent = (eventIndex) => {
    if (window.confirm("Are you sure you want to remove this event?")) {
      setEvents((prev) => prev.filter((_, index) => index !== eventIndex));
    }
  };

  // Handle removing a recently finished event with confirmation
  const handleRemoveRecentlyFinishedEvent = (eventIndex) => {
    if (window.confirm("Are you sure you want to remove this event?")) {
      setRecentlyFinished((prev) => prev.filter((_, index) => index !== eventIndex));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#fff',
          overflow: 'hidden',
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
                width: '16%',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                <img src="/img/uclmlogo.png" alt="University Logo" width="100%" />
              </Box>
              <Box sx={{ width: '100%' }}>
                <Link
                  href="#"
                  variant="button"
                  sx={{ fontSize: 18, display: 'block', mb: 2, textAlign: 'center', color: '#000' }}
                  underline="none"
                >
                  Dashboard
                </Link>
                <Divider />
                <Link
                  href="#"
                  variant="button"
                  sx={{ fontSize: 18, display: 'block', mt: 2, textAlign: 'center', color: '#000' }}
                  underline="none"
                >
                  Calendar
                </Link>
              </Box>
            </Grid>

            {/* Main Content */}
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
                Dashboard
              </Typography>
              <Divider />
              <Grid container spacing={2} marginTop={2}>
                {/* Event Cards */}
                {events.map((event, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{ border: '1px solid #1976d2', borderRadius: 2 }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={event.image} // Use the image path from event object
                        alt={`Event ${index + 1}`}
                      />
                      <CardContent>
                        <Typography variant="body1" component="div" sx={{ color: '#000' }}>
                          {event.title}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                          {/* Action Buttons */}
                          <Button 
                            variant="contained" 
                            size="small" 
                            onClick={() => handleEventClick(event.title)}
                          >
                            View Details
                          </Button>
                          <IconButton
                            aria-label="remove"
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent card click
                              handleRemoveEvent(index);
                            }}
                            sx={{ color: '#f00' }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* Recently Finished Events Section */}
              <Typography variant="h5" gutterBottom sx={{ color: '#000' }}>
                Recently Finished Events
              </Typography>
              <Grid container spacing={2}>
                {recentlyFinished.map((event, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{ border: '1px solid #1976d2', borderRadius: 2 }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={event.image} // Use the image path from event object
                        alt={`Recently Finished Event ${index + 1}`}
                      />
                      <CardContent>
                        <Typography variant="body1" component="div" sx={{ color: '#000' }}>
                          {event.title}
                        </Typography>
                        {/* Remove button */}
                        <IconButton
                          aria-label="remove"
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click
                            handleRemoveRecentlyFinishedEvent(index);
                          }}
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

            {/* Right Sidebar */}
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
              <Box sx={{ mb: 2, textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mx: 'auto' }}>S</Avatar>
                <Typography variant="body1" sx={{ mt: 1, color: '#000' }}>
                  Student BSIT
                </Typography>
              </Box>

              <Box sx={{ width: '100%', paddingX: 2 }}>
                <Typography variant="h6" sx={{ color: '#000', textAlign: 'center' }}>
                  Upcoming Events
                </Typography>
                <List sx={{ overflowY: 'auto', maxHeight: '30vh' }}>
                  {events.map((event, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={event.title} sx={{ color: '#000' }} />
                      {/* Remove button */}
                      <IconButton
                        aria-label="remove"
                        size="small"
                        onClick={() => handleRemoveEvent(index)}
                        sx={{ color: '#f00' }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" sx={{ color: '#000', textAlign: 'center' }}>
                  Recently Finished
                </Typography>
                <List sx={{ overflowY: 'auto', maxHeight: '30vh' }}>
                  {recentlyFinished.map((event, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={event.title} sx={{ color: '#000' }} />
                      {/* Remove button */}
                      <IconButton
                        aria-label="remove"
                        size="small"
                        onClick={() => handleRemoveRecentlyFinishedEvent(index)}
                        sx={{ color: '#f00' }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
