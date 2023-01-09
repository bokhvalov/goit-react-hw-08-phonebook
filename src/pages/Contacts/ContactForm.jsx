import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { Box, Button, CssBaseline, TextField, Typography } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataValue = new FormData(event.currentTarget);
    const jsonValue = Object.fromEntries(formDataValue.entries());
    event.currentTarget.reset()
    dispatch(addContact(jsonValue));
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        <Typography component="h2" variant="h5">
          Add new contact
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth:500, mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="number"
            label="Number"
            type="number"
            id="number"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Contact
          </Button>
        </Box>
      </Box>
    </>
  );
};
