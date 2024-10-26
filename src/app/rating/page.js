'use client'
import * as React from 'react';
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';

const RatingScale = () => {
  const [rating, setRating] = React.useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2, marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          10th UC CCS CONGRESS 2024
        </Typography>

        {/* Question Input */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Type Question Here..."
              variant="outlined"
            />
          </Grid>

          {/* Rating Scale */}
          <Grid item xs={12} mt={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <Box
                  key={value}
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  <IconButton
                    onClick={() => handleRating(value)}
                    sx={{
                      color: value <= rating ? '#fbc02d' : '#e0e0e0',
                    }}
                    aria-label={`${value} star rating`}
                  >
                    <StarIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="caption">
                    {value === 1 && 'Very Bad'}
                    {value === 2 && 'Bad'}
                    {value === 3 && 'Neutral'}
                    {value === 4 && 'Good'}
                    {value === 5 && 'Very Good'}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Navigation Buttons */}
        <Grid container mt={4} justifyContent="space-between">
          <Grid item>
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RatingScale;
