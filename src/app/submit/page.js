'use client'
import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  Stack,
  InputAdornment,
  IconButton,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';

const EventSphere = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [email, setEmail] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleUpload = () => {
    setIsUploading(true);
    // Handle file upload logic here
    // Simulate an upload with a timeout
    setTimeout(() => {
      setIsUploading(false);
      alert("Files uploaded successfully!");
      setFiles([]); // Clear files after upload
    }, 2000);
  };

  const handleFileRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff', // White background for form container
        padding: 3,
        borderRadius: 2, // Rounded corners
        boxShadow: 3, // Add shadow for a card-like effect
        minHeight: '100vh',
          }}>
    <Container maxWidth="md" sx={{ mt: 4 ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff', // White background for form container
            padding: 3,
            borderRadius: 2, // Rounded corners
            boxShadow: 3, // Card-like shadow
            width: '100%', // Ensure it takes full width of its parent
        }}>
      <Typography variant="h4" align="center" gutterBottom>
        10th UC CCS CONGRESS 2024
      </Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              border: '1px solid #ccc',
            }}
          >
            <img
              src="/img/download (1).png"
              alt="Event Banner"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Can you submit pictures of you in the event for proof of attendance.
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            <Box
              sx={{
                width: '100%',
                height: '150px',
                border: '1px dashed #ccc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => {
                document.getElementById('fileInput').click();
              }}
            >
              {isUploading ? (
                <CircularProgress />
              ) : (
                <>
                  <CloudUploadIcon sx={{ fontSize: '3rem' }} />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Drag & Drop files here
                  </Typography>
                </>
              )}
            </Box>

            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              multiple
            />

            <Button
              variant="contained"
              disabled={isUploading || files.length === 0}
              onClick={handleUpload}
            >
              {isUploading ? "Uploading..." : "Upload Files"}
            </Button>
          </Stack>

          {files.length > 0 && (
            <List sx={{ mt: 2 }}>
              {files.map((file, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleFileRemove(index)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={file.name} />
                </ListItem>
              ))}
            </List>
          )}

          <TextField
            fullWidth
            label="Enter your email address"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Stack direction="row" spacing={2} mt={2} justifyContent="center">
            <Button variant="contained" onClick={() => {}}>
              Back
            </Button>
            <Button
              variant="contained"
              color="red"
              disabled={isUploading || files.length === 0 || !email.trim()}
              onClick={() => {
                // Handle "Next" button logic here
              }}
            >
              Next
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default EventSphere;
