'use client'
import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Box, Stack, Typography } from '@mui/material';

const EventForm = () => {
  const [eventDate, setEventDate] = useState('');
  const [needPicture, setNeedPicture] = useState('');
  const [needSurvey, setNeedSurvey] = useState('');
  const [error, setError] = useState('');

  const handleDateChange = (event) => {
    setEventDate(event.target.value);
  };

  const handlePictureChange = (event) => {
    setNeedPicture(event.target.value);
  };

  const handleSurveyChange = (event) => {
    setNeedSurvey(event.target.value);
  };

  const handleSubmit = () => {
    if (!eventDate || !needPicture || !needSurvey) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    // Handle form submission logic here
    console.log('Event Date:', eventDate);
    console.log('Need Picture:', needPicture);
    console.log('Need Survey:', needSurvey);
  };

  const handleCancel = () => {
    // Handle cancel button click
    console.log('Cancel button clicked');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Event Details
      </Typography>
      <TextField
        label="Event Name"
        variant="outlined"
        fullWidth
        defaultValue="10th UC CCS CONGRESS 2024"
        disabled
      />
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
        <TextField
          label="Event Duration"
          variant="outlined"
          defaultValue="1 Day"
          disabled
          fullWidth
        />
        <TextField
          label="Event Date"
          type="date"
          value={eventDate}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Do you need a picture?</Typography>
        <RadioGroup
          aria-label="need-picture"
          name="need-picture"
          value={needPicture}
          onChange={handlePictureChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Do you need a survey?</Typography>
        <RadioGroup
          aria-label="need-survey"
          name="need-survey"
          value={needSurvey}
          onChange={handleSurveyChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </Box>
      {error && (
        <Box sx={{ mt: 2 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}
      <Stack direction="row" spacing={2} mt={2}>
        <Button variant="contained" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default EventForm;
