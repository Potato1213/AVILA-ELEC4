'use client'

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  IconButton,
  Avatar,
} from '@mui/material';


function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img
              src="/img/download (1).png"
              alt="EventSphere Logo"
              style={{ height: '30px' }}
            />
            <span style={{ marginLeft: '10px' }}>EVENTSPHERE</span>
          </Typography>
          <IconButton color="inherit">
          </IconButton>
          <Typography variant="body1" sx={{ marginLeft: '10px' }}>
            Student
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: '10px' }}>
            BSIT
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Link href="/dashboard" underline="hover" sx={{ cursor: 'pointer' }}>
            Go Back
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              10th UC CCS CONGRESS 2024
            </Typography>
          </Grid>
          <Grid item xs={12}>
  <Card>
    <Grid container>
      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <CardMedia
          component="img"
          alt="10th UC CCS Congress"
          image="/img/download (1).png"
          sx={{
            height: '100%', // Adjusts image height to fill the space
            width: '100%',  // Adjusts image width to 100% of its grid column
            objectFit: 'cover',
          }}
        />
      </Grid>

      {/* Content Section */}
      <Grid item xs={12} md={6}>
        <CardContent marginLeft={2}>
          <Typography variant="body1" gutterBottom>
            Attention all CCS Students!
          </Typography>
          <Typography variant="body2" paragraph>
            Get ready to mark your calendars because the big day is rapidly approaching! The CCS Department proudly presents some sneak peeks for the pre-congress competitions, featuring competitors from different campuses of the University of Cebu College of Computer Studies: UC Main Campus, UCLM, UCPT, and UC Banilad.
          </Typography>
          <Typography variant="body2" paragraph>
            Feel the excitement as they fiercely compete in various fields such as the Hackathon, Networking competition, General Information Quiz, Java Programming Contest, and the UV UX Contest, and the UIUX Contest on April 11, 2024.
          </Typography>
          <Typography variant="body2" paragraph>
            Furthermore, join us on the ICT Congress for the Lighting Pitch Competition on April 12, 2024.
          </Typography>
          <Typography variant="body2" paragraph>
            Details of purchasable items for this event:
            <Link href="https://CCS/2024/TshirtDesign.pdf" target="_blank">
              https://CCS/2024/TshirtDesign.pdf
            </Link>
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  </Card>
</Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Join event
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;