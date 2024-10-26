'use client';

import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Divider, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Generate a simple calendar for the current month
  const generateCalendar = () => {
    const days = [];
    const date = new Date();
    date.setDate(1);
    const month = date.getMonth();
    const dayOfWeek = date.getDay();
    const lastDate = new Date(date.getFullYear(), month + 1, 0).getDate();

    // Add empty slots for the start of the month
    for (let i = 0; i < dayOfWeek; i++) {
      days.push(<Box key={`empty-${i}`} sx={{ width: '40px', height: '40px' }} />);
    }

    // Add days of the month
    for (let i = 1; i <= lastDate; i++) {
      const day = new Date(date.getFullYear(), month, i);
      days.push(
        <Button
          key={i}
          onClick={() => handleDateClick(day)}
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
            border: '1px solid #ddd',
            backgroundColor: day.toDateString() === selectedDate.toDateString() ? '#1976d2' : '#fff',
            color: day.toDateString() === selectedDate.toDateString() ? '#fff' : '#000',
          }}
        >
          {i}
        </Button>
      );
    }

    return days;
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
                <Typography
                  variant="button"
                  sx={{ fontSize: 18, display: 'block', mb: 2, textAlign: 'center', color: '#000' }}
                >
                  Dashboard
                </Typography>
                <Divider />
                <Typography
                  variant="button"
                  sx={{ fontSize: 18, display: 'block', mt: 2, textAlign: 'center', color: '#000' }}
                >
                  Calendar
                </Typography>
              </Box>
            </Grid>

            {/* Main Content */}
            <Grid
              item
              xs={12}
              sm={10}
              sx={{
                padding: 3,
                marginLeft: '18%',
                marginRight: '18%',
                overflowY: 'auto',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: '#000' }}>
                Calendar
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: 1,
                  gridAutoRows: '1fr',
                  maxWidth: '500px',
                }}
              >
                {generateCalendar()}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Calendar;
