'use client'
import React, { useState, useCallback } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Stack,
  InputAdornment,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  Avatar,
  Alert,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { useDropzone } from 'react-dropzone';

const CreateEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*, video/*',
    onDrop,
    multiple: true,
  });

  const handleCancel = () => {
    console.log('Cancel button clicked');
    // Add your cancel logic here if needed
  };

  const handleNext = () => {
    if (!eventName.trim()) {
      setError('Please enter an event name.');
      return;
    }

    if (!eventDescription.trim()) {
      setError('Please enter an event description.');
      return;
    }

    console.log('Event name:', eventName);
    console.log('Event description:', eventDescription);
    console.log('Files:', files.map(file => file.file.name));

    // Proceed to next step
  };

  const handleFileRemove = (fileToRemove) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter(
        (file) => file.preview !== fileToRemove.preview
      );
      URL.revokeObjectURL(fileToRemove.preview);
      return updatedFiles;
    });
  };

  const handleCloseError = () => {
    setError('');
  };

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" align="center" mb={2}>
          Create New Event
        </Typography>
        {error && (
          <Alert severity="error" onClose={handleCloseError} sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name of Event"
              fullWidth
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Save">
                      <IconButton edge="end">
                        <SaveIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upload Files
                </Typography>
                <Box
                  {...getRootProps({ className: 'dropzone' })}
                  sx={{
                    border: '2px dashed #ddd',
                    borderRadius: 1,
                    padding: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: isDragActive ? '#f0f0f0' : 'white',
                  }}
                >
                  <input {...getInputProps()} />
                  <Stack alignItems="center">
                    <Avatar sx={{ bgcolor: '#c9f0ff', mb: 1 }}>
                      <CloudUploadIcon />
                    </Avatar>
                    <Typography variant="body2">
                      {isDragActive
                        ? 'Drop the files here...'
                        : 'Drag & drop files here or click to select files'}
                    </Typography>
                  </Stack>
                </Box>
                {files.length > 0 && (
                  <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    {files.map(({ file, preview }) => (
                      <Box
                        key={preview}
                        display="flex"
                        alignItems="center"
                        mb={1}
                      >
                        <img
                          src={preview}
                          alt={file.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            objectFit: 'cover',
                            borderRadius: '4px',
                            marginRight: '8px',
                          }}
                        />
                        <IconButton
                          aria-label="remove file"
                          onClick={() => handleFileRemove({ preview })}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    ))}
                  </Stack>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <Button variant="contained" color="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CreateEventPage;
